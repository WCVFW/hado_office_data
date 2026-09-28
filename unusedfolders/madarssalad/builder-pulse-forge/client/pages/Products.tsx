import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Switch } from "@/components/ui/switch";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BuyNowButton from "@/components/BuyNowButton";
import { ChevronDown, Settings } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import productService, { Product } from "@/services/productService";
import adminService from "@/services/adminService";

const Products = () => {
  const { user, isAdmin } = useAuth();
  const [products, setProducts] = useState<Product[]>([]);
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>("");
  const [expandedCategory, setExpandedCategory] = useState<string>("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [showDisabled, setShowDisabled] = useState(false);

  // Get unique categories from products
  const categories = [
    ...new Set(products.map((p) => p.category).filter(Boolean)),
  ];

  // Mock subcategories since our backend doesn't have them yet
  const getSubcategories = (category: string) => {
    const subcategoryMap: { [key: string]: string[] } = {
      BREAKFAST: ["Bowls", "Toast", "Smoothies"],
      LUNCH: ["Salads", "Wraps", "Bowls"],
      DINNER: ["Mains", "Pasta", "Curry"],
      SNACKS: ["Healthy", "Quick Bites"],
      BEVERAGES: ["Smoothies", "Juices"],
      DESSERTS: ["Sweet Treats", "Healthy Options"],
    };
    return subcategoryMap[category.toUpperCase()] || [];
  };

  useEffect(() => {
    fetchProducts();

    // Listen for hamburger menu clicks from header
    const handleOpenSidebar = () => {
      setSidebarOpen(true);
    };

    window.addEventListener("openProductsSidebar", handleOpenSidebar);

    return () => {
      window.removeEventListener("openProductsSidebar", handleOpenSidebar);
    };
  }, []);

  useEffect(() => {
    // Only show enabled products to regular users, admins can toggle to see all
    const safeAllProducts = Array.isArray(allProducts) ? allProducts : [];
    const visibleProducts =
      showDisabled && isAdmin
        ? safeAllProducts
        : safeAllProducts.filter((p) => p.isEnabled);
    setProducts(visibleProducts);
    setFilteredProducts(visibleProducts);

    // Apply category/subcategory filters to new product list
    if (selectedSubcategory) {
      const filtered = visibleProducts.filter(
        (p) => p.category === selectedCategory,
      );
      setFilteredProducts(filtered);
    } else if (selectedCategory) {
      const filtered = visibleProducts.filter(
        (p) => p.category === selectedCategory,
      );
      setFilteredProducts(filtered);
    }
  }, [
    allProducts,
    showDisabled,
    isAdmin,
    selectedCategory,
    selectedSubcategory,
  ]);

  const fetchProducts = async () => {
    try {
      const data = await productService.getAllProducts();

      // Ensure data is always an array
      const safeData = Array.isArray(data) ? data : [];
      setAllProducts(safeData);

      // User page: Only show enabled products to regular users
      const enabledProducts = safeData.filter((p) => p.isEnabled === true);
      setProducts(enabledProducts);
      setFilteredProducts(enabledProducts);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  const toggleProductStatus = async (
    productId: string,
    currentStatus: boolean,
  ) => {
    try {
      await adminService.toggleProductStatus(productId);
      // Update local state
      setAllProducts((prev) =>
        prev.map((p) =>
          p.id === productId ? { ...p, isEnabled: !currentStatus } : p,
        ),
      );
      await fetchProducts();
    } catch (error) {
      console.error("Error updating product status:", error);
    }
  };

  const deleteProduct = async (productId: string) => {
    if (
      !confirm(
        "Are you sure you want to delete this product? This action cannot be undone.",
      )
    ) {
      return;
    }

    try {
      await adminService.deleteProduct(productId);
      // Update local states
      setAllProducts((prev) => prev.filter((p) => p.id !== productId));
      setProducts((prev) => prev.filter((p) => p.id !== productId));
      setFilteredProducts((prev) => prev.filter((p) => p.id !== productId));
      await fetchProducts();
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const handleCategoryClick = (category: string) => {
    if (expandedCategory === category) {
      setExpandedCategory("");
      setSelectedCategory("");
      setFilteredProducts(products);
    } else {
      setExpandedCategory(category);
      setSelectedCategory(category);
      setSelectedSubcategory("");

      const categoryProducts = products.filter((p) => p.category === category);
      setFilteredProducts(categoryProducts);
    }
  };

  const handleSubcategoryClick = (category: string, subcategory: string) => {
    setSelectedSubcategory(subcategory);

    const subcategoryProducts = products.filter((p) => p.category === category);
    setFilteredProducts(subcategoryProducts);
    setSidebarOpen(false);
  };

  const getDietaryTags = (tags: string[] | null) => {
    if (!tags) return [];

    const tagMap: { [key: string]: { label: string; color: string } } = {
      healthy: { label: "Healthy", color: "bg-green-100 text-green-800" },
      "high-protein": {
        label: "High Protein",
        color: "bg-amber-100 text-amber-800",
      },
      vegan: { label: "Vegan", color: "bg-green-100 text-green-800" },
      "gluten-free": {
        label: "Gluten Free",
        color: "bg-blue-100 text-blue-800",
      },
      mediterranean: {
        label: "Mediterranean",
        color: "bg-purple-100 text-purple-800",
      },
      spicy: { label: "Spicy", color: "bg-red-100 text-red-800" },
    };

    return tags.map((tag) => tagMap[tag.toLowerCase()]).filter(Boolean);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="flex items-center justify-center py-32">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="flex">
        {/* Category Panel */}
        <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
          <SheetContent side="left" className="w-80 p-0">
            <div className="h-full bg-card text-card-foreground">
              <div className="p-6 border-b">
                <h2 className="text-2xl font-bold text-foreground">
                  Menu Categories
                </h2>
              </div>

              <div className="p-4 space-y-2">
                <button
                  onClick={() => {
                    setSelectedCategory("");
                    setSelectedSubcategory("");
                    setExpandedCategory("");
                    setFilteredProducts(products);
                    setSidebarOpen(false);
                  }}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                    selectedCategory === ""
                      ? "bg-primary/10 text-primary font-medium"
                      : "hover:bg-muted text-muted-foreground hover:text-foreground"
                  }`}
                >
                  All Products
                </button>

                {categories.map((category) => (
                  <div key={category} className="space-y-1">
                    <button
                      onClick={() => handleCategoryClick(category)}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-colors flex items-center justify-between ${
                        selectedCategory === category
                          ? "bg-primary/10 text-primary font-medium"
                          : "hover:bg-muted text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      <span>{category}</span>
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${
                          expandedCategory === category ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {expandedCategory === category && (
                      <div className="ml-4 space-y-1 animate-accordion-down">
                        {getSubcategories(category).map((subcategory) => (
                          <button
                            key={subcategory}
                            onClick={() =>
                              handleSubcategoryClick(category, subcategory)
                            }
                            className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                              selectedSubcategory === subcategory
                                ? "bg-primary/5 text-primary underline"
                                : "hover:bg-muted text-muted-foreground hover:text-foreground"
                            }`}
                          >
                            {subcategory}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </SheetContent>
        </Sheet>

        {/* Main Content */}
        <div className="flex-1 p-6">
          <div className="mb-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-foreground">
                  {selectedSubcategory
                    ? `${selectedCategory} - ${selectedSubcategory}`
                    : selectedCategory || "All Products"}
                </h1>
                <p className="text-muted-foreground mt-2">
                  {filteredProducts.length} delicious options available
                </p>
              </div>

              {/* Admin Controls */}
              {isAdmin && (
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <label
                      htmlFor="show-disabled"
                      className="text-sm font-medium"
                    >
                      Show Disabled
                    </label>
                    <Switch
                      id="show-disabled"
                      checked={showDisabled}
                      onCheckedChange={setShowDisabled}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 justify-items-center sm:justify-items-stretch">
            {filteredProducts.map((item) => (
              <Card
                key={item.id}
                className={`group cursor-pointer transition-all duration-500 hover:shadow-lg hover:scale-105 bg-gradient-to-br from-gray-50 to-green-50 border-border hover:border-green-300 max-w-[320px] relative z-10 ${
                  !item.isEnabled ? "opacity-50" : ""
                }`}
                onClick={() => setSelectedProduct(item)}
              >
                <div
                  className="aspect-[5:4] bg-muted rounded-t-xl relative overflow-hidden"
                  onMouseEnter={() => setHoveredCard(item.name)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <img
                    src={
                      item.imageUrl ||
                      "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300&h=200&fit=crop"
                    }
                    alt={item.name}
                    className="w-full h-full object-cover object-center transition-all duration-500 group-hover:scale-110"
                    style={{
                      objectPosition:
                        hoveredCard === item.name ? "center" : "center 30%",
                    }}
                    loading="lazy"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src =
                        "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300&h=200&fit=crop";
                    }}
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-500" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="text-white font-semibold bg-black/40 px-3 py-1 rounded text-sm">
                      View Details
                    </span>
                  </div>
                </div>

                <CardHeader className="pb-2 p-3">
                  <CardTitle className="text-base font-bold text-foreground leading-tight">
                    {item.name}
                  </CardTitle>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-green-600">
                      ₹{item.price}
                    </span>
                    <Badge
                      variant={
                        item.productType === "VEG" ? "secondary" : "destructive"
                      }
                      className="text-xs"
                    >
                      {item.productType}
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent className="p-3 pt-0">
                  <div className="space-y-2">
                    <div className="bg-green-50 p-2 rounded-lg">
                      <div className="text-xs text-green-800 font-medium mb-1">
                        Nutrition
                      </div>
                      <div className="grid grid-cols-2 gap-1 text-xs text-green-700">
                        <div>Cal: {item.calories || 0}</div>
                        <div>
                          Pro: {Math.round((item.calories * 0.15) / 4) || 0}g
                        </div>
                        <div>
                          Carb: {Math.round((item.calories * 0.55) / 4) || 0}g
                        </div>
                        <div>
                          Fat: {Math.round((item.calories * 0.3) / 9) || 0}g
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1">
                      {getDietaryTags(item.tags).map((tag, tagIndex) => (
                        <Badge
                          key={tagIndex}
                          variant="outline"
                          className="text-xs bg-green-100 text-green-800 border-green-300 px-1 py-0"
                        >
                          {tag.label}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-1">
                      <div
                        onClick={(e) => e.stopPropagation()}
                        className="flex-1 relative z-50"
                      >
                        <BuyNowButton
                          productName={item.name}
                          swiggyUrl={null}
                          zomatoUrl={null}
                        />
                      </div>

                      {/* Admin Controls */}
                      {isAdmin && (
                        <div className="flex gap-1">
                          <Button
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleProductStatus(item.id, item.isEnabled);
                            }}
                            variant="outline"
                            size="sm"
                            className="px-2 h-8 text-xs"
                          >
                            {item.isEnabled ? "Disable" : "Enable"}
                          </Button>
                          <Button
                            onClick={(e) => {
                              e.stopPropagation();
                              deleteProduct(item.id);
                            }}
                            variant="destructive"
                            size="sm"
                            className="px-2 h-8"
                          >
                            Del
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Product Detail Modal */}
      <Dialog
        open={!!selectedProduct}
        onOpenChange={() => setSelectedProduct(null)}
      >
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          {selectedProduct && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold">
                  {selectedProduct.name}
                </DialogTitle>
              </DialogHeader>

              <div className="space-y-6">
                <Carousel className="w-full max-w-lg mx-auto">
                  <CarouselContent>
                    <CarouselItem>
                      <div className="aspect-square rounded-xl overflow-hidden">
                        <img
                          src={
                            selectedProduct.imageUrl ||
                            "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=400&fit=crop"
                          }
                          alt={selectedProduct.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </CarouselItem>
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>

                {selectedProduct.description && (
                  <div>
                    <h3 className="font-semibold mb-2">Description</h3>
                    <p className="text-muted-foreground">
                      {selectedProduct.description}
                    </p>
                  </div>
                )}

                <div className="bg-green-50 p-4 rounded-lg border">
                  <h4 className="font-semibold mb-2 text-green-800">
                    Nutrition Information
                  </h4>
                  <div className="grid grid-cols-3 gap-4 text-sm text-green-700">
                    <div>Calories: {selectedProduct.calories || 0}</div>
                    <div>
                      Protein:{" "}
                      {Math.round((selectedProduct.calories * 0.15) / 4) || 0}g
                    </div>
                    <div>
                      Carbs:{" "}
                      {Math.round((selectedProduct.calories * 0.55) / 4) || 0}g
                    </div>
                    <div>
                      Fat:{" "}
                      {Math.round((selectedProduct.calories * 0.3) / 9) || 0}g
                    </div>
                    <div>Prep Time: {selectedProduct.prepTimeMinutes}min</div>
                    <div>Servings: {selectedProduct.servings}</div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {getDietaryTags(selectedProduct.tags).map((tag, index) => (
                    <Badge
                      key={index}
                      className="bg-green-100 text-green-800 border-green-300"
                    >
                      {tag.label}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t">
                  <span className="text-2xl font-bold text-green-600">
                    ₹{selectedProduct.price}
                  </span>
                  <BuyNowButton
                    productName={selectedProduct.name}
                    swiggyUrl={null}
                    zomatoUrl={null}
                  />
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Products;
