package com.commerce.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.commerce.backend.model.Cart;

import java.util.Optional;

public interface CartRepository extends JpaRepository<Cart, Long> {
    Optional<Cart> findByUserId(Long userId);
}