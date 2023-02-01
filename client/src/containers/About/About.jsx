import React, { useState, useEffect } from "react";
import "./About.scss";
import images from "../../constants/images";
import { motion } from "framer-motion";
import { urlFor, client } from "../../client";

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';
    client.fetch(query).then((data) => setAbouts(data));
  }, []);

  return (
    <div id="about" className="about__container ">
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
            <img src={urlFor(about.imgUrl)} alt={about.title} />
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
