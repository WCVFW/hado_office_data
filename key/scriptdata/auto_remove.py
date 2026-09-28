import sys
import cv2
import numpy as np

def add_smart_watermark(input_path, output_path):
    img = cv2.imread(input_path)
    if img is None:
        print("Failed to load image: " + input_path)
        return

    h, w = img.shape[:2]

    # 1. Clean the old bottom text and write new one
    cv2.rectangle(img, (0, h - 80), (w, h), (0, 0, 0), -1)
    bottom_text = "Madrasauction.com"
    font = cv2.FONT_HERSHEY_SIMPLEX
    font_scale = 1.3
    thickness = 3
    color = (255, 255, 255)
    text_size = cv2.getTextSize(bottom_text, font, font_scale, thickness)[0]
    text_x = (w - text_size[0]) // 2
    text_y = h - 30
    cv2.putText(img, bottom_text, (text_x, text_y), font, font_scale, color, thickness, cv2.LINE_AA)

    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

    # VERY SMART FIX: Check if the image is a Document (Sale Notice) or a Photograph (Property Image)
    # Documents have a LOT of pure white background. Photos do not.
    white_pixels = np.sum(gray > 240)
    total_pixels = h * w
    is_document = (white_pixels / total_pixels) > 0.35 # If more than 35% is white, it's a document!

    # 2. Clean ALL old watermarks ONLY if it's a document!
    if is_document:
        mask = (gray > 120) & (gray < 252)
        final_mask = np.zeros((h, w), dtype=bool)
        final_mask[120:h-80, :] = mask[120:h-80, :]
        img[final_mask] = [255, 255, 255]

    # 3. Create ONE new diagonal watermark exactly in the center
    watermark_canvas = np.ones((h, w, 3), dtype=np.uint8) * 255
    diag_canvas = np.ones((h*2, w*2, 3), dtype=np.uint8) * 255
    wm_text = "Madrasauction.com"
    
    # If it's a photo, make the watermark slightly more visible so it shows on top of colors
    if is_document:
        wm_color = (220, 220, 220) 
    else:
        wm_color = (180, 180, 180)

    center_x = w
    center_y = h
    wm_font_scale = 3.5
    wm_thick = 5
    tsize = cv2.getTextSize(wm_text, font, wm_font_scale, wm_thick)[0]
    cv2.putText(diag_canvas, wm_text, (center_x - tsize[0]//2, center_y + tsize[1]//2), font, wm_font_scale, wm_color, wm_thick, cv2.LINE_AA)
            
    M = cv2.getRotationMatrix2D((w, h), 30, 1.0)
    rotated_canvas = cv2.warpAffine(diag_canvas, M, (w*2, h*2), borderValue=(255,255,255))
    watermark_canvas = rotated_canvas[h//2 : h//2 + h, w//2 : w//2 + w]
    watermark_canvas = cv2.resize(watermark_canvas, (w, h))

    # 4. SMART MERGE
    final_img = cv2.min(img, watermark_canvas)

    cv2.imwrite(output_path, final_img)
    print("Processed (Document=" + str(is_document) + ") and saved to", output_path)

if __name__ == "__main__":
    if len(sys.argv) != 3:
        print("Usage: python auto_remove.py <input_path> <output_path>")
        sys.exit(1)
    
    input_file = sys.argv[1]
    output_file = sys.argv[2]
    add_smart_watermark(input_file, output_file)
