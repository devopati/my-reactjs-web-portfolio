import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.jpg";
import IMG6 from "../../assets/portfolio6.jpg";

//IMAGES SHOULD NOT BE USED IN PRODUCTION

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Crpto Currency Dashboard & Financial Visualization",
    github: "https://github.com",
    demo: "https://dribbble.com/shots",
  },
  {
    id: 2,
    image: IMG2,
    title: "Charts Tampletes and ifographics in Figma",
    github: "https://github.com",
    demo: "https://dribbble.com/shots",
  },
  {
    id: 3,
    image: IMG3,
    title: "Figma dashboard UI kit and tracking progress",
    github: "https://github.com",
    demo: "https://dribbble.com/shots",
  },
  {
    id: 4,
    image: IMG4,
    title: "Maintaining tasks and tracking progress",
    github: "https://github.com",
    demo: "https://dribbble.com/shots",
  },
  {
    id: 5,
    image: IMG5,
    title: "Chart tamplets & infographics in figma",
    github: "https://github.com",
    demo: "https://dribbble.com/shots",
  },
  {
    id: 6,
    image: IMG6,
    title: "Chart tampletes and ifographics in figma",
    github: "https://github.com",
    demo: "https://dribbble.com/shots",
  },
];

function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Portfolio;
