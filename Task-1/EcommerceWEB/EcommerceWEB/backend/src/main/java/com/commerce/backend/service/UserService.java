package com.commerce.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.commerce.backend.model.User;
import com.commerce.backend.repository.UserRepository;

import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    // 🟢 Register user
    public User saveUser(User user) {
        return userRepository.save(user);
    }

    // 🔐 Login logic
    public User login(String email, String password) {
        User user = userRepository.findByEmail(email);

        if (user != null && user.getPassword().equals(password)) {
            return user;
        }

        return null;
    }

    // 📋 Get all users
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }
}