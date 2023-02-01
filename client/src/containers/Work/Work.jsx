import React, { useState, useEffect } from "react";
import "./Work.scss";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import { urlFor, client } from "../../client";
const Work = () => {
  const [activeFilter, setactiveFilter] = useState("All");
  const [animateCard, setanimateCard] = useState({ y: 0, opacity: 1 });
  const [works, setworks] = useState([]);
  const [filterWork, setfilterWork] = useState([]);
  useEffect(() => {
    const query = '*[_type == "works"]';
    client.fetch(query).then((data) => {
      setworks(data);
      setfilterWork(data);
    });
  }, []);
  const handleWorkFilter = (item) => {
    setactiveFilter(item);
    setanimateCard({ y: 200, opacity: 0 });

    setTimeout(() => {
      setanimateCard({ y: 0, opacity: 1 });

      if (item === "All") {
        setfilterWork(works);
      } else {
        setfilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };
  return (
    <div id="work">
      <h2 className="gradient__text ">
        Here is my <span>Favourite work </span>
      </h2>
      <div className="app__work-filter">
        {["All", "React JS", "UI/UX", "Graphics", "WordPress"].map(
          (item, index) => (
            <div
              key={index}
              onClick={() => handleWorkFilter(item)}
              className={`app__work-filter-item app__flex p-text ${
                activeFilter === item ? "item-active" : ""
              }`}
            >
              {item}
            </div>
          )
        )}
      </div>
      <motion.div
        animate={animateCard}
        transition={{ duration: 1, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterWork.map((work, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div className="app__work-img app__flex">
              <img src={urlFor(work.imgUrl)} alt={work.name} />
              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                  staggerChildren: 0.5,
                }}
                className="app__work-hover app__flex"
              >
                <a href={work.projectLink} target="_blank" rel="noreferrers">
                  <motion.div
                    animate={animateCard}
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{
                      duration: 0.25,
                    }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={work.projectLink} target="_blank" rel="noreferrers">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{
                      duration: 0.25,
                    }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>
            <div className="app__work-content">
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>
                {work.description}
              </p>
              <div className="app__work-tag">
                <p className="p-text " style={{ color: "var(--white-color)" }}>
                  {work.tags[0]}
                </p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Work;
