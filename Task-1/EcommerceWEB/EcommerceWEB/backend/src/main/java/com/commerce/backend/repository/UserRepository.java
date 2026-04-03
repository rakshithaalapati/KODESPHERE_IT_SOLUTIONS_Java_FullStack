package com.commerce.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.commerce.backend.model.User;

public interface UserRepository extends JpaRepository<User, Long> {

    // 🔍 Find user by email (for login)
    User findByEmail(String email);
}