package com.commerce.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.commerce.backend.model.OrderItem;

public interface OrderItemRepository extends JpaRepository<OrderItem, Long> {
}