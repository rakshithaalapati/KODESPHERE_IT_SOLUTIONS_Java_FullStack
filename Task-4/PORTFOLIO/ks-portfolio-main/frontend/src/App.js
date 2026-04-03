import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

const API_URL = "http://localhost:8080/api/projects";

function App() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const [form, setForm] = useState({
    title: "",
    description: "",
    technologies: "",
    githubLink: "",
    liveLink: "",
    imageUrl: ""
  });

  // Fetch projects
  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      setLoading(true);
      const response = await axios.get(API_URL);
      setProjects(response.data);
    } catch (error) {
      console.error("Error fetching projects:", error);
      alert("Failed to load projects");
    } finally {
      setLoading(false);
    }
  };

  // Handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple validation
    if (!form.title || !form.description) {
      alert("Title and Description are required!");
      return;
    }

    try {
      await axios.post(API_URL, form);

      setForm({
        title: "",
        description: "",
        technologies: "",
        githubLink: "",
        liveLink: "",
        imageUrl: ""
      });

      fetchProjects();
    } catch (error) {
      console.error("Error adding project:", error);
      alert("Failed to add project");
    }
  };

  // Delete project
  const deleteProject = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete?");
    if (!confirmDelete) return;

    try {
      await axios.delete(`${API_URL}/${id}`);
      fetchProjects();
    } catch (error) {
      console.error("Error deleting project:", error);
      alert("Failed to delete project");
    }
  };

  return (
    <div className="container">
      <h1>My Portfolio</h1>

      {/* FORM */}
      <form onSubmit={handleSubmit} className="project-form">
        <input
          type="text"
          name="title"
          placeholder="Project Title"
          value={form.title}
          onChange={handleChange}
        />

        <textarea
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
        />

        <input
          type="text"
          name="technologies"
          placeholder="Technologies"
          value={form.technologies}
          onChange={handleChange}
        />

        <input
          type="text"
          name="githubLink"
          placeholder="GitHub Link"
          value={form.githubLink}
          onChange={handleChange}
        />

        <input
          type="text"
          name="liveLink"
          placeholder="Live Demo Link"
          value={form.liveLink}
          onChange={handleChange}
        />

        <input
          type="text"
          name="imageUrl"
          placeholder="Image URL"
          value={form.imageUrl}
          onChange={handleChange}
        />

        <button type="submit">Add Project</button>
      </form>

      {/* PROJECT LIST */}
      {loading ? (
        <p>Loading projects...</p>
      ) : (
        <div className="project-list">
          {projects.length === 0 ? (
            <p>No projects found</p>
          ) : (
            projects.map((project) => (
              <div className="card" key={project.id}>
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  onError={(e) =>
                    (e.target.src =
                      "https://via.placeholder.com/300x200?text=No+Image")
                  }
                />

                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <p>
                  <strong>Tech:</strong> {project.technologies}
                </p>

                <div className="links">
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub
                    </a>
                  )}

                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live Demo
                    </a>
                  )}
                </div>

                <button onClick={() => deleteProject(project.id)}>
                  Delete
                </button>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}

export default App;