import React from "react";
import { Box, SimpleGrid } from "@chakra-ui/react";
import "../styles/Skills.css";
import html from "../Images/html.png";
import css from "../Images/css.png";
import boostrap from "../Images/boostrap.png";
import js from "../Images/js.jpg";
import react from "../Images/react.svg";
import redux from "../Images/redux.png";
import chakra from "../Images/chakraui.png";
import postman from "../Images/postman.png";
import npm from "../Images/npm.svg";
import git from "../Images/git.png";
import mongodb from "../Images/mongodb.png";
import dsa from "../Images/dsa.png";
import nodejs from "../Images/nodejs.png";
import expressjs from "../Images/expressjs.webp";
import netlify from "../Images/netlify.svg";
import { useState } from "react";

export const Skills = () => {
  const [btn, setBtn] = useState(false);

  const red = { backgroundColor: "#E4002B", color: "#fff" };
  const white = { backgroundColor: "#fff" };


  let skills_data = [
    {
      url: html,
      name: "HTML",
      category1: "frontend",
    },

    {
      url: css,
      name: "CSS",
      category1: "frontend",
    },

    {
      url: boostrap,
      name: "Boostrap",
      category1: "frontend",
    },

    {
      url: js,
      name: "JavaScript",
      category1: "frontend",
    },

    {
      url: react,
      name: "React",
      category1: "frontend",
    },

    {
      url: redux,
      name: "Redux",
      category1: "frontend",
    },

    {
      url: chakra,
      name: "Chakra UI",
      category1: "frontend",
    },

    {
      url: nodejs,
      name: "Node JS",
      category2: "backend",
    },

    {
      url: expressjs,
      name: "Express",
      category2: "backend",
    },

    {
      url: mongodb,
      name: "MongoDB",
      category2: "backend",
    },

    {
      url: postman,
      name: "Postman",
      category1: "frontend",
      category2: "backend",
    },

    {
      url: git,
      name: "Git",
      category1: "frontend",
      category2: "backend",
    },

    {
      url: netlify,
      name: "Netlify",
      category1: "frontend",
      category2: "backend",
    },

    {
      url: dsa,
      name: "DSA",
      category1: "frontend",
      category2: "backend",
    },

  ];


  const [skills, setSkills] = useState(skills_data);

  const handleAll = () => {
    setSkills(skills_data);
    setBtn(true);
  };

  const handleFrontend = () => {
    let data = skills_data.filter((elem, index) => {
      return elem.category1 == "frontend";
    });

    setSkills(data);
    setBtn(false);
  };

  const handleBackend = () => {
    let data = skills_data.filter((elem, index) => {
      return elem.category2 == "backend";
    });

    setSkills(data);
    setBtn(false);
  };

  console.log(skills);

  return (
    <div className="skills_container" id="skillspage">
      <div className="skills_heading">
        <h2>
          My <span>Technical</span> Skills
        </h2>
      </div>

      <div className="skills_btn">
        <button onClick={handleAll} style={btn ? red : white}>
          All
        </button>
        <button onClick={handleFrontend}>Frontend</button>
        <button onClick={handleBackend}>Backend</button>
      </div>

      <div className="skills_grid">
        <SimpleGrid columns={[2, 3, 4, 7]} spacing="30px">
          {skills?.map((elem) => (
            <Box key={elem.name}>
              <div className="skills_grid_box">
                <div className="skills_grid_box_img">
                  <img src={elem.url} alt="skills_logo" />
                </div>

                <div className="skills_grid_box_h3">
                  <h3>{elem.name}</h3>
                </div>
              </div>
            </Box>
          ))}

          {/* ___________________________________________________________________________________ */}
          {/* 
          <Box>
            <div className="skills_grid_box">
              <div className="skills_grid_box_img">
                <img src={css} alt="css" />
              </div>

              <div className="skills_grid_box_h3">
                <h3>CSS</h3>
              </div>
            </div>
          </Box>
          <Box>
            <div className="skills_grid_box">
              <div className="skills_grid_box_img">
                <img src={boostrap} alt="boostrap" />
              </div>

              <div className="skills_grid_box_h3">
                <h3>Bootstrap</h3>
              </div>
            </div>
          </Box>
          <Box>
            <div className="skills_grid_box">
              <div className="skills_grid_box_img">
                <img src={js} alt="js" />
              </div>

              <div className="skills_grid_box_h3">
                <h3>JavaScript</h3>
              </div>
            </div>
          </Box>
          <Box>
            <div className="skills_grid_box">
              <div className="skills_grid_box_img">
                <img src={react} alt="react" />
              </div>

              <div className="skills_grid_box_h3">
                <h3>React</h3>
              </div>
            </div>
          </Box>
          <Box>
            <div className="skills_grid_box">
              <div className="skills_grid_box_img">
                <img src={redux} alt="redux" />
              </div>

              <div className="skills_grid_box_h3">
                <h3>Redux</h3>
              </div>
            </div>
          </Box>
          <Box>
            <div className="skills_grid_box">
              <div className="skills_grid_box_img">
                <img src={chakra} alt="chakra" />
              </div>

              <div className="skills_grid_box_h3">
                <h3>Chakra UI</h3>
              </div>
            </div>
          </Box>
          <Box>
            <div className="skills_grid_box">
              <div className="skills_grid_box_img">
                <img src={postman} alt="postman" />
              </div>

              <div className="skills_grid_box_h3">
                <h3>Postman</h3>
              </div>
            </div>
          </Box>
          <Box>
            <div className="skills_grid_box">
              <div className="skills_grid_box_img">
                <img src={npm} alt="npm" />
              </div>

              <div className="skills_grid_box_h3">
                <h3>NPM</h3>
              </div>
            </div>
          </Box>
          <Box>
            <div className="skills_grid_box">
              <div className="skills_grid_box_img">
                <img src={git} alt="git" />
              </div>

              <div className="skills_grid_box_h3">
                <h3>GIT</h3>
              </div>
            </div>
          </Box>
          <Box>
            <div className="skills_grid_box">
              <div className="skills_grid_box_img">
                <img src={nodejs} alt="tailwind" />
              </div>

              <div className="skills_grid_box_h3">
                <h3>Node JS</h3>
              </div>
            </div>
          </Box>
          <Box>
            <div className="skills_grid_box">
              <div className="skills_grid_box_img">
                <img src={expressjs} alt="tailwind" />
              </div>

              <div className="skills_grid_box_h3">
                <h3>Express</h3>
              </div>
            </div>
          </Box>
          <Box>
            <div className="skills_grid_box">
              <div className="skills_grid_box_img">
                <img src={mongodb} alt="tailwind" />
              </div>

              <div className="skills_grid_box_h3">
                <h3>MongoDB</h3>
              </div>
            </div>
          </Box>

          <Box>
            <div className="skills_grid_box">
              <div className="skills_grid_box_img">
                <img src={netlify} alt="netlify" />
              </div>

              <div className="skills_grid_box_h3">
                <h3>Netlify</h3>
              </div>
            </div>
          </Box> */}
        </SimpleGrid>
      </div>
    </div>
  );
};
