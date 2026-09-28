import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'package:fl_chart/fl_chart.dart';
import 'app_settings.dart';

class DashboardScreen extends StatefulWidget {
  const DashboardScreen({super.key});

  @override
  State<DashboardScreen> createState() => _DashboardScreenState();
}

class _DashboardScreenState extends State<DashboardScreen> {
  String get _apiBase => AppSettings.baseUrl; // Pull from central config
  Map<String, dynamic> _stats = {
    'todaySales': 0.0, 'todayOrders': 0, 'topItems': [], 
    'paymentStats': {}, 'trend': [], 'avgBill': 0.0
  };
  bool _isLoading = true;
  String _error = "";

  @override
  void initState() {
    super.initState();
    _fetchStats();
  }

  Future<void> _fetchStats() async {
    if (!mounted) return;
    setState(() { _isLoading = true; _error = ""; });
    try {
      final response = await http.get(Uri.parse("$_apiBase/orders/dashboard")).timeout(const Duration(seconds: 15));
      if (response.statusCode == 200) {
        if (!mounted) return;
        setState(() {
          _stats = json.decode(response.body);
          _isLoading = false;
        });
      }
    } catch (e) {
      debugPrint("API Error: $e");
      if (!mounted) return;
      setState(() { _error = "Fix WiFi/Connection!"; _isLoading = false; });
    }
  }

  @override
  Widget build(BuildContext context) {
    if (_isLoading) return const Scaffold(body: Center(child: CircularProgressIndicator(color: Color(0xFFF97316))));
    if (_error.isNotEmpty) return _buildErrorPage();

    return Scaffold(
      backgroundColor: const Color(0xFFF8FAFC),
      body: SafeArea(
        child: RefreshIndicator(
          onRefresh: _fetchStats,
          child: ListView(
            padding: const EdgeInsets.all(20),
            children: [
              _buildMetricGrid(),
            const SizedBox(height: 30),
            _sectionHeader("Revenue Growth (7 Days)"),
            const SizedBox(height: 15),
            _buildGrowthChart(),
            const SizedBox(height: 30),
            _sectionHeader("Payment Distribution"),
            const SizedBox(height: 15),
            _buildDistributionChart(),
            const SizedBox(height: 30),
            _sectionHeader("Most Popular Dishes"),
            const SizedBox(height: 15),
            _buildPopularList(),
          ],
        ),
      ),
    ),);
  }

  Widget _sectionHeader(String title) => Text(title, style: const TextStyle(fontSize: 18, fontWeight: FontWeight.bold, letterSpacing: 0.5));

  Widget _buildErrorPage() {
    return Scaffold(
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            const Icon(Icons.cloud_off, size: 80, color: Colors.grey),
            const SizedBox(height: 15),
            Text(_error, style: const TextStyle(color: Colors.red, fontWeight: FontWeight.bold)),
            const SizedBox(height: 20),
            ElevatedButton(onPressed: _fetchStats, child: const Text("Retry Server Connection")),
          ],
        ),
      ),
    );
  }

  Widget _buildMetricGrid() {
    return Column(
      children: [
        _mainMetricCard("Total Daily Revenue", "₹ ${(_stats['todaySales'] ?? 0).toString()}", Icons.account_balance_wallet, const [Color(0xFFF97316), Color(0xFFFB923C)]),
        const SizedBox(height: 15),
        Row(
          children: [
            Expanded(child: _miniMetricCard("Orders", "${_stats['todayOrders'] ?? 0}", Icons.shopping_basket, Colors.teal)),
            const SizedBox(width: 15),
            Expanded(child: _miniMetricCard("Avg Bill", "₹ ${((_stats['avgBill'] ?? 0) as num).toDouble().toStringAsFixed(0)}", Icons.analytics, Colors.indigo)),
          ],
        )
      ],
    );
  }

  Widget _mainMetricCard(String label, String value, IconData icon, List<Color> colors) {
    return Container(
      width: double.infinity,
      padding: const EdgeInsets.all(25),
      decoration: BoxDecoration(gradient: LinearGradient(colors: colors), borderRadius: BorderRadius.circular(30), boxShadow: [BoxShadow(color: colors[0].withOpacity(0.3), blurRadius: 15, offset: const Offset(0, 8))]),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
            Text(label, style: const TextStyle(color: Colors.white70, fontSize: 14)),
            const SizedBox(height: 5),
            Text(value, style: const TextStyle(color: Colors.white, fontSize: 32, fontWeight: FontWeight.bold)),
          ]),
          Icon(icon, color: Colors.white, size: 40),
        ],
      ),
    );
  }

  Widget _miniMetricCard(String label, String value, IconData icon, Color c) {
    return Container(
      padding: const EdgeInsets.all(20),
      decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(25), boxShadow: [BoxShadow(color: Colors.black.withOpacity(0.03), blurRadius: 10)]),
      child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
        Icon(icon, color: c, size: 24),
        const SizedBox(height: 10),
        Text(value, style: const TextStyle(fontSize: 20, fontWeight: FontWeight.bold)),
        Text(label, style: const TextStyle(color: Colors.grey, fontSize: 12)),
      ]),
    );
  }

  Widget _buildGrowthChart() {
    final List trend = _stats['trend'] is List ? _stats['trend'] : [];
    if (trend.isEmpty) return Container(height: 100, decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(20)), child: const Center(child: Text("Waiting for sales...")));

    return Container(
      height: 220,
      padding: const EdgeInsets.all(20),
      decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(30), boxShadow: [BoxShadow(color: Colors.black.withOpacity(0.02), blurRadius: 10)]),
      child: BarChart(
        BarChartData(
          gridData: const FlGridData(show: false),
          titlesData: const FlTitlesData(show: false),
          borderData: FlBorderData(show: false),
          barGroups: List.generate(trend.length, (index) {
            final val = ((trend[index]['sales'] ?? 0) as num).toDouble();
            return BarChartGroupData(x: index, barRods: [BarChartRodData(toY: val == 0 ? 1 : val / 100, color: const Color(0xFFF97316), width: 14, borderRadius: BorderRadius.circular(4))]);
          }),
        ),
      ),
    );
  }

  Widget _buildDistributionChart() {
    final Map payMap = _stats['paymentStats'] is Map ? _stats['paymentStats'] : {};
    if (payMap.isEmpty) return const SizedBox(height: 50, child: Center(child: Text("No data today")));

    return Container(
      height: 200,
      decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(30), boxShadow: [BoxShadow(color: Colors.black.withOpacity(0.02), blurRadius: 10)]),
      child: PieChart(
        PieChartData(
          sections: payMap.entries.map((e) {
            final val = (e.value ?? 0.0) as num;
            return PieChartSectionData(
              title: "${e.key}\n₹${val.toStringAsFixed(0)}", 
              value: val.toDouble() <= 0 ? 1.0 : val.toDouble(), 
              color: e.key == "Cash" ? Colors.teal : const Color(0xFFF97316),
              radius: 60, titleStyle: const TextStyle(fontSize: 11, color: Colors.white, fontWeight: FontWeight.bold)
            );
          }).toList(),
        ),
      ),
    );
  }

  Widget _buildPopularList() {
    final List tops = _stats['topItems'] is List ? _stats['topItems'] : [];
    if (tops.isEmpty) return const Center(child: Text("No sales recorded yet"));
    
    return Container(
      decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(30), boxShadow: [BoxShadow(color: Colors.black.withOpacity(0.02), blurRadius: 10)]),
      child: Column(
        children: tops.map((i) => ListTile(
          leading: const CircleAvatar(backgroundColor: Color(0xFFFFF7ED), child: Icon(Icons.star, color: Color(0xFFF97316), size: 18)),
          title: Text(i['item_name'] ?? 'Dish', style: const TextStyle(fontWeight: FontWeight.w600)),
          trailing: Text("${i['sold'] ?? 0} sales", style: const TextStyle(fontWeight: FontWeight.bold, color: Colors.orange)),
        )).toList(),
      ),
    );
  }
}
