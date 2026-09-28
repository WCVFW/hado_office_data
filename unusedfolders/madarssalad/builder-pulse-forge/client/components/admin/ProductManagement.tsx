import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Plus,
  Search,
  Edit,
  Trash2,
  MoreHorizontal,
  Eye,
  Star,
  Package,
  Filter,
} from "lucide-react";
import adminService, { Product } from "@/services/adminService";
import CSVImportProducts from "./CSVImportProducts";

export default function ProductManagement() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const [productForm, setProductForm] = useState({
    name: "",
    description: "",
    price: "",
    category: "BREAKFAST" as Product["category"],
    productType: "VEG" as Product["productType"],
    calories: "",
    prepTimeMinutes: "",
    servings: "",
    imageUrl: "",
    tags: "",
    ingredients: "",
    allergens: "",
    proteinGrams: "",
    carbsGrams: "",
    fatGrams: "",
    fiberGrams: "",
    sodiumMg: "",
    sugarGrams: "",
    availabilityStatus: "AVAILABLE" as Product["availabilityStatus"],
    isFeatured: false,
  });

  useEffect(() => {
    fetchProducts();
  }, [currentPage, selectedCategory]);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await adminService.getProducts(currentPage, 20);
      setProducts(response.content);
      setTotalPages(response.totalPages);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateProduct = async () => {
    try {
      const productData = {
        ...productForm,
        price: parseFloat(productForm.price),
        calories: parseInt(productForm.calories),
        prepTimeMinutes: parseInt(productForm.prepTimeMinutes),
        servings: parseInt(productForm.servings),
        proteinGrams: productForm.proteinGrams
          ? parseInt(productForm.proteinGrams)
          : 0,
        carbsGrams: productForm.carbsGrams
          ? parseInt(productForm.carbsGrams)
          : 0,
        fatGrams: productForm.fatGrams ? parseInt(productForm.fatGrams) : 0,
        fiberGrams: productForm.fiberGrams
          ? parseInt(productForm.fiberGrams)
          : 0,
        sodiumMg: productForm.sodiumMg ? parseInt(productForm.sodiumMg) : 0,
        sugarGrams: productForm.sugarGrams
          ? parseInt(productForm.sugarGrams)
          : 0,
        tags: productForm.tags
          ? productForm.tags.split(",").map((tag) => tag.trim())
          : [],
        ingredients: productForm.ingredients
          ? productForm.ingredients.split(",").map((ing) => ing.trim())
          : [],
        allergens: productForm.allergens
          ? productForm.allergens.split(",").map((all) => all.trim())
          : [],
      };

      await adminService.createProduct(productData);
      setIsCreateModalOpen(false);
      resetForm();
      fetchProducts();
    } catch (error) {
      console.error("Error creating product:", error);
    }
  };

  const handleUpdateProduct = async () => {
    if (!selectedProduct) return;

    try {
      const productData = {
        ...productForm,
        price: parseFloat(productForm.price),
        calories: parseInt(productForm.calories),
        prepTimeMinutes: parseInt(productForm.prepTimeMinutes),
        servings: parseInt(productForm.servings),
        proteinGrams: productForm.proteinGrams
          ? parseInt(productForm.proteinGrams)
          : 0,
        carbsGrams: productForm.carbsGrams
          ? parseInt(productForm.carbsGrams)
          : 0,
        fatGrams: productForm.fatGrams ? parseInt(productForm.fatGrams) : 0,
        fiberGrams: productForm.fiberGrams
          ? parseInt(productForm.fiberGrams)
          : 0,
        sodiumMg: productForm.sodiumMg ? parseInt(productForm.sodiumMg) : 0,
        sugarGrams: productForm.sugarGrams
          ? parseInt(productForm.sugarGrams)
          : 0,
        tags: productForm.tags
          ? productForm.tags.split(",").map((tag) => tag.trim())
          : [],
        ingredients: productForm.ingredients
          ? productForm.ingredients.split(",").map((ing) => ing.trim())
          : [],
        allergens: productForm.allergens
          ? productForm.allergens.split(",").map((all) => all.trim())
          : [],
      };

      await adminService.updateProduct(selectedProduct.id, productData);
      setIsEditModalOpen(false);
      setSelectedProduct(null);
      resetForm();
      fetchProducts();
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  const handleDeleteProduct = async (productId: string) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      try {
        await adminService.deleteProduct(productId);
        fetchProducts();
      } catch (error) {
        console.error("Error deleting product:", error);
      }
    }
  };

  const handleToggleStatus = async (productId: string) => {
    try {
      await adminService.toggleProductStatus(productId);
      fetchProducts();
    } catch (error) {
      console.error("Error toggling product status:", error);
    }
  };

  const handleToggleFeatured = async (productId: string) => {
    try {
      await adminService.toggleProductFeatured(productId);
      fetchProducts();
    } catch (error) {
      console.error("Error toggling featured status:", error);
    }
  };

  const openEditModal = (product: Product) => {
    setSelectedProduct(product);
    setProductForm({
      name: product.name,
      description: product.description,
      price: product.price.toString(),
      category: product.category,
      productType: product.productType,
      calories: product.calories.toString(),
      prepTimeMinutes: product.prepTimeMinutes.toString(),
      servings: product.servings.toString(),
      imageUrl: product.imageUrl || "",
      tags: product.tags?.join(", ") || "",
      ingredients: product.ingredients?.join(", ") || "",
      allergens: product.allergens?.join(", ") || "",
      proteinGrams: "",
      carbsGrams: "",
      fatGrams: "",
      fiberGrams: "",
      sodiumMg: "",
      sugarGrams: "",
      availabilityStatus: product.availabilityStatus,
      isFeatured: product.isFeatured,
    });
    setIsEditModalOpen(true);
  };

  const resetForm = () => {
    setProductForm({
      name: "",
      description: "",
      price: "",
      category: "BREAKFAST",
      productType: "VEG",
      calories: "",
      prepTimeMinutes: "",
      servings: "",
      imageUrl: "",
      tags: "",
      ingredients: "",
      allergens: "",
      proteinGrams: "",
      carbsGrams: "",
      fatGrams: "",
      fiberGrams: "",
      sodiumMg: "",
      sugarGrams: "",
      availabilityStatus: "AVAILABLE",
      isFeatured: false,
    });
  };

  const getStatusBadge = (status: string, isEnabled: boolean) => {
    if (!isEnabled) return <Badge variant="destructive">Disabled</Badge>;

    const variants: any = {
      AVAILABLE: "default",
      OUT_OF_STOCK: "secondary",
      DISCONTINUED: "destructive",
      SEASONAL: "outline",
    };
    return (
      <Badge variant={variants[status] || "outline"}>
        {status.replace("_", " ")}
      </Badge>
    );
  };

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-6">
      <CSVImportProducts />

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Product Management</CardTitle>
              <CardDescription>
                Manage your menu items and meal options
              </CardDescription>
            </div>
            <Button onClick={() => setIsCreateModalOpen(true)}>
              <Plus className="h-4 w-4 mr-2" />
              Add Product
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          {/* Filters */}
          <div className="flex gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-8"
              />
            </div>
            <Select
              value={selectedCategory}
              onValueChange={setSelectedCategory}
            >
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="BREAKFAST">Breakfast</SelectItem>
                <SelectItem value="LUNCH">Lunch</SelectItem>
                <SelectItem value="DINNER">Dinner</SelectItem>
                <SelectItem value="SNACKS">Snacks</SelectItem>
                <SelectItem value="BEVERAGES">Beverages</SelectItem>
                <SelectItem value="DESSERTS">Desserts</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Products Table */}
          {loading ? (
            <div className="text-center py-8">Loading products...</div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Product</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Featured</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredProducts.map((product) => (
                  <TableRow key={product.id}>
                    <TableCell>
                      <div className="flex items-center space-x-3">
                        {product.imageUrl && (
                          <img
                            src={product.imageUrl}
                            alt={product.name}
                            className="w-10 h-10 rounded object-cover"
                          />
                        )}
                        <div>
                          <p className="font-medium">{product.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {product.calories} cal • {product.prepTimeMinutes}{" "}
                            min
                          </p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">{product.category}</Badge>
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          product.productType === "VEG"
                            ? "default"
                            : "secondary"
                        }
                      >
                        {product.productType}
                      </Badge>
                    </TableCell>
                    <TableCell>${product.price}</TableCell>
                    <TableCell>
                      {getStatusBadge(
                        product.availabilityStatus,
                        product.isEnabled,
                      )}
                    </TableCell>
                    <TableCell>
                      {product.isFeatured && (
                        <Star className="h-4 w-4 text-yellow-500" />
                      )}
                    </TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                          <DropdownMenuItem
                            onClick={() => openEditModal(product)}
                          >
                            <Edit className="h-4 w-4 mr-2" />
                            Edit
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            onClick={() => handleToggleStatus(product.id)}
                          >
                            <Package className="h-4 w-4 mr-2" />
                            {product.isEnabled ? "Disable" : "Enable"}
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            onClick={() => handleToggleFeatured(product.id)}
                          >
                            <Star className="h-4 w-4 mr-2" />
                            {product.isFeatured ? "Unfeature" : "Feature"}
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            onClick={() => handleDeleteProduct(product.id)}
                            className="text-red-600"
                          >
                            <Trash2 className="h-4 w-4 mr-2" />
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-6 space-x-2">
              <Button
                variant="outline"
                size="sm"
                disabled={currentPage === 0}
                onClick={() => setCurrentPage(currentPage - 1)}
              >
                Previous
              </Button>
              <span className="px-3 py-1 text-sm">
                Page {currentPage + 1} of {totalPages}
              </span>
              <Button
                variant="outline"
                size="sm"
                disabled={currentPage === totalPages - 1}
                onClick={() => setCurrentPage(currentPage + 1)}
              >
                Next
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Create/Edit Product Modal */}
      <Dialog
        open={isCreateModalOpen || isEditModalOpen}
        onOpenChange={(open) => {
          if (!open) {
            setIsCreateModalOpen(false);
            setIsEditModalOpen(false);
            setSelectedProduct(null);
            resetForm();
          }
        }}
      >
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>
              {isCreateModalOpen ? "Create New Product" : "Edit Product"}
            </DialogTitle>
            <DialogDescription>
              {isCreateModalOpen
                ? "Add a new product to your menu"
                : "Update product information"}
            </DialogDescription>
          </DialogHeader>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Product Name</Label>
              <Input
                id="name"
                value={productForm.name}
                onChange={(e) =>
                  setProductForm({ ...productForm, name: e.target.value })
                }
                placeholder="Enter product name"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="price">Price ($)</Label>
              <Input
                id="price"
                type="number"
                step="0.01"
                value={productForm.price}
                onChange={(e) =>
                  setProductForm({ ...productForm, price: e.target.value })
                }
                placeholder="0.00"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <Select
                value={productForm.category}
                onValueChange={(value: any) =>
                  setProductForm({ ...productForm, category: value })
                }
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="BREAKFAST">Breakfast</SelectItem>
                  <SelectItem value="LUNCH">Lunch</SelectItem>
                  <SelectItem value="DINNER">Dinner</SelectItem>
                  <SelectItem value="SNACKS">Snacks</SelectItem>
                  <SelectItem value="BEVERAGES">Beverages</SelectItem>
                  <SelectItem value="DESSERTS">Desserts</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="productType">Product Type</Label>
              <Select
                value={productForm.productType}
                onValueChange={(value: any) =>
                  setProductForm({ ...productForm, productType: value })
                }
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="VEG">Vegetarian</SelectItem>
                  <SelectItem value="NON_VEG">Non-Vegetarian</SelectItem>
                  <SelectItem value="VEGAN">Vegan</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="calories">Calories</Label>
              <Input
                id="calories"
                type="number"
                value={productForm.calories}
                onChange={(e) =>
                  setProductForm({ ...productForm, calories: e.target.value })
                }
                placeholder="Enter calories"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="prepTime">Prep Time (minutes)</Label>
              <Input
                id="prepTime"
                type="number"
                value={productForm.prepTimeMinutes}
                onChange={(e) =>
                  setProductForm({
                    ...productForm,
                    prepTimeMinutes: e.target.value,
                  })
                }
                placeholder="Enter prep time"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="servings">Servings</Label>
              <Input
                id="servings"
                type="number"
                value={productForm.servings}
                onChange={(e) =>
                  setProductForm({ ...productForm, servings: e.target.value })
                }
                placeholder="Enter servings"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="imageUrl">Image URL</Label>
              <Input
                id="imageUrl"
                value={productForm.imageUrl}
                onChange={(e) =>
                  setProductForm({ ...productForm, imageUrl: e.target.value })
                }
                placeholder="Enter image URL"
              />
            </div>

            <div className="col-span-2 space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={productForm.description}
                onChange={(e) =>
                  setProductForm({
                    ...productForm,
                    description: e.target.value,
                  })
                }
                placeholder="Enter product description"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="tags">Tags (comma separated)</Label>
              <Input
                id="tags"
                value={productForm.tags}
                onChange={(e) =>
                  setProductForm({ ...productForm, tags: e.target.value })
                }
                placeholder="healthy, gluten-free, spicy"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="ingredients">Ingredients (comma separated)</Label>
              <Input
                id="ingredients"
                value={productForm.ingredients}
                onChange={(e) =>
                  setProductForm({
                    ...productForm,
                    ingredients: e.target.value,
                  })
                }
                placeholder="chicken, rice, vegetables"
              />
            </div>
          </div>

          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => {
                setIsCreateModalOpen(false);
                setIsEditModalOpen(false);
                resetForm();
              }}
            >
              Cancel
            </Button>
            <Button
              onClick={
                isCreateModalOpen ? handleCreateProduct : handleUpdateProduct
              }
            >
              {isCreateModalOpen ? "Create Product" : "Update Product"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
