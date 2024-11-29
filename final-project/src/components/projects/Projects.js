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
    const cursor = document.createElement("div");
    cursor.classList.add(styles.cursor)
    document.body.appendChild(cursor);

    const updateCursor = (e) => {
        gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0.1 });
    };

    window.addEventListener("mousemove", updateCursor);

    const links = document.querySelectorAll(`.${styles.projectItem}`);

    links.forEach((link) => {
        link.addEventListener("mouseenter", () =>
            cursor.classList.add(styles.cursorActive)
        );
        link.addEventListener("mouseleave", () =>
            cursor.classList.remove(styles.cursorActive)
        );
    });

    const projects = document.querySelectorAll(`.${styles.projectItem}`);
    projects.forEach((project, i) => {
        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: project,
                start: "top center",
                end: "bottom center",
                scrub: true,
            },
        });

        timeline
            .fromTo(
                project,
                { scale: 0.9, opacity: 0 },
                { scale: 1, opacity: 1, duration: 0.5 }
            )
            .to(
                project,
                { opacity: 0.7, scale: 0.95, duration: 0.5 },
                "+=0.5"
            );
    });

    return () => {
        window.removeEventListener("mousemove", updateCursor);
        cursor.remove();
    };
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
