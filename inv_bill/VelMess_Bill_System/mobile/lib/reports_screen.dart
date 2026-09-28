import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'package:intl/intl.dart';
import 'app_settings.dart';
import 'printer_service.dart';

class ReportsScreen extends StatefulWidget {
  const ReportsScreen({super.key});

  @override
  State<ReportsScreen> createState() => _ReportsScreenState();
}

class _ReportsScreenState extends State<ReportsScreen> {
  String get _apiBase => AppSettings.baseUrl; // Pull from central config
  List<dynamic> _orders = [];
  double _totalCollection = 0;
  bool _isLoading = true;
  DateTime _startDate = DateTime.now().subtract(const Duration(days: 0));
  DateTime _endDate = DateTime.now();

  @override
  void initState() {
    super.initState();
    _fetchReports();
  }

  Future<void> _fetchReports() async {
    setState(() => _isLoading = true);
    try {
      final start = DateFormat("yyyy-MM-dd").format(_startDate);
      final end = DateFormat("yyyy-MM-dd").format(_endDate);
      final response = await http.get(Uri.parse("$_apiBase/orders/report?startDate=$start&endDate=$end")).timeout(const Duration(seconds: 15));
      if (response.statusCode == 200) {
        if (!mounted) return;
        final data = json.decode(response.body);
        final List rawOrders = data['orders'] ?? [];
        setState(() {
          // Show most recent orders first
          _orders = rawOrders.reversed.toList();
          _totalCollection = (data['totalCollection'] ?? 0).toDouble();
          _isLoading = false;
        });
      }
    } catch (e) {
      debugPrint("Report Error: $e");
      if (mounted) setState(() => _isLoading = false);
    }
  }

  void _viewBillDetails(dynamic o) {
    final List items = o['items'] ?? [];
    showModalBottomSheet(
      context: context, 
      isScrollControlled: true, // Allow modal to grow with content
      shape: const RoundedRectangleBorder(borderRadius: BorderRadius.vertical(top: Radius.circular(30))),
      builder: (ctx) => DraggableScrollableSheet(
        initialChildSize: 0.6,
        minChildSize: 0.4,
        maxChildSize: 0.9,
        expand: false,
        builder: (context, scrollController) => Container(
          padding: const EdgeInsets.all(25),
          child: SingleChildScrollView(
            controller: scrollController,
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Center(
                  child: Container(
                    width: 40, height: 4, 
                    margin: const EdgeInsets.only(bottom: 20),
                    decoration: BoxDecoration(color: Colors.grey[300], borderRadius: BorderRadius.circular(10)),
                  ),
                ),
                Text("Bill #${o['id']} Details", style: const TextStyle(fontSize: 22, fontWeight: FontWeight.bold)),
                const SizedBox(height: 5),
                Text("Order Date: ${DateFormat("dd MMM yyyy, hh:mm a").format(DateTime.parse(o['orderDate']))}", style: const TextStyle(color: Colors.grey, fontSize: 12)),
                Text("Customer: ${o['customer_name'] ?? 'Walk-in'}", style: const TextStyle(color: Colors.grey, fontSize: 12)),
                const Divider(height: 30),
                const Text("ITEMS", style: TextStyle(fontWeight: FontWeight.bold, fontSize: 12, letterSpacing: 1, color: Colors.orange)),
                const SizedBox(height: 10),
                ...items.map((i) {
                  final double price = ((i['price'] ?? 0) as num).toDouble();
                  final int qty = (i['qty'] ?? 0) as int;
                  return Padding(
                    padding: const EdgeInsets.symmetric(vertical: 8),
                    child: Row(
                      mainAxisAlignment: MainAxisAlignment.spaceBetween, 
                      children: [
                        Expanded(child: Text("${i['name'] ?? 'Dish'} x $qty", style: const TextStyle(fontWeight: FontWeight.w500))),
                        Text("₹ ${price * qty}", style: const TextStyle(fontWeight: FontWeight.bold))
                    ]),
                  );
                }).toList(),
                const Divider(height: 30),
                Row(mainAxisAlignment: MainAxisAlignment.spaceBetween, children: [
                   const Text("Discount", style: TextStyle(color: Colors.grey)),
                   Text("- ₹ ${o['discount'] ?? 0}", style: const TextStyle(color: Colors.red))
                ]),
                const SizedBox(height: 5),
                Row(mainAxisAlignment: MainAxisAlignment.spaceBetween, children: [
                   const Text("GRAND TOTAL", style: TextStyle(fontWeight: FontWeight.bold, fontSize: 16)),
                   Text("₹ ${o['final_amount'] ?? 0}", style: const TextStyle(fontWeight: FontWeight.bold, fontSize: 22, color: Color(0xFFF97316)))
                ]),
                const SizedBox(height: 30),
                ElevatedButton.icon(
                  onPressed: () async {
                     final bool connected = await PrinterService.isConnected();
                     if (!connected) {
                       if (mounted) ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text("Printer Disconnected! ❌ Please connect in settings."), backgroundColor: Colors.red));
                       return;
                     }
    
                     try {
                       final url = "$_apiBase/orders/${o['id']}/reprint";
                       await http.post(Uri.parse(url));
                     } catch(_) {}
    
                     await PrinterService.printReceipt({
                       'id': o['id'],
                       'items': List.from(o['items'] ?? []),
                       'final_amount': (o['final_amount'] ?? 0.0).toDouble(),
                       'discount': (o['discount'] ?? 0.0).toDouble(),
                     });
    
                     if (mounted) {
                       Navigator.pop(context);
                       ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text("Reprinting Bill... ✅"), backgroundColor: Colors.green));
                     }
                  },
                  icon: const Icon(Icons.print),
                  label: const Text("REPRINT BILL"),
                  style: ElevatedButton.styleFrom(
                    backgroundColor: const Color(0xFFF97316),
                    foregroundColor: Colors.white,
                    minimumSize: const Size(double.infinity, 55),
                    shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(15)),
                    elevation: 5,
                    shadowColor: Colors.orange.withOpacity(0.3)
                  ),
                ),
                const SizedBox(height: 20),
              ],
            ),
          ),
        ),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Column(
        children: [
          _buildDatePicker(),
          _buildSummaryCards(),
          Expanded(child: _buildOrderList()),
        ],
      ),
    );
  }

  Widget _buildDatePicker() {
    return Container(
      padding: const EdgeInsets.all(15),
      color: Colors.white,
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceAround,
        children: [
          Column(children: [const Text("Start Date", style: TextStyle(fontSize: 10)), TextButton(onPressed: () => _pickDate(true), child: Text(DateFormat("dd MMM").format(_startDate)))]),
          const Icon(Icons.arrow_forward, color: Colors.grey, size: 16),
          Column(children: [const Text("End Date", style: TextStyle(fontSize: 10)), TextButton(onPressed: () => _pickDate(false), child: Text(DateFormat("dd MMM").format(_endDate)))]),
          IconButton(icon: const Icon(Icons.search, color: Color(0xFFF97316)), onPressed: _fetchReports),
        ],
      ),
    );
  }

  Future<void> _pickDate(bool isStart) async {
    final picked = await showDatePicker(context: context, initialDate: isStart ? _startDate : _endDate, firstDate: DateTime(2023), lastDate: DateTime.now());
    if (picked != null) {
      if (mounted) {
        setState(() => isStart ? _startDate = picked : _endDate = picked);
        _fetchReports();
      }
    }
  }

  Widget _buildSummaryCards() {
    return Padding(
      padding: const EdgeInsets.all(15),
      child: Container(
        padding: const EdgeInsets.all(20),
        decoration: BoxDecoration(color: const Color(0xFF0D9488), borderRadius: BorderRadius.circular(20), boxShadow: [BoxShadow(color: Colors.teal.withOpacity(0.3), blurRadius: 10)]),
        child: Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            const Column(crossAxisAlignment: CrossAxisAlignment.start, children: [Text("Total Collection", style: TextStyle(color: Colors.white70)), Text("Selected Range", style: TextStyle(color: Colors.white54, fontSize: 10))]),
            Text("₹ $_totalCollection", style: const TextStyle(color: Colors.white, fontSize: 24, fontWeight: FontWeight.bold)),
          ],
        ),
      ),
    );
  }

  Widget _buildOrderList() {
    if (_isLoading) return const Center(child: CircularProgressIndicator());
    if (_orders.isEmpty) return const Center(child: Text("No orders found for this range"));
    return ListView.builder(
      itemCount: _orders.length,
      itemBuilder: (ctx, i) => _buildOrderTile(_orders[i]),
    );
  }

  Widget _buildOrderTile(dynamic o) {
    return Card(
      margin: const EdgeInsets.symmetric(horizontal: 15, vertical: 5),
      child: InkWell(
        onTap: () => _viewBillDetails(o),
        child: ListTile(
          leading: const CircleAvatar(backgroundColor: Color(0xFFF0FDF4), child: Icon(Icons.receipt_long, color: Colors.green, size: 20)),
          title: Text("Bill #${o['id']}"),
          subtitle: Text("${o['payment_mode'] ?? 'Cash'} • ${DateFormat("hh:mm a").format(DateTime.parse(o['orderDate']))}"),
          trailing: Text("₹ ${o['final_amount'] ?? 0}", style: const TextStyle(fontWeight: FontWeight.bold, fontSize: 16)),
        ),
      ),
    );
  }
}
