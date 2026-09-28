import 'package:shared_preferences/shared_preferences.dart';
import 'package:flutter/foundation.dart';

class AppSettings {
  static const String _ipKey = "server_ip_pref";
  static const String _skipCheckKey = "skip_printer_check";
  static const String _widthKey = "printer_paper_width";
  static const String _authKey = "user_login_status";
  static const String _pinKey = "user_stored_pin";
  static String baseUrl = "http://103.181.108.248/velmess/api";
  static bool skipPrinterCheck = false;
  static bool isLoggedIn = false;
  static String storedPin = "1234";
  static int paperWidth = 32;

  static Future<void> init() async {
    try {
      final prefs = await SharedPreferences.getInstance();
      final savedIp = prefs.getString(_ipKey);
      skipPrinterCheck = prefs.getBool(_skipCheckKey) ?? false;
      isLoggedIn = prefs.getBool(_authKey) ?? false;
      storedPin = prefs.getString(_pinKey) ?? "1234";
      paperWidth = prefs.getInt(_widthKey) ?? 32;
      if (savedIp != null) {
        baseUrl = savedIp.contains("/") ? "http://$savedIp/api" : "http://$savedIp/velmess/api";
      }
    } catch (e) {
      debugPrint("Settings Init Error: $e");
    }
  }

  static Future<void> saveSettings(String ip, bool skip, {int? width, String? pin}) async {
    try {
      final prefs = await SharedPreferences.getInstance();
      await prefs.setString(_ipKey, ip);
      await prefs.setBool(_skipCheckKey, skip);
      if (width != null) await prefs.setInt(_widthKey, width);
      if (pin != null) await prefs.setString(_pinKey, pin);
      
      baseUrl = ip.contains("/") ? "http://$ip/api" : "http://$ip/velmess/api";
      skipPrinterCheck = skip;
      if (width != null) paperWidth = width;
      if (pin != null) storedPin = pin;
    } catch (e) {
      debugPrint("Save Settings Error: $e");
    }
  }

  static Future<void> setLoginStatus(bool status) async {
    final prefs = await SharedPreferences.getInstance();
    await prefs.setBool(_authKey, status);
    isLoggedIn = status;
  }
}
