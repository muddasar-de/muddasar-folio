import React from "react";

const NavigationDots = ({ active }) => {
  const links = ["home", "about", "work", "skills", "testimonials", "contact"];

  return (
    <div className="app__navigation">
      {links.map((item, index) => (
        <a
          href={`#${item}`}
          onClick={() => setToggle(false)}
          key={item + index}
          className="app_navigation-dot"
          style={active === item ? { backgroundColor: "#313BAC" } : {}}
        />
      ))}
    </div>
  );
};

export default NavigationDots;
