package com.velmess.billingsystem.controller;

import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;
import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/printer")
@CrossOrigin(origins = "*")
public class PrinterStatusController {
    
    private LocalDateTime lastHeartbeat = null;

    @PostMapping("/heartbeat")
    public void heartbeat() {
        lastHeartbeat = LocalDateTime.now();
    }

    @GetMapping("/status")
    public ResponseEntity<Map<String, Object>> getStatus() {
        Map<String, Object> status = new HashMap<>();
        boolean online = lastHeartbeat != null && 
                lastHeartbeat.plusSeconds(30).isAfter(LocalDateTime.now());
        
        status.put("online", online);
        status.put("lastSeen", lastHeartbeat);
        return ResponseEntity.ok(status);
    }
}
