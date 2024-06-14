import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import arrowSvg from "../images/down-arrow.svg";
import image from "../images/IMG_2906.jpg";
import "../Home.css"; // Import the CSS file for styles and animations

const imageAltText = "Adult female in office setting leaning against a glass wall while holding a platinum Microsoft Surface Pro 7 in tablet mode preparing to write with Microsoft Surface Pen";

const Home = ({ name, title }) => {
  const nameRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    const animateText = (element, text) => {
      let index = 0;
      const interval = setInterval(() => {
        element.textContent += text[index];
        index++;
        if (index === text.length) {
          clearInterval(interval);
        }
      }, 200);
    };

    animateText(nameRef.current, name);
    animateText(titleRef.current, title);
  }, [name, title]);

  return (
    <section id="home" className="min-height">
      <img className="background" src={image} alt="" />
      <div className="text-container">
        <h1 ref={nameRef}></h1>
        <h2 ref={titleRef}></h2>
      </div>
      <div className="arrow-container">
        <img src={arrowSvg} alt={imageAltText} />
      </div>
    </section>
  );
};

Home.defaultProps = {
  name: "",
  title: "",
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Home;
