import React from "react";
import '../About.css'; // Import the CSS file for styles and animations
import image from "../images/motion-background.jpg";

const imageAltText = "purple and blue abstract background";

const description =
  "I'm Husen, a devoted lover of all things computer-related. My passion for technology has led me to become the first Microsoft Learn Student Ambassador in my region, where I engage with a community of like-minded enthusiasts to share knowledge and explore the latest in tech. Additionally, I am a proud member of the IEEE Computer Society, which allows me to stay at the forefront of computing advancements and contribute to the evolution of technology. Beyond my ambassadorial and society roles, I am also a Backend Developer at Fawri, where I work on developing and optimizing backend services for our e-commerce platform. Through these diverse roles, I strive to leverage my expertise to inspire others and drive innovation in the tech world.";

const skillsList = [
  "Python",
  "Postman",
  "PostgreSQL",
  "Fast-API",
  "C",
  "Java",
  "MySql",
  "Swift",
  "Verilog",
  ""

];

const detailOrQuote =
  "I am passionate about solving problems in new creative ways to drive innovation.";

const About = () => {
  return (
    <section className="about-section" id="about">
      <img className="background-image" src={image} alt={imageAltText} />
      <div className="about-content">
        <h2 className="animate-fade-in">About Myself</h2>
        <p className="description animate-slide-in">{description}</p>
        <hr className="animate-expand" />
        <ul className="skills-list animate-fade-in">
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr className="animate-expand" />
        <p className="quote animate-slide-in">{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
