import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'billing_screen.dart';
import 'dashboard_screen.dart';
import 'menu_management_screen.dart';
import 'reports_screen.dart';

import 'package:provider/provider.dart';
import 'package:velmess_mobile/app_settings.dart';
import 'package:velmess_mobile/printer_service.dart';
import 'package:velmess_mobile/splash_screen.dart';
import 'package:velmess_mobile/settings_dialog.dart';
import 'package:velmess_mobile/login_screen.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await AppSettings.init(); 
  await PrinterService.requestPermissions(); 
  runApp(
    MultiProvider(
      providers: [
         ChangeNotifierProvider(create: (_) => PrinterProvider()),
      ],
      child: const VelMessApp(),
    )
  );
}

class VelMessApp extends StatelessWidget {
  const VelMessApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Vel Mess Mobile POS',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        useMaterial3: true,
        primaryColor: const Color(0xFFF97316),
        colorScheme: ColorScheme.fromSeed(
          seedColor: const Color(0xFFF97316),
          primary: const Color(0xFFF97316),
          secondary: const Color(0xFF0D9488),
          surface: const Color(0xFFF8FAFC),
        ),
        textTheme: GoogleFonts.outfitTextTheme(),
        scaffoldBackgroundColor: const Color(0xFFF1F5F9),
        appBarTheme: const AppBarTheme(
          color: Colors.white,
          elevation: 0,
          titleTextStyle: TextStyle(color: Colors.black, fontSize: 20, fontWeight: FontWeight.bold),
          iconTheme: IconThemeData(color: Colors.black),
        ),
      ),
      home: const SplashScreen(),
    );
  }
}

class BottomNavWrapper extends StatefulWidget {
  const BottomNavWrapper({super.key});

  @override
  State<BottomNavWrapper> createState() => _BottomNavWrapperState();
}

class _BottomNavWrapperState extends State<BottomNavWrapper> {
  int _selectedIndex = 0;

  final List<Widget> _screens = [
    const BillingScreen(),
    const DashboardScreen(),
    const MenuManagementScreen(),
    const ReportsScreen(),
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("VEL MESS 🍛"),
        actions: [
          Consumer<PrinterProvider>(
            builder: (ctx, printer, _) {
              final bool online = printer.isOnline;
              return Container(
                margin: const EdgeInsets.only(right: 15),
                padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 4),
                decoration: BoxDecoration(
                  color: online ? Colors.green[50] : Colors.red[50],
                  borderRadius: BorderRadius.circular(20),
                  border: Border.all(color: online ? Colors.green[200]! : Colors.red[200]!),
                ),
                child: Row(
                  children: [
                    Icon(Icons.circle, size: 8, color: online ? Colors.green : Colors.red),
                    const SizedBox(width: 5),
                    Text(
                      online ? "ONLINE" : "OFFLINE",
                      style: TextStyle(fontSize: 11, fontWeight: FontWeight.bold, color: online ? Colors.green[700] : Colors.red[700]),
                    ),
                  ],
                ),
              );
            },
          ),
          IconButton(
            icon: const Icon(Icons.settings, size: 20), 
            onPressed: () => SettingsDialog.show(context)
          ),
          IconButton(
            icon: const Icon(Icons.sync, size: 20), 
            onPressed: () => Provider.of<PrinterProvider>(context, listen: false).updateStatus()
          ),
          IconButton(
            icon: const Icon(Icons.logout, size: 20, color: Colors.blueGrey), 
            onPressed: () async {
               await AppSettings.setLoginStatus(false);
               if (context.mounted) {
                 Navigator.of(context).pushReplacement(MaterialPageRoute(builder: (_) => const LoginScreen()));
               }
            }
          ),
        ],
      ),
      body: _screens[_selectedIndex],
      bottomNavigationBar: BottomNavigationBar(
        currentIndex: _selectedIndex,
        onTap: (index) => setState(() => _selectedIndex = index),
        type: BottomNavigationBarType.fixed,
        selectedItemColor: const Color(0xFFF97316),
        unselectedItemColor: Colors.grey,
        items: const [
          BottomNavigationBarItem(icon: Icon(Icons.shopping_cart), label: 'Billing'),
          BottomNavigationBarItem(icon: Icon(Icons.dashboard), label: 'Stats'),
          BottomNavigationBarItem(icon: Icon(Icons.restaurant_menu), label: 'Menu'),
          BottomNavigationBarItem(icon: Icon(Icons.receipt), label: 'Reports'),
        ],
      ),
    );
  }
}
