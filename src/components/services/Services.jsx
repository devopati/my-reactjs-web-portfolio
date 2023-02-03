import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";
function Services() {
  return (
    <div>
      <section id="services">
        <h5>What I Offer</h5>
        <h2>Services</h2>
        <div className="container services__container">
          <article className="service">
            <div className="service__head">
              <h3>UI/UX Design</h3>
            </div>

            <ul className="service__list">
              <li>
                <BiCheck className="service__list-icon" />
                <p>Aimed at creating visually appealing interfaces</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Brand strengthening digital UI attracting users.</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>User experience design turning ideas into reality.</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Use of latest technologies within stated deadlines.</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Enhancing experience based on the objectives.</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Digital products are same on any device screen.</p>
              </li>
            </ul>
          </article>
          {/* END OF UI/UX */}

          <article className="service">
            <div className="service__head">
              <h3>Web Development</h3>
            </div>

            <ul className="service__list">
              <li>
                <BiCheck className="service__list-icon" />
                <p>I offer Full-Stack Web Development Services.</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>I building a web-based solution for your business.</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>I create web solutions and responsive web designs.</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>From labor management portals to ecommerce stores.</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>
                  {" "}
                  I use a variety of programming languages with different
                  frameworks to create a web-solution.
                </p>
              </li>
            </ul>
          </article>
          {/* END OF WEB DEVELOPMENT */}

          <article className="service">
            <div className="service__head">
              <h3>Content Creation</h3>
            </div>

            <ul className="service__list">
              <li>
                <BiCheck className="service__list-icon" />
                <p>I develop, write, and publish content for your business.</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>
                  I combine brand specific messaging with general industry
                  materials.
                </p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>
                  I identify, create, manage and deliver digital content using a
                  range of techniques.
                </p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>
                  I have a solid understanding of SEO best practices to make
                  your content popular.
                </p>
              </li>
            </ul>
          </article>

          {/* END OF CONTENT CREATION*/}
        </div>
      </section>
    </div>
  );
}

export default Services;
