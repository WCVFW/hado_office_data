import 'dart:convert';
import 'dart:io';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'package:image_picker/image_picker.dart';
import 'app_settings.dart';

class MenuManagementScreen extends StatefulWidget {
  const MenuManagementScreen({super.key});

  @override
  State<MenuManagementScreen> createState() => _MenuManagementScreenState();
}

class _MenuManagementScreenState extends State<MenuManagementScreen> {
  String get _apiBase => AppSettings.baseUrl; // Pull from central config
  List<dynamic> _menuItems = [];
  bool _isLoading = true;
  bool _isSaving = false;
  final ImagePicker _picker = ImagePicker();

  @override
  void initState() {
    super.initState();
    _fetchMenu();
  }

  Future<void> _fetchMenu() async {
    try {
      final response = await http.get(Uri.parse("$_apiBase/menu")).timeout(const Duration(seconds: 15));
      if (response.statusCode == 200) {
        if (!mounted) return;
        setState(() { _menuItems = json.decode(response.body); _isLoading = false; });
      }
    } catch (e) {
      debugPrint("Menu Error: $e");
      if (mounted) setState(() => _isLoading = false);
    }
  }

  Future<void> _saveItem(Map<String, dynamic>? existing) async {
    final nameCtrl = TextEditingController(text: existing?['name'] ?? "");
    final priceCtrl = TextEditingController(text: (existing?['price'] ?? 0).toString());
    final descCtrl = TextEditingController(text: existing?['description'] ?? "");
    String category = existing?['category'] ?? "Breakfast";
    String? base64Img = existing?['image'];
    bool isAvailable = existing?['is_available'] ?? true;

    showDialog(
      context: context,
      builder: (ctx) => StatefulBuilder(
        builder: (ctx, setDState) => AlertDialog(
          title: Text(existing == null ? "Add Menu Item" : "Edit Item"),
          content: SingleChildScrollView(
            child: Column(
              mainAxisSize: MainAxisSize.min,
              children: [
                GestureDetector(
                  onTap: () async {
                    final XFile? photo = await _picker.pickImage(source: ImageSource.gallery, imageQuality: 50);
                    if (photo != null) {
                      final bytes = await File(photo.path).readAsBytes();
                      setDState(() => base64Img = "data:image/jpeg;base64,${base64Encode(bytes)}");
                    }
                  },
                  child: Container(
                    height: 100, width: 100,
                    decoration: BoxDecoration(color: Colors.grey[200], borderRadius: BorderRadius.circular(15)),
                    child: base64Img != null 
                      ? ClipRRect(borderRadius: BorderRadius.circular(15), child: Image.memory(base64Decode(base64Img!.split(",").last), fit: BoxFit.cover))
                      : const Icon(Icons.add_a_photo, size: 40),
                  ),
                ),
                TextField(controller: nameCtrl, decoration: const InputDecoration(labelText: "Dish Name")),
                TextField(controller: priceCtrl, decoration: const InputDecoration(labelText: "Price"), keyboardType: TextInputType.number),
                TextField(controller: descCtrl, decoration: const InputDecoration(labelText: "Description")),
                DropdownButton<String>(
                  isExpanded: true,
                  value: category,
                  items: ["Breakfast", "Lunch", "Dinner", "Drinks"].map((c) => DropdownMenuItem(value: c, child: Text(c))).toList(),
                  onChanged: (v) => setDState(() => category = v!),
                ),
                SwitchListTile(title: const Text("Is Available?"), value: isAvailable, onChanged: (v) => setDState(() => isAvailable = v)),
              ],
            ),
          ),
          actions: [
            TextButton(onPressed: () => Navigator.pop(ctx), child: const Text("Cancel")),
            ElevatedButton(onPressed: () async {
              final payload = {
                "name": nameCtrl.text,
                "price": double.tryParse(priceCtrl.text) ?? 0.0,
                "description": descCtrl.text,
                "category": category,
                "image": base64Img,
                "is_available": isAvailable
              };
              
              final url = existing == null ? _apiBase + "/menu" : _apiBase + "/menu/${existing['id']}";
              try {
                final res = await (existing == null ? http.post : http.put)(
                  Uri.parse(url),
                  headers: {"Content-Type": "application/json"},
                  body: json.encode(payload)
                ).timeout(const Duration(seconds: 10));
                
                if (res.statusCode == 200 || res.statusCode == 201) {
                  if (ctx.mounted) {
                    ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text("Menu item saved successfully! ✅")));
                    Navigator.pop(ctx);
                  }
                  _fetchMenu();
                } else {
                  if (ctx.mounted) {
                    ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text("Error ${res.statusCode}: Failed to save ❌")));
                  }
                }
              } catch (e) {
                if (ctx.mounted) {
                  ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text("Network Error: $e ❌")));
                }
              }
            }, child: const Text("SAVE")),
          ],
        ),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: _isLoading ? const Center(child: CircularProgressIndicator()) : ListView.builder(
        itemCount: _menuItems.length,
        itemBuilder: (ctx, i) {
          final item = _menuItems[i];
          final String imgStr = item['image'] ?? "";
          return Card(
            margin: const EdgeInsets.symmetric(horizontal: 15, vertical: 8),
            child: ListTile(
              leading: Container(
                width: 50, height: 50,
                decoration: BoxDecoration(color: Colors.grey[100], borderRadius: BorderRadius.circular(10)),
                child: imgStr.startsWith("data:image") 
                  ? ClipRRect(borderRadius: BorderRadius.circular(10), child: Image.memory(base64Decode(imgStr.split(",").last), fit: BoxFit.cover))
                  : const Icon(Icons.restaurant, color: Colors.orange),
              ),
              title: Text(item['name'], style: const TextStyle(fontWeight: FontWeight.bold)),
              subtitle: Text("₹ ${item['price']} • ${item['category']}"),
              trailing: Row(
                mainAxisSize: MainAxisSize.min,
                children: [
                  IconButton(icon: const Icon(Icons.edit, color: Colors.blue), onPressed: () => _saveItem(item)),
                  IconButton(icon: const Icon(Icons.delete, color: Colors.red), onPressed: () async {
                    if (await showDialog(context: context, builder: (ctx) => AlertDialog(title: const Text("Delete?"), actions: [TextButton(onPressed: () => Navigator.pop(ctx, false), child: const Text("No")), TextButton(onPressed: () => Navigator.pop(ctx, true), child: const Text("Yes"))]))) {
                      await http.delete(Uri.parse("$_apiBase/menu/${item['id']}"));
                      _fetchMenu();
                    }
                  }),
                ],
              ),
            ),
          );
        },
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () => _saveItem(null),
        backgroundColor: const Color(0xFFF97316),
        child: const Icon(Icons.add, color: Colors.white),
      ),
    );
  }
}
