import React, { useState, useEffect } from "react";
import "./About.scss";
import images from "../../constants/images";
import { motion } from "framer-motion";
const abouts = [
  {
    title: "Web Development",
    description: "I am good developer",
    imgUrl: images.about01,
  },
  {
    title: "Graphic Designer",
    description: "I am good designer",
    imgUrl: images.about02,
  },
  {
    title: "UI/UX Designer",
    description: "I am good developer",
    imgUrl: images.about03,
  },
  // {
  //   title: "Graphic Designer",
  //   description: "I am good designer",
  //   imgUrl: images.about02,
  // },
  // {
  //   title: "UI/UX Designer",
  //   description: "I am good developer",
  //   imgUrl: images.about03,
  // },
  // {
  //   title: "Web Development",
  //   description: "I am good developer",
  //   imgUrl: images.about01,
  // },
  // {
  //   title: "UI/UX Designer",
  //   description: "I am good developer",
  //   imgUrl: images.about03,
  // },
];
const About = () => {
  return (
    <div id="about" className="about__container">
      <h2
        className="gradient__text "
        // style={{ width: "50%", display: "block", margin: "auto" }}
      >
        I know that <span>Good Design </span>
        means <span>Good Design </span>
      </h2>
      {/* <div className="app__profiles"> */}
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 2, delayChildren: 1 }}
        className="app__profiles"
      >
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default About;
