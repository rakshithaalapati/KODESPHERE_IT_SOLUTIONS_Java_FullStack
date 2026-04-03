package com.example.demo.controller;

import com.example.demo.model.Donor;
import com.example.demo.service.DonorService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/donors")
public class DonorController {

    private final DonorService service;

    public DonorController(DonorService service) {
        this.service = service;
    }

    @PostMapping
    public Donor create(@RequestBody Donor donor) {
        return service.save(donor);
    }

    @GetMapping
    public List<Donor> getAll() {
        return service.getAll();
    }

    @GetMapping("/{id}")
    public Donor getById(@PathVariable Long id) {
        return service.getById(id);
    }

    @DeleteMapping("/{id}")
    public String delete(@PathVariable Long id) {
        service.delete(id);
        return "Donor deleted successfully";
    }

    @PutMapping("/{id}")
    public Donor update(@PathVariable Long id, @RequestBody Donor donor) {
        donor.setId(id);
        return service.save(donor);
    }
}