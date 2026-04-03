package com.commerce.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.commerce.backend.model.CartItem;

public interface CartItemRepository extends JpaRepository<CartItem, Long> {
}