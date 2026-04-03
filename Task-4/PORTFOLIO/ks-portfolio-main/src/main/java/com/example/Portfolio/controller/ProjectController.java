package com.example.Portfolio.controller;

import org.springframework.web.bind.annotation.*;
import java.util.List;

import com.example.Portfolio.model.Project;
import com.example.Portfolio.repository.ProjectRepository;

@RestController
@RequestMapping("/api/projects")
public class ProjectController {

    private final ProjectRepository repository;

    public ProjectController(ProjectRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/all")
    public String debug() {
        return "DEBUG WORKING";
    }

    @GetMapping
    public List<Project> getAllProjects() {
        return repository.findAll();
    }

    @GetMapping("/test")
    public String test() {
        return "Test API working";
    }

    // POST (add project)
    @PostMapping
    public Project addProject(@RequestBody Project project) {
        return repository.save(project);
    }

    // DELETE
    @DeleteMapping("/{id}")
    public void deleteProject(@PathVariable Long id) {
        repository.deleteById(id);
    }
}