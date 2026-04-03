package com.commerce.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.commerce.backend.model.*;
import com.commerce.backend.repository.*;

import java.util.*;

@Service
public class CartService {

    @Autowired
    private CartRepository cartRepository;

    @Autowired
    private CartItemRepository cartItemRepository;

    public Cart getCart(Long userId) {
        return cartRepository.findByUserId(userId)
                .orElseGet(() -> {
                    Cart cart = new Cart();
                    cart.setUserId(userId);
                    return cartRepository.save(cart);
                });
    }

    public Cart addToCart(Long userId, Long productId, int quantity) {

        Cart cart = getCart(userId);

        List<CartItem> items = cart.getItems();

        if (items == null) items = new ArrayList<>();

        for (CartItem item : items) {
            if (item.getProductId().equals(productId)) {
                item.setQuantity(item.getQuantity() + quantity);
                cartItemRepository.save(item);
                return cart;
            }
        }

        CartItem newItem = new CartItem();
        newItem.setProductId(productId);
        newItem.setQuantity(quantity);
        newItem.setCart(cart);

        cartItemRepository.save(newItem);

        items.add(newItem);
        cart.setItems(items);

        return cartRepository.save(cart);
    }

    public void removeFromCart(Long itemId) {
        cartItemRepository.deleteById(itemId);
    }
}