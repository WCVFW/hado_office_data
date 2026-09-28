import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ExternalLink, ShoppingCart } from "lucide-react";

interface BuyNowButtonProps {
  productName: string;
  swiggyUrl?: string | null;
  zomatoUrl?: string | null;
}

const BuyNowButton = ({
  productName,
  swiggyUrl,
  zomatoUrl,
}: BuyNowButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const hasExternalLinks = swiggyUrl || zomatoUrl;

  const handleExternalLink = (url: string, platform: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
    setIsOpen(false);
  };

  if (!hasExternalLinks) {
    return (
      <Button
        size="sm"
        className="w-full bg-green-600 hover:bg-green-700 text-white"
        disabled
      >
        <ShoppingCart className="h-4 w-4 mr-1" />
        Coming Soon
      </Button>
    );
  }

  // If only one platform is available, direct link
  if ((swiggyUrl && !zomatoUrl) || (!swiggyUrl && zomatoUrl)) {
    const url = swiggyUrl || zomatoUrl;
    const platform = swiggyUrl ? "Swiggy" : "Zomato";

    return (
      <Button
        size="sm"
        className="w-full bg-green-600 hover:bg-green-700 text-white"
        onClick={() => url && handleExternalLink(url, platform)}
      >
        <ExternalLink className="h-4 w-4 mr-1" />
        Order on {platform}
      </Button>
    );
  }

  // Multiple platforms available - show dropdown
  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          size="sm"
          className="w-full bg-green-600 hover:bg-green-700 text-white"
        >
          <ShoppingCart className="h-4 w-4 mr-1" />
          Order Now
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        {swiggyUrl && (
          <DropdownMenuItem
            onClick={() => handleExternalLink(swiggyUrl, "Swiggy")}
          >
            <div className="flex items-center">
              <ExternalLink className="h-4 w-4 mr-2" />
              Order on Swiggy
            </div>
          </DropdownMenuItem>
        )}
        {zomatoUrl && (
          <DropdownMenuItem
            onClick={() => handleExternalLink(zomatoUrl, "Zomato")}
          >
            <div className="flex items-center">
              <ExternalLink className="h-4 w-4 mr-2" />
              Order on Zomato
            </div>
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default BuyNowButton;
