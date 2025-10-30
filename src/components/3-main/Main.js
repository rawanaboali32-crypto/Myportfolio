import React, { useState } from 'react';
import "./main.css";
import { myprojects } from './myProjects';
import { motion, AnimatePresence, spring } from "framer-motion";


export default function Main() {
  const [currentActive, setCurrentActive] = useState("all");
  const [arr, setArr] = useState(myprojects);

  const handleClick = (butonCategories) => {
    setCurrentActive(butonCategories.join(","));
    
    if (butonCategories.includes("all")) {
      setArr(myprojects);
    } else {
      const newArr = myprojects.filter((item) =>
        butonCategories.some((category) => item.category.includes(category))
      );
      setArr(newArr);
    }
  };

  return (
    <main className="flex">
      <section className="flex left-section">
        <button
          onClick={() => handleClick(["all"])}
          className={currentActive === "all" ? "active" : ""}
        >
          All projects
        </button>
        <button
          onClick={() => handleClick(["css", "html"])}
          className={currentActive === "css,html" ? "active" : ""}
        >
          Html & Css
        </button>
        <button
          onClick={() => handleClick(["js"])}
          className={currentActive === "js" ? "active" : ""}
        >
          Javascript
        </button>
        <button
          onClick={() => handleClick(["React"])}
          className={currentActive === "React" ? "active" : ""}
        >
          React & MUI
        </button>
        <button
          onClick={() => handleClick(["node"])}
          className={currentActive === "node" ? "active" : ""}
        >
          Node & Express
        </button>
      </section>

      <section className="flex right-section">
      <AnimatePresence>
 {arr.map((item) => {
          return (
            <motion.article
             layout
            initial={{transform:"scale(0)"}} animate={{transform:"scale(1)"}} transition={{type:spring}} 
             key={item.imgPath} className="card">
              <img width={266} src={item.imgPath} alt="" />
              <div style={{ width: "266px" }} className="box">
                <h1 className="title">{item.projectitle}</h1>
                <p className="sub-title">
                  lorem rr dd kkhf hsagfsg we are here in my portifoloi
                </p>
                <div className="flex icons">
                  <div style={{ gap: "11px" }} className="flex">
                    <div className="icon-link"></div>
                    <div className="icon-github"></div>
                  </div>
                  <a className="link flex" href="">
                    more{" "}
                    <span style={{ alignSelf: "end" }} className="icon-arrow-right"></span>
                  </a>
                </div>
              </div>
            </motion.article>
          );
        })}
      </AnimatePresence>
       
      </section>
    </main>
  );
}
