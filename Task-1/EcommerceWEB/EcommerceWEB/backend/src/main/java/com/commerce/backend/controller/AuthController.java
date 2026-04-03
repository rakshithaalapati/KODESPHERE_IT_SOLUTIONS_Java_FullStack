package com.commerce.backend.controller;

import com.commerce.backend.security.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:5174")
public class AuthController {

    @Autowired
    private JwtUtil jwtUtil;

    @PostMapping("/login")
    public Map<String, String> login(@RequestBody Map<String, String> data) {

        String email = data.get("email");
        String password = data.get("password");

        // 🔥 Simple check (replace with DB later)
        if ("test@test.com".equals(email) && "1234".equals(password)) {
            String token = jwtUtil.generateToken(email);
            return Map.of("token", token);
        }

        throw new RuntimeException("Invalid credentials");
    }
    @PostMapping("/register")
    public Map<String, String> register(@RequestBody Map<String, String> data) {

        String email = data.get("email");
        String password = data.get("password");

        // For now just return token (no DB yet)
        String token = jwtUtil.generateToken(email);

        return Map.of("token", token);
    }
}