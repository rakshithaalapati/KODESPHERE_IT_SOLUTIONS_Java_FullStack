package com.example.Portfolio.model;

import lombok.*;
import jakarta.persistence.*;

@Entity
@Table(name = "projects")

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class Project {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String description;
    private String technologies;

    @Column(name = "github_link")
    private String githubLink;

    @Column(name = "live_link")
    private String liveLink;

    @Column(name = "image_url")
    private String imageUrl;
}