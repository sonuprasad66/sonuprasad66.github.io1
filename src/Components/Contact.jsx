import React from "react";
import "../styles/Contact.css";
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {FiMail} from "react-icons/fi";
import {Box, SimpleGrid} from "@chakra-ui/react";

export const Contact = () => {
  return (
    <div className="contact_container" id="contact">
      <div className="contact_content">
        <div className="contact_heading">
          <h2>
            Take A <span>Coffee</span> And <span>Chat</span> With Me
          </h2>
        </div>

        <div className="input_box">
          <div className="contact_icon">
            <div className="icon" id="icon1">
              <FaLinkedin />
              <h3>LinkedIn</h3>
            </div>

            <div className="icon" id="icon2">
              <FaGithub />
              <h3>GitHub</h3>
            </div>

            <div className="icon" id="icon3">
              <FiMail />
              <h3>Gmail</h3>
            </div>
          </div>

          <div className="contact_information">
            <div>
              <input
                className="input_tag"
                type="text"
                placeholder="Full Name"
              />
            </div>
            <div>
              <input className="input_tag" type="text" placeholder="Email" />
            </div>
            <div>
              <input className="input_tag" type="number" placeholder="Number" />
            </div>
            <div className="input_message">
              <input
                className="input_tag_text_message"
                type="text"
                placeholder="Your Message"
              />
            </div>
            <div>
              <button className="input_btn">Send Message</button>
            </div>
          </div>
        </div>
      </div>
      <div className="contact_last">
        <p>Designed and build by Sonu Prasad, 2022 All rights reserved.</p>
      </div>
    </div>
  );
};
