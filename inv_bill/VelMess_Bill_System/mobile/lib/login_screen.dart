import 'package:flutter/material.dart';
import 'app_settings.dart';
import 'main.dart';
import 'settings_dialog.dart';

class LoginScreen extends StatefulWidget {
  const LoginScreen({super.key});

  @override
  State<LoginScreen> createState() => _LoginScreenState();
}

class _LoginScreenState extends State<LoginScreen> {
  String _pin = "";
  bool _isError = false;

  void _handlePin(String char) {
    if (_pin.length < 4) {
      setState(() {
        _pin += char;
        _isError = false;
      });
      if (_pin.length == 4) {
        _validateLogin();
      }
    }
  }

  void _backspace() {
    if (_pin.isNotEmpty) {
      setState(() => _pin = _pin.substring(0, _pin.length - 1));
    }
  }

  Future<void> _validateLogin() async {
    if (_pin == AppSettings.storedPin) {
      await AppSettings.setLoginStatus(true);
      if (!mounted) return;
      Navigator.of(context).pushReplacement(
        MaterialPageRoute(builder: (_) => const BottomNavWrapper()),
      );
    } else {
      setState(() {
        _pin = "";
        _isError = true;
      });
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text("Invalid PIN! Try Again. ❌"), backgroundColor: Colors.red),
      );
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFFF1F5F9),
      body: Container(
        width: double.infinity,
        decoration: BoxDecoration(
          gradient: LinearGradient(
            begin: Alignment.topCenter,
            end: Alignment.bottomCenter,
            colors: [const Color(0xFFF97316), const Color(0xFFF97316).withOpacity(0.8)],
          ),
        ),
        child: Column(
          children: [
            const Spacer(flex: 2),
            // Header
            Container(
              width: 120, height: 120,
              padding: const EdgeInsets.all(20),
              decoration: const BoxDecoration(color: Colors.white24, shape: BoxShape.circle),
              child: Image.asset("assets/icon/app_icon.png"),
            ),
            const SizedBox(height: 20),
            const Text(
              "VEL MESS POS 🔒",
              style: TextStyle(fontSize: 28, fontWeight: FontWeight.w900, color: Colors.white, letterSpacing: 1),
            ),
            const Text(
              "Enter 4-digit PIN to start billing",
              style: TextStyle(fontSize: 14, color: Colors.white70),
            ),
            const SizedBox(height: 40),

            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: List.generate(4, (index) {
                bool filled = _pin.length > index;
                return Container(
                  width: 15, height: 15,
                  margin: const EdgeInsets.symmetric(horizontal: 10),
                  decoration: BoxDecoration(
                    color: _isError ? Colors.white : (filled ? Colors.white : Colors.white24),
                    shape: BoxShape.circle,
                    border: Border.all(color: Colors.white, width: 2),
                  ),
                );
              }),
            ),

            const Spacer(),

            Container(
              padding: const EdgeInsets.symmetric(horizontal: 30, vertical: 40),
              decoration: const BoxDecoration(
                color: Colors.white,
                borderRadius: BorderRadius.vertical(top: Radius.circular(40)),
              ),
              child: Column(
                children: [
                  _buildKeypadRow(["1", "2", "3"]),
                  _buildKeypadRow(["4", "5", "6"]),
                  _buildKeypadRow(["7", "8", "9"]),
                  Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      const SizedBox(width: 80), 
                      _buildKeyBtn("0"),
                      _buildActionBtn(Icons.backspace, _backspace),
                    ],
                  ),
                  const SizedBox(height: 20),
                ],
              ),
            )
          ],
        ),
      ),
    );
  }

  Widget _buildKeypadRow(List<String> keys) {
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 10),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.center,
        children: keys.map((k) => _buildKeyBtn(k)).toList(),
      ),
    );
  }

  Widget _buildKeyBtn(String k) {
    return Container(
      margin: const EdgeInsets.symmetric(horizontal: 15),
      child: InkWell(
        onTap: () => _handlePin(k),
        borderRadius: BorderRadius.circular(40),
        child: Container(
          width: 70, height: 70,
          decoration: BoxDecoration(color: Colors.grey[100], shape: BoxShape.circle),
          child: Center(
            child: Text(k, style: const TextStyle(fontSize: 26, fontWeight: FontWeight.bold, color: Colors.black87)),
          ),
        ),
      ),
    );
  }

  Widget _buildActionBtn(IconData icon, VoidCallback tap) {
    return Container(
      margin: const EdgeInsets.symmetric(horizontal: 15),
      child: InkWell(
        onTap: tap,
        borderRadius: BorderRadius.circular(40),
        child: Container(
          width: 70, height: 70,
          child: Center(child: Icon(icon, size: 26, color: Colors.grey)),
        ),
      ),
    );
  }
}
