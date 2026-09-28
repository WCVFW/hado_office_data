package com.velmess.billingsystem.controller;

import com.velmess.billingsystem.model.MenuItem;
import com.velmess.billingsystem.repository.MenuItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/menu")
@CrossOrigin(origins = "*") // Allow frontend to access
public class MenuController {

    @Autowired
    private MenuItemRepository menuItemRepository;

    @GetMapping
    public List<MenuItem> getMenu() {
        return menuItemRepository.findAll();
    }

    @PostMapping
    public MenuItem addMenuItem(@RequestBody MenuItem item) {
        return menuItemRepository.save(item);
    }

    @PutMapping("/{id}")
    public ResponseEntity<MenuItem> updateMenuItem(@PathVariable Long id, @RequestBody MenuItem itemDetails) {
        return menuItemRepository.findById(id).map(item -> {
            item.setName(itemDetails.getName());
            item.setPrice(itemDetails.getPrice());
            item.setCategory(itemDetails.getCategory());
            item.setDescription(itemDetails.getDescription());
            item.setImage(itemDetails.getImage());
            item.setIsAvailable(itemDetails.getIsAvailable());
            return ResponseEntity.ok(menuItemRepository.save(item));
        }).orElse(ResponseEntity.notFound().build());
    }

    @PatchMapping("/{id}/availability")
    public ResponseEntity<?> toggleAvailability(@PathVariable Long id, @RequestBody Map<String, Boolean> body) {
        return menuItemRepository.findById(id).map(item -> {
            item.setIsAvailable(body.get("is_available"));
            menuItemRepository.save(item);
            return ResponseEntity.ok(item);
        }).orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteMenuItem(@PathVariable Long id) {
        if (menuItemRepository.existsById(id)) {
            menuItemRepository.deleteById(id);
            return ResponseEntity.ok().build();
        }
        return ResponseEntity.notFound().build();
    }
}
