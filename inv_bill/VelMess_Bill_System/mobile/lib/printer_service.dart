import 'dart:async';
import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'package:blue_thermal_printer/blue_thermal_printer.dart';
import 'package:permission_handler/permission_handler.dart';
import 'app_settings.dart';

class PrinterProvider extends ChangeNotifier {
  bool _isOnline = false;
  bool get isOnline => _isOnline;
  Timer? _timer;

  PrinterProvider() {
    _startPolling();
  }

  void _startPolling() {
    // Initial check
    updateStatus();
    // Poll every 30s centrally
    _timer = Timer.periodic(const Duration(seconds: 30), (_) => updateStatus());
  }

  Future<void> updateStatus() async {
    final bool sStatus = await _checkServer();
    final bool bStatus = await PrinterService.isConnected();
    final bool newStatus = sStatus || bStatus;
    
    if (_isOnline != newStatus) {
      _isOnline = newStatus;
      notifyListeners();
    }
  }

  Future<bool> _checkServer() async {
    try {
      final resp = await http.get(Uri.parse("${AppSettings.baseUrl}/printer/status")).timeout(const Duration(seconds: 3));
      if (resp.statusCode == 200) {
        return json.decode(resp.body)['online'] ?? false;
      }
    } catch (_) {}
    return false;
  }

  void stop() {
    _timer?.cancel();
  }
}

class PrinterService {
  static final BlueThermalPrinter _bt = BlueThermalPrinter.instance;
  static BluetoothDevice? connectedDevice;

  static Future<bool> requestPermissions() async {
    try {
      Map<Permission, PermissionStatus> statuses = await [
        Permission.bluetoothScan,
        Permission.bluetoothConnect,
        Permission.location,
      ].request();
      return statuses.values.every((status) => status.isGranted);
    } catch (e) {
      debugPrint("Permission Error (Needs Full App Restart): $e");
      return true; // Assume success to skip crash, but scan will fail
    }
  }

  static Future<List<BluetoothDevice>> getDevices() async {
    try {
      // Must have permissions first on Android 10+
      await requestPermissions();
      return await _bt.getBondedDevices();
    } catch (e) {
      debugPrint("BT Error: $e");
      return [];
    }
  }

  static Future<bool> connect(BluetoothDevice device) async {
    try {
      final bool? isConnected = await _bt.isConnected;
      if (isConnected == true) await _bt.disconnect();
      
      await _bt.connect(device);
      connectedDevice = device;
      return true;
    } catch (e) {
      debugPrint("Connect Error: $e");
      return false;
    }
  }

  static Future<void> disconnect() async {
    await _bt.disconnect();
    connectedDevice = null;
  }

  static Future<bool> isConnected() async {
    return await _bt.isConnected ?? false;
  }

  static Future<void> printReceipt(Map<String, dynamic> order) async {
    final bool? connected = await _bt.isConnected;
    if (connected != true) return;

    // Use dynamic width for dividers from settings (32 for 58mm, 48 for 80mm)
    final int width = AppSettings.paperWidth;
    final String divider = "-" * width;

    // 1. HEADER
    _bt.printNewLine();
    _bt.printCustom("CASH RECEIPT", 2, 1); // Large Centered
    _bt.printNewLine();

    // 2. SHOP INFO (Left-Right layout like image)
    _bt.printLeftRight("VEL MESS", "PH: 9876543210", 0);
    _bt.printLeftRight("Date: ${DateTime.now().toString().substring(0, 10)}", "Time: ${DateTime.now().toString().substring(11, 16)}", 0);
    _bt.printLeftRight("Manager:", "ADMIN", 0);
    _bt.printCustom(divider, 1, 1);

    // 3. TABLE HEADERS
    _bt.printLeftRight("Description", "Price (Rs.)", 1);
    
    // 4. ITEMS LOOP
    final List items = order['items'] ?? [];
    for (var i in items) {
      final String name = i['name'].toString().toUpperCase();
      final int qty = i['qty'] ?? 1;
      final double price = (i['price'] ?? 0.0).toDouble();
      final double lineTotal = price * qty;

      // Clean item line
      if (name.length > 20) {
        _bt.printCustom("$name x$qty", 1, 0);
        _bt.printCustom(lineTotal.toStringAsFixed(2), 1, 2);
      } else {
        _bt.printLeftRight("$name x$qty", lineTotal.toStringAsFixed(2), 1);
      }
    }
    
    _bt.printCustom(divider, 1, 1);
    
    // 5. TOTALS SECTION
    final double finalAmt = (order['final_amount'] ?? 0.0).toDouble();
    final double discount = (order['discount'] ?? 0.0).toDouble();
    
    if (discount > 0) {
      _bt.printLeftRight("Discount", "Rs. ${discount.toStringAsFixed(2)}", 1);
    }
    
    _bt.printLeftRight("TOTAL", "Rs. ${finalAmt.toStringAsFixed(2)}", 2); // Bold Large
    _bt.printCustom(divider, 1, 1);
    
    // 6. FOOTER
    _bt.printNewLine();
    _bt.printCustom("Thank you for choosing us!", 1, 1);
    _bt.printCustom("Bill ID: #${order['id']}", 1, 1);
    _bt.printNewLine();
    _bt.printNewLine();
    _bt.printNewLine(); // Extra space for easy tearing
    _bt.paperCut();
  }
}
