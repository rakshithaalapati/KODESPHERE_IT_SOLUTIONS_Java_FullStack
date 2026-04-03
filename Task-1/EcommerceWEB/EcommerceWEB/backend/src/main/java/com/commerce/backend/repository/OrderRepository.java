package com.commerce.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.commerce.backend.model.Order;

import java.util.List;

public interface OrderRepository extends JpaRepository<Order, Long> {
    List<Order> findByUserId(Long userId);
}