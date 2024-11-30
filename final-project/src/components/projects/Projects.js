// import libraries
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// import stylesheet
import styles from "./Projects.module.css";

// import images
import InformativityImg from "../../assets/informativity.png";
import BAAImg from "../../assets/cmu_baa.png";
import wildMeImg from "../../assets/wildme.png";

gsap.registerPlugin(ScrollTrigger);

const recentWorks = [
  {
    id: 1,
    src: InformativityImg,
    alt: "Informativity Project",
    title: "Informativity",
    tags: ["User Research", "UX Design"],
  },
  {
    id: 2,
    src: BAAImg,
    alt: "CMU BAA Project",
    title: "Cmu Baa",
    tags: ["Frontend Development", "UX Design"],
  },
  {
    id: 3,
    src: wildMeImg,
    alt: "WildMe Research",
    title: "Wild Me",
    tags: ["User Research"],
  },
];

const Projects = () => {
  useEffect(() => {
    const projects = document.querySelectorAll(`.${styles.projectItem}`);

    projects.forEach((project) => {
      gsap.fromTo(
        project,
        { scale: 0.95, opacity: 0.8 },
        {
          scale: 1, // Reduced scale for subtle effect
          opacity: 1,
          scrollTrigger: {
            trigger: project,
            start: "top 75%", // Adjust the viewport trigger point
            end: "top 25%",
            scrub: true, // Smooth animation
          },
        }
      );
    });
  }, []);

  return (
    <section className={styles.projectsSection}>
      <div className={styles.scrollContainer}>
        {recentWorks.map((work) => (
          <div className={styles.projectItem} key={work.id}>
            <div className={styles.projectImage}>
              <img src={work.src} alt={work.alt} />
            </div>
            <div className={styles.projectInfo}>
              <h3 className={styles.projectTitle}>{work.title}</h3>
              <div className={styles.projectTags}>
                {work.tags.map((tag, index) => (
                  <span key={index} className={styles.projectTag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;