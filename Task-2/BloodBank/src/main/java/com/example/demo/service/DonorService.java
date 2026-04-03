package com.example.demo.service;

import com.example.demo.model.Donor;
import com.example.demo.repository.DonorRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DonorService {

    private final DonorRepository repo;

    public DonorService(DonorRepository repo) {
        this.repo = repo;
    }

    public Donor save(Donor donor) {
        return repo.save(donor);
    }

    public List<Donor> getAll() {
        return repo.findAll();
    }

    public Donor getById(Long id) {
        return repo.findById(id).orElse(null);
    }

    public void delete(Long id) {
        repo.deleteById(id);
    }
}