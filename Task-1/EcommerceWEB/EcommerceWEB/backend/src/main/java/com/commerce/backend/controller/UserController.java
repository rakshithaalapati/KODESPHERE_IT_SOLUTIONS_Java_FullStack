package com.commerce.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.commerce.backend.model.User;
import com.commerce.backend.service.UserService;
import com.commerce.backend.security.JwtUtil;

import java.util.List;

@RestController
@RequestMapping("/api/users")
@CrossOrigin("*")
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private JwtUtil jwtUtil;

    // 🟢 REGISTER USER
    @PostMapping("/register")
    public User registerUser(@RequestBody User user) {
        return userService.saveUser(user);
    }

    // 🔐 LOGIN USER (JWT)
    @PostMapping("/login")
    public String login(@RequestBody User user) {

        User existing = userService.login(user.getEmail(), user.getPassword());

        if (existing != null) {
            return jwtUtil.generateToken(existing.getEmail());
        }

        return "Invalid credentials";
    }

    // 📋 GET ALL USERS (optional)
    @GetMapping
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }
}