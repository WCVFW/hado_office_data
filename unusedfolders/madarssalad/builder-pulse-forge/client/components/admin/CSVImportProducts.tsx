import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";
import {
  Upload,
  FileSpreadsheet,
  AlertCircle,
  CheckCircle,
} from "lucide-react";
import adminService from "@/services/adminService";

interface CSVRow {
  name: string;
  description: string;
  price: number;
  category: string;
  productType: string;
  calories?: number;
  prepTimeMinutes?: number;
  servings?: number;
  ingredients?: string;
  allergens?: string;
  isEnabled?: boolean;
}

const CSVImportProducts = () => {
  const [file, setFile] = useState<File | null>(null);
  const [importing, setImporting] = useState(false);
  const [progress, setProgress] = useState(0);
  const [results, setResults] = useState<{
    success: number;
    errors: string[];
    total: number;
  } | null>(null);
  const { toast } = useToast();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      if (
        selectedFile.type !== "text/csv" &&
        !selectedFile.name.endsWith(".csv")
      ) {
        toast({
          title: "Invalid file type",
          description: "Please select a CSV file",
          variant: "destructive",
        });
        return;
      }
      setFile(selectedFile);
      setResults(null);
    }
  };

  const parseCSV = (text: string): CSVRow[] => {
    const lines = text.split("\n").filter((line) => line.trim());
    const headers = lines[0].split(",").map((h) => h.trim().replace(/"/g, ""));

    return lines.slice(1).map((line) => {
      const values = line.split(",").map((v) => v.trim().replace(/"/g, ""));
      const row: any = {};

      headers.forEach((header, index) => {
        const value = values[index] || "";

        switch (header.toLowerCase()) {
          case "name":
          case "description":
          case "category":
          case "ingredients":
          case "allergens":
            row[header] = value;
            break;
          case "price":
          case "calories":
          case "preptimeminutes":
          case "servings":
            row[header] = value ? Number(value) : 0;
            break;
          case "producttype":
            row.productType = value;
            break;
          case "isenabled":
            row.isEnabled = value.toLowerCase() === "true" || value === "1";
            break;
          default:
            row[header] = value;
        }
      });

      return row;
    });
  };

  const importProducts = async () => {
    if (!file) return;

    setImporting(true);
    setProgress(0);

    try {
      const text = await file.text();
      const csvData = parseCSV(text);

      let successCount = 0;
      const errors: string[] = [];

      for (let i = 0; i < csvData.length; i++) {
        try {
          const row = csvData[i];

          // Validate required fields
          if (!row.name || !row.price) {
            errors.push(`Row ${i + 2}: Missing required fields (name, price)`);
            continue;
          }

          // Create product object
          const productData = {
            name: row.name,
            description: row.description || "",
            price: Number(row.price) || 0,
            category: row.category || "LUNCH",
            productType: row.productType || "VEG",
            calories: Number(row.calories) || 0,
            prepTimeMinutes: Number(row.prepTimeMinutes) || 15,
            servings: Number(row.servings) || 1,
            rating: 4.0,
            ratingCount: 0,
            tags: [],
            ingredients: row.ingredients
              ? row.ingredients.split(",").map((i) => i.trim())
              : [],
            allergens: row.allergens
              ? row.allergens.split(",").map((a) => a.trim())
              : [],
            isEnabled: row.isEnabled !== false,
            isFeatured: false,
            availabilityStatus: "AVAILABLE",
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
          };

          // Create product via admin service
          await adminService.createProduct(productData);
          successCount++;
        } catch (error: any) {
          errors.push(
            `Row ${i + 2}: ${error.message || "Failed to create product"}`,
          );
        }

        // Update progress
        setProgress(((i + 1) / csvData.length) * 100);
      }

      setResults({
        success: successCount,
        errors,
        total: csvData.length,
      });

      if (successCount > 0) {
        toast({
          title: "Import completed",
          description: `Successfully imported ${successCount} products`,
        });
      }
    } catch (error: any) {
      toast({
        title: "Import failed",
        description: error.message || "Failed to process CSV file",
        variant: "destructive",
      });
    } finally {
      setImporting(false);
      setProgress(0);
    }
  };

  const downloadTemplate = () => {
    const template = `name,description,price,category,productType,calories,prepTimeMinutes,servings,ingredients,allergens,isEnabled
Mediterranean Bowl,Fresh quinoa bowl with grilled vegetables,14.99,LUNCH,VEG,450,15,1,"quinoa,bell peppers,feta cheese",dairy,true
Grilled Salmon,Atlantic salmon with lemon herbs,18.99,DINNER,NON_VEG,520,20,1,"salmon,lemon,herbs",fish,true
Thai Green Curry,Authentic Thai curry with coconut milk,16.99,DINNER,VEGAN,480,25,1,"coconut milk,vegetables",,true`;

    const blob = new Blob([template], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "product_import_template.csv";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <FileSpreadsheet className="h-5 w-5" />
          Bulk Import Products
        </CardTitle>
        <CardDescription>
          Import multiple products from a CSV file
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Alert>
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>
            CSV should include columns: name, description, price, category,
            productType, calories, prepTimeMinutes, servings, ingredients,
            allergens, isEnabled
          </AlertDescription>
        </Alert>

        <div className="flex gap-2">
          <Button variant="outline" onClick={downloadTemplate}>
            Download Template
          </Button>
        </div>

        <div className="space-y-2">
          <Label htmlFor="csv-file">Select CSV File</Label>
          <Input
            id="csv-file"
            type="file"
            accept=".csv"
            onChange={handleFileChange}
            disabled={importing}
          />
        </div>

        {file && (
          <div className="p-3 bg-muted rounded">
            <p className="text-sm">
              <strong>Selected file:</strong> {file.name} (
              {(file.size / 1024).toFixed(1)} KB)
            </p>
          </div>
        )}

        {importing && (
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span>Importing products...</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        )}

        {results && (
          <Alert>
            <CheckCircle className="h-4 w-4" />
            <AlertDescription>
              <div className="space-y-1">
                <p>
                  <strong>Import Results:</strong>
                </p>
                <p>✅ Successfully imported: {results.success} products</p>
                <p>❌ Failed: {results.errors.length} products</p>
                <p>📊 Total processed: {results.total} rows</p>

                {results.errors.length > 0 && (
                  <details className="mt-2">
                    <summary className="cursor-pointer font-medium">
                      View Errors
                    </summary>
                    <div className="mt-2 max-h-40 overflow-y-auto space-y-1">
                      {results.errors.map((error, index) => (
                        <p key={index} className="text-xs text-red-600">
                          {error}
                        </p>
                      ))}
                    </div>
                  </details>
                )}
              </div>
            </AlertDescription>
          </Alert>
        )}

        <Button
          onClick={importProducts}
          disabled={!file || importing}
          className="w-full"
        >
          <Upload className="h-4 w-4 mr-2" />
          {importing ? "Importing..." : "Import Products"}
        </Button>
      </CardContent>
    </Card>
  );
};

export default CSVImportProducts;
