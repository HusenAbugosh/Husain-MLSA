import React from "react";
import '../Portfolio.css'; // Import the CSS file for styles and animations
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

const projectList = [
  {
    title: "Simple Computer Simulator in Verilog 💻",
    description:
      " A project for creating a simple CPU and memory simulator using Verilog, designed to help understand basic computer architecture and design.",
    url: "https://github.com/HusenAbugosh/Simple-Computer-Similator-In-Verilog",
  },
  {
    title: "Graph Project in C 📊",
    description:
      " A project to implement graph data structures and algorithms, focusing on various graph traversal and manipulation techniques.",
    url: "https://github.com/HusenAbugosh/Graph-Project-in-C",
  },
  {
    title: "Pizza Ordering System in Java 🍕",
    description:
      " A Java application for a pizza ordering system, built using JavaFX and demonstrating object-oriented programming concepts.",
    url: "https://github.com/HusenAbugosh/Pizza-ordering-system",
  },
  {
    title: "Student Management System in C 🎓",
    description:
      " A full-featured student management system built in C, supporting operations such as adding, removing, and searching for students, with data stored in a file.",
    url: "https://github.com/HusenAbugosh/Students-Management-System",
  },
  {
    title: "Fawri E-Commerce App 🛒",
    description:
      "🛒 Backend services for the Fawri e-commerce application, featuring extensive use of FastAPI. This project involves APIs for product management, order processing, and user authentication.",
    url: "https://github.com/HusenAbugosh/fawri-ecommerce-backend",
  },
  {
    title: "Auto Advertisement Creation 📈",
    description:
      " A project using the Facebook Graph API to automate the creation and management of advertisements. This tool helps streamline the process of setting up ad campaigns.",
    url: "https://github.com/HusenAbugosh/auto-advertisement-creation",
  },

];

const Portfolio = () => {
  return (
    <section className="portfolio-section" id="portfolio">
      <h2>Portfolio</h2>
      <div className="portfolio-content">

        <div className="portfolio-grid">
          {projectList.map((project) => (
            <div className="project-card" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer" className="project-link">
                <h3>{project.title}</h3>
              </a>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
