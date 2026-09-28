import 'dart:async';
import 'package:flutter/material.dart';
import 'main.dart'; 
import 'app_settings.dart';
import 'login_screen.dart';

class SplashScreen extends StatefulWidget {
  const SplashScreen({super.key});

  @override
  State<SplashScreen> createState() => _SplashScreenState();
}

class _SplashScreenState extends State<SplashScreen> with SingleTickerProviderStateMixin {
  late AnimationController _controller;
  late Animation<double> _fadeAnimation;

  @override
  void initState() {
    super.initState();
    _controller = AnimationController(vsync: this, duration: const Duration(milliseconds: 1500));
    _fadeAnimation = Tween<double>(begin: 0.0, end: 1.0).animate(_controller);
    _controller.forward();
    
    // Auto navigate after 3 seconds
    Timer(const Duration(seconds: 3), () {
      if (AppSettings.isLoggedIn) {
        Navigator.of(context).pushReplacement(MaterialPageRoute(builder: (_) => const BottomNavWrapper()));
      } else {
        Navigator.of(context).pushReplacement(MaterialPageRoute(builder: (_) => const LoginScreen()));
      }
    });
  }

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
      body: FadeTransition(
        opacity: _fadeAnimation,
        child: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Container(
                width: 150, height: 150,
                padding: const EdgeInsets.all(20),
                decoration: BoxDecoration(
                  color: const Color(0xFFF97316).withOpacity(0.1),
                  shape: BoxShape.circle,
                ),
                child: Image.asset(
                   "assets/icon/app_icon.png", 
                   errorBuilder: (context, error, stackTrace) => const Icon(Icons.restaurant, size: 80, color: Color(0xFFF97316)),
                ),
              ),
              const SizedBox(height: 30),
              const Text(
                "VEL MESS",
                style: TextStyle(fontSize: 32, fontWeight: FontWeight.w900, color: Color(0xFFF97316), letterSpacing: 2),
              ),
              const Text(
                "SMART BILLING SYSTEM",
                style: TextStyle(fontSize: 12, color: Colors.grey, fontWeight: FontWeight.bold, letterSpacing: 1),
              ),
              const SizedBox(height: 50),
              const CircularProgressIndicator(color: Color(0xFFF97316), strokeWidth: 2),
            ],
          ),
        ),
      ),
    );
  }
}
