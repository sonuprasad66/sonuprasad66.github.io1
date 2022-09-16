import React from "react";
import {Box, SimpleGrid} from "@chakra-ui/react";
import "../styles/Projects.css";
import clockify from "../Images/clockify.png";
import rymo from "../Images/rymo.webp";
import weather from "../Images/weather.jpg";
import ndtv from "../Images/ndtv.jpg";
import zoomcar from "../Images/zoomcar.jpg";
import {FaGithub, FaEye} from "react-icons/fa";

export const Projects = () => {
  return (
    <div id="project" className="project_main_container">
      <div className="project_container">
        <div className="project_heading">
          <h2>
            My Creative <span>Portfolio </span>Section
          </h2>
        </div>

        <div className="project_grid">
          <SimpleGrid columns={[1, 1, 2, 3]} spacing="30px">
            <Box>
              <div className="project_box">
                <div className="project_image">
                  <img src={clockify} alt="clockify" />
                </div>

                <div className="project_name">
                  <h2>Clockify Clone</h2>
                </div>
                <div className="project_desc">
                  <p>
                    This website is a clone of "Clockify.me" I implimented some
                    functionalities like login & signup for the authentication,
                    create task & edit task etc.
                  </p>
                </div>
                <div className="project_tech_stack">
                  <h5>
                    <span>Tech Stack :</span> React, JavaScript, Chakra UI, CSS,
                    React Icons
                  </h5>
                </div>
                <div className="project_icon">
                  <div className="github_link">
                    <a
                      href="https://github.com/sonuprasad66/brief-shirt-7318/tree/main/clockify_website"
                      rel="noopener norefferer"
                      target="_blank"
                    >
                      <FaGithub />
                    </a>
                  </div>
                  <div className="deploy_link">
                    <a
                      href="https://snazzy-semifreddo-553037.netlify.app/"
                      rel="noopener norefferer"
                      target="_blank"
                    >
                      <FaEye />
                    </a>
                  </div>
                </div>
              </div>
            </Box>
            <Box>
              <div className="project_box">
                <div className="project_image">
                  <img src={rymo} alt="clockify" />
                </div>

                <div className="project_name">
                  <h2>Rymo Clone</h2>
                </div>
                <div className="project_desc">
                  <p>
                    This website is a clone of "Rymo.com" which is an e-commerce
                    store & here I implimented some functionalities like add to
                    cart etc.
                  </p>
                </div>
                <div className="project_tech_stack">
                  <h5>
                    <span>Tech Stack :</span> HTML, CSS, JavaScript, Boostrap
                  </h5>
                </div>
                <div className="project_icon">
                  <div className="github_link">
                    <a
                      href="https://github.com/sonuprasad66/Rymo_Clone/tree/main/rymo_clone"
                      rel="noopener norefferer"
                      target="_blank"
                    >
                      <FaGithub />
                    </a>
                  </div>
                  <div className="deploy_link">
                    <a
                      href="https://rad-kelpie-75b4db.netlify.app/index.html"
                      rel="noopener norefferer"
                      target="_blank"
                    >
                      <FaEye />
                    </a>
                  </div>
                </div>
              </div>
            </Box>
            <Box>
              <div className="project_box">
                <div className="project_image">
                  <img src={weather} alt="clockify" />
                </div>

                <div className="project_name">
                  <h2>Weather App</h2>
                </div>
                <div className="project_desc">
                  <p>
                    It's web app to show the weather for cast details. & here
                    you will be able to search for all the weather data for any
                    city & it is detect your current location.
                  </p>
                </div>
                <div className="project_tech_stack">
                  <h5>
                    <span>Tech Stack :</span> HTML, CSS, JavaScript, Rest API
                  </h5>
                </div>
                <div className="project_icon">
                  <div className="github_link">
                    <a
                      href="https://github.com/sonuprasad66/Weather_App/tree/main/weather_app"
                      rel="noopener norefferer"
                      target="_blank"
                    >
                      <FaGithub />
                    </a>
                  </div>
                  <div className="deploy_link">
                    <a
                      href="https://jade-muffin-12464e.netlify.app/"
                      rel="noopener norefferer"
                      target="_blank"
                    >
                      <FaEye />
                    </a>
                  </div>
                </div>
              </div>
            </Box>
            <Box>
              <div className="project_box">
                <div className="project_image">
                  <img src={ndtv} alt="clockify" />
                </div>

                <div className="project_name">
                  <h2>Ndtv Clone</h2>
                </div>
                <div className="project_desc">
                  <p>
                    This website is a clone of "Ndtv.com" which is a news
                    provider company here you can see all types of news. I
                    implimented some pages like shopping portal etc.
                  </p>
                </div>
                <div className="project_tech_stack">
                  <h5>
                    <span>Tech Stack :</span> HTML, CSS, JavaScript.
                  </h5>
                </div>
                <div className="project_icon">
                  <div className="github_link">
                    <a
                      href="https://github.com/rsoni2843/ndtv"
                      rel="noopener norefferer"
                      target="_blank"
                    >
                      <FaGithub />
                    </a>
                  </div>
                  <div className="deploy_link">
                    <a
                      href="https://resilient-rolypoly-319f18.netlify.app/"
                      rel="noopener norefferer"
                      target="_blank"
                    >
                      <FaEye />
                    </a>
                  </div>
                </div>
              </div>
            </Box>
            <Box>
              <div className="project_box">
                <div className="project_image">
                  <img src={zoomcar} alt="clockify" />
                </div>

                <div className="project_name">
                  <h2>ZoomCar Clone</h2>
                </div>
                <div className="project_desc">
                  <p>
                    This website is a clone of "ZoomCar.com" which is a car
                    provided company here you can book car for travling one
                    place to another place.
                  </p>
                </div>
                <div className="project_tech_stack">
                  <h5>
                    <span>Tech Stack :</span> HTML, CSS, JavaScript, Font
                    Awasome
                  </h5>
                </div>
                <div className="project_icon">
                  <div className="github_link">
                    <a
                      href="https://github.com/Abiramirajasekar/ZoomCar"
                      rel="noopener norefferer"
                      target="_blank"
                    >
                      <FaGithub />
                    </a>
                  </div>
                  <div className="deploy_link">
                    <a
                      href="https://clinquant-moxie-218ec4.netlify.app/"
                      rel="noopener norefferer"
                      target="_blank"
                    >
                      <FaEye />
                    </a>
                  </div>
                </div>
              </div>
            </Box>

            <Box>
              <div className="project_box">
                <div className="project_image">
                  <img src={clockify} alt="clockify" />
                </div>

                <div className="project_name">
                  <h2>My Portfolio</h2>
                </div>
                <div className="project_desc">
                  <p>
                    This is my portfolio which I recently made using React,
                    JavaScript, CSS and Chakra UI.
                  </p>
                </div>
                <div className="project_tech_stack">
                  <h5>
                    <span>Tech Stack :</span> React, JavaScript, Chakra UI, CSS,
                    React Icons
                  </h5>
                </div>
                <div className="project_icon">
                  <div className="github_link">
                    <a
                      href="https://github.com/sonuprasad66/sonuprasad66.github.io/tree/master"
                      rel="noopener norefferer"
                      target="_blank"
                    >
                      <FaGithub />
                    </a>
                  </div>
                  <div className="deploy_link">
                    <a
                      href="https://sonuprasad66.github.io/"
                      rel="noopener norefferer"
                      target="_blank"
                    >
                      <FaEye />
                    </a>
                  </div>
                </div>
              </div>
            </Box>
          </SimpleGrid>
        </div>
      </div>
    </div>
  );
};
