import React from "react";
import "../styles/Navbar.css";
import {FaSun, FaMoon, FaAlignJustify} from "react-icons/fa";
import {useColorMode} from "@chakra-ui/color-mode";
import {IconButton} from "@chakra-ui/react";

export const Navbar = () => {
  const [state, setState] = React.useState(true);
  const {colorMode, toggleColorMode} = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <div className="navbar">
      <div>
        <div className="navbar_container">
          <ul className="navbar_left">
            <div className="navbar_left_logo">
              <h2>
                SO<span>NU</span>
              </h2>
            </div>
          </ul>

          {state ? (
            <ul className="navbar_right">
              <li>
                <a href="#">HOME</a>
              </li>
              <li>
                <a href="#about">ABOUT</a>
              </li>
              <li>
                <a href="#project">PROJECT</a>
              </li>
              <li>
                <a href="#skillspage">SKILLS</a>
              </li>
              <li>
                <a href="#contact">CONTACT</a>
              </li>
              <li >
                <a download="../Sonu_Prasad_Resume.pdf" href="#resume">
                  RESUME
                </a>
              </li>
              <li className="dark_btn">
                <IconButton
                  onClick={toggleColorMode}
                  aria-label="Search database"
                  icon={isDark ? <FaSun /> : <FaMoon />}
                />
              </li>
            </ul>
          ) : (
            ""
          )}
        </div>
      </div>

      <div className="toggle" onClick={() => setState(!state)}>
        <FaAlignJustify />
      </div>
    </div>
  );
};
