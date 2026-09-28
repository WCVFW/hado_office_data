import 'dart:async';
import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'package:provider/provider.dart';
import 'printer_service.dart';
import 'app_settings.dart';
import 'settings_dialog.dart';

class BillingScreen extends StatefulWidget {
  const BillingScreen({super.key});

  @override
  State<BillingScreen> createState() => _BillingScreenState();
}

class _BillingScreenState extends State<BillingScreen> {
  String get _apiBase => AppSettings.baseUrl; // Pull from central config
  List<dynamic> _menuItems = [];
  List<dynamic> _filteredItems = [];
  final List<Map<String, dynamic>> _cart = [];
  String _activeCategory = "All";
  bool _isLoading = true;

  // Checkout Form State
  final _customerNameController = TextEditingController(text: "Walk-in");
  final _phoneController = TextEditingController();
  final _discountController = TextEditingController(text: "0");
  String _orderType = "Dine-in";
  String _paymentMode = "Cash";
  bool _isProcessing = false;

  final TextEditingController _searchCtrl = TextEditingController();





  @override
  void initState() {
    super.initState();
    _fetchMenu();
  }

  @override
  void dispose() {
    _customerNameController.dispose();
    _phoneController.dispose();
    _discountController.dispose();
    _searchCtrl.dispose();
    super.dispose();
  }

  // Status is now handled by PrinterProvider globally
  
  Future<void> _fetchMenu() async {
    setState(() => _isLoading = true);
    try {
      final response = await http.get(Uri.parse("$_apiBase/menu")).timeout(const Duration(seconds: 10));
      if (response.statusCode == 200) {
        if (!mounted) return;
        setState(() {
          _menuItems = json.decode(response.body);
          _applyFilters();
          _isLoading = false;
        });
      }
    } catch (e) {
      debugPrint("API Error: $e");
      if (mounted) {
        setState(() => _isLoading = false);
        ScaffoldMessenger.of(context).showSnackBar(SnackBar(
          content: const Text("Connection to Counter Failed! Check Server IP."),
          backgroundColor: Colors.red,
          action: SnackBarAction(label: "SETTINGS", textColor: Colors.white, onPressed: () => SettingsDialog.show(context, onSave: _fetchMenu)),
        ));
      }
    }
  }

  void _applyFilters() {
    setState(() {
      final search = _searchCtrl.text.toLowerCase();
      _filteredItems = _menuItems.where((i) {
        final itemCat = i['category'].toString().toLowerCase();
        final activeCat = _activeCategory.toLowerCase();
        final matchesCat = _activeCategory == "All" || itemCat == activeCat;
        final matchesSearch = i['name'].toString().toLowerCase().contains(search);
        return matchesCat && matchesSearch;
      }).toList();
    });
  }

  void _filterItems(String cat) {
    _activeCategory = cat;
    _applyFilters();
  }

  void _addToCart(Map<String, dynamic> item) {
    if (item['is_available'] == false) return;
    setState(() {
      final index = _cart.indexWhere((i) => i['id'] == item['id']);
      if (index >= 0) {
        _cart[index]['qty']++;
      } else {
        _cart.add({
          'id': item['id'],
          'name': item['name'],
          'price': (item['price'] as num).toDouble(),
          'qty': 1,
        });
      }
    });
  }

  void _updateQty(int id, int delta) {
    setState(() {
      final idx = _cart.indexWhere((i) => i['id'] == id);
      if (idx >= 0) {
        _cart[idx]['qty'] += delta;
        if (_cart[idx]['qty'] <= 0) _cart.removeAt(idx);
      }
    });
  }

  double get _subTotal => _cart.fold(0, (sum, i) => sum + (i['price'] * i['qty']));
  double get _discount => double.tryParse(_discountController.text) ?? 0.0;
  double get _finalAmount => _subTotal - _discount;

  Future<bool> _isPrinterOnline() async {
    try {
      final resp = await http.get(Uri.parse("$_apiBase/printer/status")).timeout(const Duration(seconds: 3));
      if (resp.statusCode == 200) {
        return json.decode(resp.body)['online'] ?? false;
      }
    } catch (_) {}
    return false;
  }

  Future<bool> _handleCheckout({Function? updateModal}) async {
    if (_cart.isEmpty || _isProcessing) return false;
    
    setState(() => _isProcessing = true);
    if (updateModal != null) updateModal(() {});

    // Check Online status but DON'T BLOCK (Just warn)
    final bool isOnline = await _isPrinterOnline();
    final bool isBT = await PrinterService.isConnected();
    
    if (!isOnline && !isBT && !AppSettings.skipPrinterCheck) {
       // Show a brief snackbar instead of blocking
       if (mounted) ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text("Warning: Printer may be Offline! (Saving order anyway...)"), backgroundColor: Colors.orange));
    }

    try {
      final response = await http.post(
        Uri.parse("$_apiBase/orders"),
        headers: {"Content-Type": "application/json"},
        body: json.encode({
          "customer_name": _customerNameController.text.trim(),
          "payment_mode": _paymentMode,
          "items": _cart.map((i) => {
            "id": i['id'], // MenuItemId
            "name": i['name'], 
            "price": i['price'], 
            "qty": i['qty']
          }).toList(),
          "total_amount": _subTotal,
          "discount": _discount,
          "final_amount": _finalAmount,
          "phone_number": _phoneController.text,
          "status": _orderType,
        }),
      ).timeout(const Duration(seconds: 15));

      if (response.statusCode == 200) {
        if (mounted) {
           ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text("Order Saved Successfully! ✅"), backgroundColor: Colors.green));
           
           final data = json.decode(response.body);
           // Try to print (Silent fail if not ready)
           if (isBT) {
             PrinterService.printReceipt({
               'id': data['orderId'], 
               'items': List.from(_cart), 
               'final_amount': _finalAmount
             });
           }

           setState(() {
             _cart.clear();
             _customerNameController.text = "Walk-in";
             _phoneController.clear(); // Added back from original logic
             _discountController.text = "0"; // Added back from original logic
             _isProcessing = false;
           });
           if (updateModal != null) updateModal(() {});
           return true; 
        }
      }
    } catch (e) {
      debugPrint("Checkout Fail: $e");
      if (mounted) {
        setState(() => _isProcessing = false);
        if (updateModal != null) updateModal(() {});
        ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text("Error: Could not reach Server! Check IP settings."), backgroundColor: Colors.red));
      }
    } finally {
       if (mounted) setState(() => _isProcessing = false);
       if (updateModal != null) updateModal(() {});
    }
    return false;
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFFF1F5F9),
      body: SafeArea(
        child: Column(
          children: [
            _buildHeaderWithSearch(),
            _buildCategoryFilters(),
            Expanded(child: _buildMenuGrid()),
            if (_cart.isNotEmpty) _buildSummaryBar(),
          ],
        ),
      ),
    );
  }

  Widget _buildHeaderWithSearch() {
    return Container(
      padding: const EdgeInsets.all(20),
      color: Colors.white,
      child: Column(
        children: [
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              const Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text("Quick Billing 🍲", style: TextStyle(fontSize: 22, fontWeight: FontWeight.bold, color: Color(0xFFF97316))),
                  Text("Select items below to take order", style: TextStyle(fontSize: 12, color: Colors.grey)),
                ],
              ),
              IconButton(icon: const Icon(Icons.refresh, color: Colors.orange), onPressed: _fetchMenu)
            ],
          ),
          const SizedBox(height: 15),
          Container(
            decoration: BoxDecoration(color: Colors.grey[100], borderRadius: BorderRadius.circular(15)),
            child: TextField(
              controller: _searchCtrl,
              onChanged: (_) => _applyFilters(),
              decoration: const InputDecoration(
                hintText: "Search dishes (idly, dosa...)",
                prefixIcon: Icon(Icons.search, color: Colors.grey),
                border: InputBorder.none,
                contentPadding: EdgeInsets.symmetric(vertical: 15),
              ),
            ),
          ),
        ],
      ),
    );
  }



  Widget _buildCategoryFilters() {
    final cats = ["All", "Breakfast", "Lunch", "Dinner", "Drinks"];
    return Container(
      height: 60, color: Colors.white,
      child: ListView.builder(
        scrollDirection: Axis.horizontal,
        padding: const EdgeInsets.symmetric(horizontal: 10),
        itemCount: cats.length,
        itemBuilder: (ctx, i) {
          final isSelected = _activeCategory == cats[i];
          return Padding(
            padding: const EdgeInsets.symmetric(horizontal: 5, vertical: 8),
            child: ChoiceChip(
              label: Text(cats[i]), selected: isSelected,
              onSelected: (_) => _filterItems(cats[i]),
              selectedColor: const Color(0xFFF97316),
              labelStyle: TextStyle(color: isSelected ? Colors.white : Colors.black87),
            ),
          );
        },
      ),
    );
  }

  Widget _buildMenuGrid() {
    if (_isLoading) return const Center(child: CircularProgressIndicator(color: Color(0xFFF97316)));
    
    if (_filteredItems.isEmpty) {
      return Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            const Icon(Icons.no_meals_outlined, size: 80, color: Colors.grey),
            const SizedBox(height: 10),
            const Text("No Dishes Found!", style: TextStyle(color: Colors.grey, fontWeight: FontWeight.bold)),
            const Text("Check Server IP or Category", style: TextStyle(color: Colors.grey, fontSize: 12)),
            const SizedBox(height: 15),
            TextButton.icon(onPressed: _fetchMenu, icon: const Icon(Icons.refresh), label: const Text("RETRY"))
          ],
        ),
      );
    }

    return GridView.builder(
      padding: const EdgeInsets.all(15),
      gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(crossAxisCount: 2, crossAxisSpacing: 12, mainAxisSpacing: 12, childAspectRatio: 0.85),
      itemCount: _filteredItems.length,
      itemBuilder: (ctx, i) {
        final item = _filteredItems[i];
        final isOut = item['is_available'] == false;
        final String imgStr = item['image'] ?? "";
        
        return Opacity(
          opacity: isOut ? 0.6 : 1,
          child: InkWell(
            onTap: () => isOut ? null : _addToCart(item), // Disable tap if out
            child: Container(
              decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(20), boxShadow: [BoxShadow(color: Colors.black.withOpacity(0.02), blurRadius: 10)]),
              clipBehavior: Clip.antiAlias,
              child: Stack(
                children: [
                   Column(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      Expanded(
                        child: imgStr.startsWith("data:image") 
                          ? Image.memory(base64Decode(imgStr.split(",").last), fit: BoxFit.cover, width: double.infinity)
                          : const Center(child: Icon(Icons.restaurant, color: Color(0xFFF97316), size: 40)),
                      ),
                      Padding(
                        padding: const EdgeInsets.all(8.0),
                        child: Column(
                          children: [
                            Text(item['name'], textAlign: TextAlign.center, style: const TextStyle(fontWeight: FontWeight.bold, fontSize: 13)),
                            const SizedBox(height: 2),
                            Text("₹ ${item['price']}", style: const TextStyle(color: Colors.orange, fontWeight: FontWeight.bold, fontSize: 13)),
                          ],
                        ),
                      ),
                    ],
                  ),
                  if (isOut)
                    Positioned.fill(
                      child: Container(
                        color: Colors.black.withOpacity(0.6),
                        child: const Center(
                          child: Text(
                            "OUT OF STOCK", 
                            style: TextStyle(color: Colors.white, fontWeight: FontWeight.bold, fontSize: 12, letterSpacing: 1),
                          ),
                        ),
                      ),
                    ),
                ],
              ),
            ),
          ),
        );
      },
    );
  }

  Widget _buildSummaryBar() {
    return InkWell(
      onTap: _showCartDetails,
      child: Container(
        margin: const EdgeInsets.all(15),
        padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 15),
        decoration: BoxDecoration(color: const Color(0xFFF97316), borderRadius: BorderRadius.circular(15), boxShadow: [BoxShadow(color: Colors.orange.withOpacity(0.3), blurRadius: 15)]),
        child: Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
             Row(children: [const Icon(Icons.shopping_cart, color: Colors.white), const SizedBox(width: 10), Text("${_cart.length} Items", style: const TextStyle(color: Colors.white, fontWeight: FontWeight.bold))]),
             Text("Checkout ₹ $_finalAmount", style: const TextStyle(color: Colors.white, fontWeight: FontWeight.bold, fontSize: 18)),
             const Icon(Icons.keyboard_arrow_up, color: Colors.white),
          ],
        ),
      ),
    );
  }

  void _showCartDetails() {
    showModalBottomSheet(
      context: context, isScrollControlled: true,
      backgroundColor: Colors.transparent,
      builder: (ctx) => StatefulBuilder(
        builder: (ctx, setBState) => Container(
          height: MediaQuery.of(context).size.height * 0.8,
          decoration: const BoxDecoration(color: Colors.white, borderRadius: BorderRadius.vertical(top: Radius.circular(30))),
          child: Column(
            children: [
              const SizedBox(height: 15),
              Container(width: 40, height: 4, decoration: BoxDecoration(color: Colors.grey[300], borderRadius: BorderRadius.circular(10))),
              const Padding(padding: EdgeInsets.all(20), child: Text("Cart Items", style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold))),
              Expanded(
                child: ListView.builder(
                  itemCount: _cart.length,
                  itemBuilder: (ctx, i) => ListTile(
                    title: Text(_cart[i]['name']),
                    subtitle: Text("₹ ${_cart[i]['price']}"),
                    trailing: Row(
                      mainAxisSize: MainAxisSize.min,
                      children: [
                        IconButton(icon: const Icon(Icons.remove_circle_outline, color: Colors.red), onPressed: () => setState(() { _updateQty(_cart[i]['id'], -1); setBState(() {}); })),
                        Text("${_cart[i]['qty']}", style: const TextStyle(fontWeight: FontWeight.bold, fontSize: 16)),
                        IconButton(icon: const Icon(Icons.add_circle_outline, color: Colors.green), onPressed: () => setState(() { _updateQty(_cart[i]['id'], 1); setBState(() {}); })),
                      ],
                    ),
                  ),
                ),
              ),
              const Divider(),
              _buildFullForm(setBState),
              Padding(
                padding: const EdgeInsets.all(20),
                child: ElevatedButton(
                  onPressed: _isProcessing ? null : () async { 
                    final bool success = await _handleCheckout(updateModal: setBState); 
                    if (success && mounted) {
                      Navigator.of(ctx).pop(); 
                    }
                  },
                  style: ElevatedButton.styleFrom(backgroundColor: const Color(0xFFF97316), foregroundColor: Colors.white, minimumSize: const Size(double.infinity, 55), shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(15))),
                  child: _isProcessing 
                    ? const SizedBox(height: 20, width: 20, child: CircularProgressIndicator(color: Colors.white, strokeWidth: 2)) 
                    : const Row(mainAxisAlignment: MainAxisAlignment.center, children: [Icon(Icons.print), SizedBox(width: 10), Text("CONFIRM & AUTO-PRINT", style: TextStyle(fontWeight: FontWeight.bold, fontSize: 16))]),
                ),
              )
            ],
          ),
        ),
      ),
    );
  }

  Widget _buildFullForm(Function setBState) {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 20),
      child: Column(
        children: [
          Row(children: [
             Expanded(child: TextField(controller: _customerNameController, decoration: const InputDecoration(labelText: "Name"))),
             const SizedBox(width: 10),
             Expanded(child: TextField(controller: _phoneController, keyboardType: TextInputType.phone, decoration: const InputDecoration(labelText: "Phone"))),
          ]),
          Row(children: [
             Expanded(child: DropdownButton<String>(value: _orderType, isExpanded: true, items: ["Dine-in", "Takeaway"].map((e) => DropdownMenuItem(value: e, child: Text(e))).toList(), onChanged: (v) => setBState(() => _orderType = v!))),
             const SizedBox(width: 10),
             Expanded(child: DropdownButton<String>(value: _paymentMode, isExpanded: true, items: ["Cash", "UPI"].map((e) => DropdownMenuItem(value: e, child: Text(e))).toList(), onChanged: (v) => setBState(() => _paymentMode = v!))),
             const SizedBox(width: 10),
             Expanded(child: TextField(controller: _discountController, keyboardType: TextInputType.number, decoration: const InputDecoration(labelText: "Disc ₹"), onChanged: (_) => setBState(() {}))),
          ]),
        ],
      ),
    );
  }
}
