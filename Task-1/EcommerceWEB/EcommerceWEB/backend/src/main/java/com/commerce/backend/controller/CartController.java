package com.commerce.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.commerce.backend.model.Cart;
import com.commerce.backend.service.CartService;

@RestController
@RequestMapping("/api/cart")
@CrossOrigin("*")
public class CartController {

    @Autowired
    private CartService cartService;

    @GetMapping("/{userId}")
    public Cart getCart(@PathVariable Long userId) {
        return cartService.getCart(userId);
    }

    @PostMapping("/add")
    public Cart addToCart(@RequestParam Long userId,
                         @RequestParam Long productId,
                         @RequestParam int quantity) {

        return cartService.addToCart(userId, productId, quantity);
    }

    @DeleteMapping("/remove/{itemId}")
    public void removeFromCart(@PathVariable Long itemId) {
        cartService.removeFromCart(itemId);
    }
}