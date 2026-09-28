const fs = require("fs");
const {
    Document,
    Packer,
    Paragraph,
    TextRun,
    Table,
    TableRow,
    TableCell,
    WidthType,
    BorderStyle,
    AlignmentType,
    VerticalAlign,
    Header,
    Footer,
    ImageRun,
    TextWrappingType,
    TextWrappingSide,
    HorizontalPositionRelativeFrom,
    VerticalPositionRelativeFrom,
    ShadingType
} = require("docx");

// Color Palette
const COLOR_NAVY_BLACK = "111827";
const COLOR_DESIGN_BLUE = "0E7490";
const COLOR_COMPANY_BLUE = "1E3A8A";
const COLOR_FOOTER_CYAN = "22D3EE";
const COLOR_GRAY_LIGHT = "E5E7EB";
const COLOR_GRAY_TEXT = "4B5563";

const logoBuffer = fs.readFileSync("logo.png");
const watermarkBuffer = fs.readFileSync("watermark.png");

// Helper for No Borders
const NO_BORDER = { style: BorderStyle.NONE };
const ALL_NO_BORDERS = {
    top: NO_BORDER,
    bottom: NO_BORDER,
    left: NO_BORDER,
    right: NO_BORDER,
    insideHorizontal: NO_BORDER,
    insideVertical: NO_BORDER,
};

const doc = new Document({
    sections: [{
        properties: {
            page: {
                margin: {
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                },
            },
        },
        headers: {
            default: new Header({
                children: [
                    // 1. TOP NAVY/BLACK BAR (Full Width)
                    new Table({
                        width: { size: 100, type: WidthType.PERCENTAGE },
                        borders: ALL_NO_BORDERS,
                        rows: [
                            new TableRow({
                                height: { value: 250, rule: "exact" },
                                children: [
                                    new TableCell({
                                        width: { size: 100, type: WidthType.PERCENTAGE },
                                        shading: { fill: COLOR_NAVY_BLACK },
                                        children: [new Paragraph("")],
                                    }),
                                ],
                            }),
                        ],
                    }),

                    // 2. SECOND OFFSET BLUE BAR
                    new Table({
                        width: { size: 100, type: WidthType.PERCENTAGE },
                        borders: ALL_NO_BORDERS,
                        rows: [
                            new TableRow({
                                height: { value: 350, rule: "exact" },
                                children: [
                                    new TableCell({
                                        width: { size: 70, type: WidthType.PERCENTAGE },
                                        children: [new Paragraph("")],
                                    }),
                                    new TableCell({
                                        width: { size: 30, type: WidthType.PERCENTAGE },
                                        shading: { fill: COLOR_DESIGN_BLUE },
                                        children: [new Paragraph("")],
                                    }),
                                ],
                            }),
                        ],
                    }),

                    // Spacer
                    new Paragraph({ children: [new TextRun({ text: "", size: 12 })] }),

                    // 3. LOGO AND COMPANY NAME
                    new Table({
                        width: { size: 100, type: WidthType.PERCENTAGE },
                        borders: ALL_NO_BORDERS,
                        rows: [
                            new TableRow({
                                children: [
                                    new TableCell({
                                        width: { size: 50, type: WidthType.PERCENTAGE },
                                        children: [
                                            new Paragraph({
                                                children: [
                                                    new ImageRun({
                                                        data: logoBuffer,
                                                        transformation: {
                                                            width: 100,
                                                            height: 75,
                                                        },
                                                    }),
                                                ],
                                                indent: { left: 800 },
                                            }),
                                        ],
                                    }),
                                    new TableCell({
                                        width: { size: 50, type: WidthType.PERCENTAGE },
                                        verticalAlign: VerticalAlign.CENTER,
                                        children: [
                                            new Paragraph({
                                                alignment: AlignmentType.RIGHT,
                                                children: [
                                                    new TextRun({
                                                        text: "GLG AND COMPANY",
                                                        bold: true,
                                                        size: 48,
                                                        color: COLOR_COMPANY_BLUE,
                                                        font: "Arial",
                                                    }),
                                                ],
                                                indent: { right: 800 },
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),

                    // --- WATERMARK ---
                    new Paragraph({
                        children: [
                            new ImageRun({
                                data: watermarkBuffer,
                                transformation: {
                                    width: 600,
                                    height: 500,
                                },
                                floating: {
                                    horizontalPosition: {
                                        relative: HorizontalPositionRelativeFrom.PAGE,
                                        align: AlignmentType.CENTER,
                                    },
                                    verticalPosition: {
                                        relative: VerticalPositionRelativeFrom.PAGE,
                                        align: VerticalAlign.CENTER,
                                    },
                                    wrap: {
                                        type: TextWrappingType.NONE,
                                        side: TextWrappingSide.BOTH_SIDES,
                                    },
                                },
                            }),
                        ],
                    }),
                ],
            }),
        },
        footers: {
            default: new Footer({
                children: [
                    // FOOTER DECORATIVE CYAN LINE
                    new Table({
                        width: { size: 100, type: WidthType.PERCENTAGE },
                        borders: {
                            top: { style: BorderStyle.SINGLE, size: 8, color: COLOR_FOOTER_CYAN },
                            bottom: NO_BORDER,
                            left: NO_BORDER,
                            right: NO_BORDER,
                            insideHorizontal: NO_BORDER,
                            insideVertical: NO_BORDER,
                        },
                        rows: [new TableRow({ children: [new TableCell({ children: [] })] })],
                    }),

                    // FOOTER BLOCKS AND TEXT
                    new Table({
                        width: { size: 100, type: WidthType.PERCENTAGE },
                        borders: ALL_NO_BORDERS,
                        rows: [
                            new TableRow({
                                children: [
                                    // Navy Side Block
                                    new TableCell({
                                        width: { size: 8, type: WidthType.PERCENTAGE },
                                        shading: { fill: COLOR_COMPANY_BLUE },
                                        children: [new Paragraph({ text: "", spacing: { before: 300, after: 300 } })],
                                    }),
                                    // Contact Details
                                    new TableCell({
                                        width: { size: 25, type: WidthType.PERCENTAGE },
                                        children: [
                                            new Paragraph({
                                                children: [
                                                    new TextRun({ text: "  +91 8778626955", size: 18, font: "Arial", bold: true, color: COLOR_GRAY_TEXT }),
                                                ],
                                                indent: { left: 100 },
                                            }),
                                            new Paragraph({
                                                children: [
                                                    new TextRun({ text: "  info@gayathrica.com", size: 18, font: "Arial", bold: true, color: COLOR_GRAY_TEXT }),
                                                ],
                                                indent: { left: 100 },
                                            }),
                                        ],
                                        verticalAlign: VerticalAlign.CENTER,
                                    }),
                                    // Separator Line
                                    new TableCell({
                                        width: { size: 1, type: WidthType.PERCENTAGE },
                                        children: [new Paragraph("")],
                                        borders: {
                                            left: { style: BorderStyle.SINGLE, size: 12, color: COLOR_COMPANY_BLUE },
                                        },
                                    }),
                                    // Address
                                    new TableCell({
                                        width: { size: 58, type: WidthType.PERCENTAGE },
                                        children: [
                                            new Paragraph({
                                                children: [
                                                    new TextRun({
                                                        text: " PLOT NO: 32, DOOR NO: 3/1, AYYAPPA NAGAR, FIRST MAIN ROAD, VIRUGAMBAKKAM, CHENNAI - 600 092",
                                                        size: 16,
                                                        font: "Arial",
                                                        bold: true,
                                                        color: COLOR_GRAY_TEXT
                                                    }),
                                                ],
                                            }),
                                        ],
                                        verticalAlign: VerticalAlign.CENTER,
                                    }),
                                    // Light Gray Block
                                    new TableCell({
                                        width: { size: 8, type: WidthType.PERCENTAGE },
                                        shading: { fill: COLOR_GRAY_LIGHT },
                                        children: [new Paragraph({ text: "", spacing: { before: 300, after: 300 } })],
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        },
        children: [
            new Paragraph({ text: "", spacing: { after: 2000 } }),
            new Paragraph({
                children: [new TextRun({ text: "To,", font: "Arial", size: 24 })],
                indent: { left: 1200 },
            }),
            new Paragraph({
                children: [new TextRun({ text: "The Client,", bold: true, font: "Arial", size: 24 })],
                indent: { left: 1200 },
            }),
            new Paragraph({
                children: [new TextRun({ text: "Chennai.", bold: true, font: "Arial", size: 24 })],
                indent: { left: 1200 },
            }),
            new Paragraph({ text: "", spacing: { after: 800 } }),
            new Paragraph({
                children: [
                    new TextRun({
                        text: "Subject: Audit Report - Final Letterhead Implementation",
                        bold: true,
                        underline: {},
                        font: "Arial",
                        size: 24,
                    }),
                ],
                indent: { left: 1200, right: 1200 },
            }),
            new Paragraph({ text: "", spacing: { after: 800 } }),
            new Paragraph({
                children: [
                    new TextRun({
                        text: "This document features the finalized letterhead with zero page margins. The header and footer now span the full width of the page with no visible cell borders, exactly as requested in your design.",
                        font: "Arial",
                        size: 24,
                    }),
                ],
                indent: { left: 1200, right: 1200 },
            }),
        ],
    }],
});

Packer.toBuffer(doc).then((buffer) => {
    fs.writeFileSync("GLG_Letterhead_Official.docx", buffer);
    console.log("✅ Success! 'GLG_Letterhead_Official.docx' generated.");
});
