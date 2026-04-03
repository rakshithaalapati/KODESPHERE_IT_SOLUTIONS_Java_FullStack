package com.example.demo.model;

import jakarta.persistence.*;

@Entity
public class Task {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    // private String description; // ✅ ADD THIS
    private String priority; // ✅ ADD THIS
    // private String status;
    // Getters and Setters

    /*
     * public String getDescription() {
     * return description;
     * }
     * 
     * public void setDescription(String description) {
     * this.description = description;
     * }
     */
    /*
     * public String getStatus() {
     * return status;
     * }
     * 
     * public void setStatus(String status) {
     * this.status = status;
     * }
     */
    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getPriority() {
        return priority;
    }

    public void setPriority(String priority) {
        this.priority = priority;
    }
}
