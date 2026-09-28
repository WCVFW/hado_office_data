import 'package:flutter/material.dart';
import 'package:blue_thermal_printer/blue_thermal_printer.dart';
import 'app_settings.dart';
import 'printer_service.dart';

class SettingsDialog {
  static void show(BuildContext context, {VoidCallback? onSave}) {
    final ctrl = TextEditingController(text: AppSettings.baseUrl.replaceFirst("http://", "").replaceFirst("/api", ""));
    final pinCtrl = TextEditingController(text: AppSettings.storedPin);
    bool skip = AppSettings.skipPrinterCheck;
    int currentWidth = AppSettings.paperWidth;
    List<BluetoothDevice> devices = [];
    bool scanning = false;

    showDialog(
      context: context,
      builder: (ctx) => StatefulBuilder(
        builder: (ctx, setDState) => AlertDialog(
          title: const Text("POS & Printing Settings 🏛️"),
          content: SingleChildScrollView(
            child: Column(
              mainAxisSize: MainAxisSize.min,
              children: [
                TextField(
                  controller: ctrl,
                  decoration: const InputDecoration(labelText: "Cloud IP (103.181.108.248:8085)"),
                ),
                const SizedBox(height: 15),
                const Text("SECURITY 🔒", style: TextStyle(fontWeight: FontWeight.bold, fontSize: 12)),
                TextField(
                  controller: pinCtrl,
                  keyboardType: TextInputType.number,
                  maxLength: 4,
                  decoration: const InputDecoration(labelText: "Change Login PIN", hintText: "4-digit number"),
                ),
                const SizedBox(height: 10),
                SwitchListTile(
                  title: const Text("Skip Printer Check"),
                  subtitle: const Text("Allow checkout if offline"),
                  contentPadding: EdgeInsets.zero,
                  value: skip,
                  onChanged: (v) => setDState(() => skip = v),
                ),
                ListTile(
                  title: const Text("Paper Size"),
                  subtitle: Text("Width: $currentWidth Characters"),
                  trailing: DropdownButton<int>(
                    value: currentWidth,
                    items: const [
                      DropdownMenuItem(value: 32, child: Text("58mm (Sm)")),
                      DropdownMenuItem(value: 42, child: Text("72mm (Me)")),
                      DropdownMenuItem(value: 48, child: Text("80mm (La)")),
                      DropdownMenuItem(value: 64, child: Text("110mm (Xl)")),
                    ],
                    onChanged: (v) => setDState(() => currentWidth = v!),
                  ),
                ),
                const Divider(),
                const Text("BLUETOOTH PRINTER 🖨️", style: TextStyle(fontWeight: FontWeight.bold, fontSize: 12)),
                const SizedBox(height: 10),
                ElevatedButton.icon(
                  onPressed: scanning
                      ? null
                      : () async {
                          final bool ok = await PrinterService.requestPermissions();
                          if (!ok) {
                            ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text("Permissions Denied! ❌")));
                            return;
                          }
                          setDState(() => scanning = true);
                          final list = await PrinterService.getDevices();
                          if (ctx.mounted) {
                            setDState(() {
                              devices = list;
                              scanning = false;
                            });
                          }
                        },
                  icon: scanning
                      ? const SizedBox(width: 15, height: 15, child: CircularProgressIndicator(strokeWidth: 2))
                      : const Icon(Icons.search),
                  label: Text(scanning ? "SCANNING..." : "SEARCH FOR PRINTERS"),
                ),
                if (devices.isNotEmpty) ...[
                  const SizedBox(height: 10),
                  ...devices.map((d) => ListTile(
                        title: Text(d.name ?? "Device"),
                        subtitle: Text(d.address ?? ""),
                        trailing: const Icon(Icons.bluetooth),
                        onTap: () async {
                          final ok = await PrinterService.connect(d);
                          if (ctx.mounted) {
                            ScaffoldMessenger.of(context).showSnackBar(SnackBar(
                                content: Text(ok ? "Connected to ${d.name}! ✅" : "Failed to Connect! ❌")));
                            Navigator.of(ctx).pop();
                          }
                        },
                      )).toList(),
                ]
              ],
            ),
          ),
          actions: [
            TextButton(onPressed: () => Navigator.of(ctx).pop(), child: const Text("Cancel")),
            ElevatedButton(
                onPressed: () async {
                  final ip = ctrl.text.trim();
                  final newPin = pinCtrl.text.trim();
                  if (newPin.length != 4) {
                    ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text("PIN must be 4 digits!")));
                    return;
                  }
                  await AppSettings.saveSettings(ip, skip, width: currentWidth, pin: newPin);
                  if (ctx.mounted) {
                    if (onSave != null) onSave();
                    Navigator.of(ctx).pop();
                  }
                },
                child: const Text("SAVE")),
          ],
        ),
      ),
    );
  }
}
