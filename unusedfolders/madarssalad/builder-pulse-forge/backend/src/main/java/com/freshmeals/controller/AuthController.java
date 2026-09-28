package com.freshmeals.controller;

import com.freshmeals.dto.ApiResponse;
import com.freshmeals.dto.AuthResponse;
import com.freshmeals.dto.LoginRequest;
import com.freshmeals.dto.RegisterRequest;
import com.freshmeals.entity.User;
import com.freshmeals.service.UserService;
import com.freshmeals.util.JwtUtil;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "*")
public class AuthController {

    @Autowired
    private UserService userService;

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostMapping("/register")
    public ResponseEntity<ApiResponse<AuthResponse>> register(@Valid @RequestBody RegisterRequest request) {
        try {
            // Check if user already exists
            if (userService.existsByEmail(request.getEmail())) {
                return ResponseEntity.badRequest()
                        .body(new ApiResponse<>(false, "Email already registered", null));
            }

            // Create new user
            User user = new User();
            user.setFullName(request.getFullName());
            user.setEmail(request.getEmail());
            user.setPassword(passwordEncoder.encode(request.getPassword()));
            user.setPhoneNumber(request.getPhoneNumber());
            user.setRole(User.Role.USER);
            user.setIsActive(true);
            user.setEmailVerified(false);

            User savedUser = userService.save(user);

            // Generate JWT token
            String token = jwtUtil.generateToken(
                    savedUser.getEmail(),
                    savedUser.getId(),
                    savedUser.getRole().toString()
            );

            AuthResponse authResponse = new AuthResponse(
                    token,
                    savedUser.getId(),
                    savedUser.getFullName(),
                    savedUser.getEmail(),
                    savedUser.getPhoneNumber(),
                    savedUser.getRole().toString(),
                    savedUser.getCreatedAt().toString()
            );

            return ResponseEntity.ok(new ApiResponse<>(true, "User registered successfully", authResponse));

        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(new ApiResponse<>(false, "Registration failed: " + e.getMessage(), null));
        }
    }

    @PostMapping("/login")
    public ResponseEntity<ApiResponse<AuthResponse>> login(@Valid @RequestBody LoginRequest request) {
        try {
            // Authenticate user
            Authentication authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword())
            );

            UserDetails userDetails = (UserDetails) authentication.getPrincipal();
            User user = userService.findByEmail(userDetails.getUsername())
                    .orElseThrow(() -> new BadCredentialsException("User not found"));

            // Update last login
            user.setLastLogin(LocalDateTime.now());
            userService.save(user);

            // Generate JWT token
            String token = jwtUtil.generateToken(
                    user.getEmail(),
                    user.getId(),
                    user.getRole().toString()
            );

            AuthResponse authResponse = new AuthResponse(
                    token,
                    user.getId(),
                    user.getFullName(),
                    user.getEmail(),
                    user.getPhoneNumber(),
                    user.getRole().toString(),
                    user.getCreatedAt().toString()
            );

            return ResponseEntity.ok(new ApiResponse<>(true, "Login successful", authResponse));

        } catch (BadCredentialsException e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body(new ApiResponse<>(false, "Invalid email or password", null));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(new ApiResponse<>(false, "Login failed: " + e.getMessage(), null));
        }
    }

    @PostMapping("/refresh")
    public ResponseEntity<ApiResponse<AuthResponse>> refreshToken(@RequestHeader("Authorization") String authHeader) {
        try {
            if (authHeader == null || !authHeader.startsWith("Bearer ")) {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                        .body(new ApiResponse<>(false, "Invalid token format", null));
            }

            String token = authHeader.substring(7);
            
            if (!jwtUtil.isTokenValid(token)) {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                        .body(new ApiResponse<>(false, "Invalid or expired token", null));
            }

            String email = jwtUtil.extractUsername(token);
            User user = userService.findByEmail(email)
                    .orElseThrow(() -> new BadCredentialsException("User not found"));

            // Generate new token
            String newToken = jwtUtil.generateToken(
                    user.getEmail(),
                    user.getId(),
                    user.getRole().toString()
            );

            AuthResponse authResponse = new AuthResponse(
                    newToken,
                    user.getId(),
                    user.getFullName(),
                    user.getEmail(),
                    user.getPhoneNumber(),
                    user.getRole().toString(),
                    user.getCreatedAt().toString()
            );

            return ResponseEntity.ok(new ApiResponse<>(true, "Token refreshed successfully", authResponse));

        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(new ApiResponse<>(false, "Token refresh failed: " + e.getMessage(), null));
        }
    }

    @PostMapping("/verify-email")
    public ResponseEntity<ApiResponse<String>> verifyEmail(@RequestParam String token) {
        try {
            // Implementation for email verification
            // This would typically involve checking a verification token stored in database
            return ResponseEntity.ok(new ApiResponse<>(true, "Email verified successfully", null));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(new ApiResponse<>(false, "Invalid verification token", null));
        }
    }

    @PostMapping("/forgot-password")
    public ResponseEntity<ApiResponse<String>> forgotPassword(@RequestParam String email) {
        try {
            User user = userService.findByEmail(email)
                    .orElseThrow(() -> new RuntimeException("User not found"));

            // Generate reset token and send email
            // Implementation would involve generating a secure token and sending email
            
            return ResponseEntity.ok(new ApiResponse<>(true, "Password reset email sent", null));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(new ApiResponse<>(false, "Failed to send reset email", null));
        }
    }

    @PostMapping("/reset-password")
    public ResponseEntity<ApiResponse<String>> resetPassword(
            @RequestParam String token,
            @RequestParam String newPassword) {
        try {
            // Implementation for password reset
            // This would typically involve validating the reset token and updating password
            return ResponseEntity.ok(new ApiResponse<>(true, "Password reset successfully", null));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(new ApiResponse<>(false, "Password reset failed", null));
        }
    }
}
