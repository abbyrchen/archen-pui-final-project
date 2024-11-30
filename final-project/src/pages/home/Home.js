import React, { useEffect, useState } from 'react';
import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import styles from './Home.module.css';
import Projects from '../../components/projects/Projects';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import IntroImage from '../../assets/homepage.png';
import ExpImage from '../../assets/experience.png';
import FluidSimulation from 'fluid-simulation-react';

const Home = () => {
  /*const customConfig = {
    textureDownsample: 0,         // Default resolution (higher = better quality)
    densityDissipation: 0.2,    // Slower fading of density
    velocityDissipation: 0.3,   // Slower fading of velocity
    pressureDissipation: 0.7,   // Retain pressure slightly longer
    pressureIterations: 10,      // Increase for smoother results
    curl: 80,                    // Slight swirling effect
    splatRadius: 0.01,           // Larger splat size
  };*/

  const [caretVisible, setCaretVisible] = useState(true);

  const customColors = [
    [1, 1, 1], // white
    [0.5, 0.5, 0.5], // gray
  ];

    useEffect(() => {
        const lenis = new Lenis({
            lerp: 0.08,
            smoothWheel: true,
          });
      
          const raf = (time) => {
            lenis.raf(time);
            requestAnimationFrame(raf);
          };
      
          requestAnimationFrame(raf);
      
          return () => lenis.destroy();
    }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // hide the caret after the user scrolls through the landing section
      if (scrollY > 100) {
        setCaretVisible(false);
      } else {
        setCaretVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCaretClick = () => {
    const scrollY = window.scrollY;
    const scrollHeight = document.body.scrollHeight;
    const windowHeight = window.innerHeight;
    const scrollPosition = scrollHeight - windowHeight - scrollY;

    window.scroll({
      top: scrollHeight - scrollPosition,
      behavior: 'smooth',
    });
  };

  // experience section animation
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // animate experience image
    gsap.fromTo(
      `.${styles.experience} img`,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: `.${styles.experience}`,
          start: "top 80%",
        },
      }
    );

    // animate table rows
    gsap.fromTo(
      `.${styles.experienceTable} tr`,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: "power4.out",
        stagger: {
          amount: 1,
          from: "start",
        },
        scrollTrigger: {
          trigger: `.${styles.experienceTable}`,
          start: "top 75%"
        },
      }
    );
  }, []);

  const caretIcon = document.querySelector(`.${styles.caretIcon}`);

  gsap.to(caretIcon, {
      y: 10,
      duration: 0.5,
      ease: 'power1.inOut',
      yoyo: true,
      repeat: -1,
      scrollTrigger: {
        trigger: caretIcon,
        start: 'top 50%',
        end: 'bottom 50%',
        toggleActions: 'play none none reverse',
      },
  });

  return (
    <div className={styles.homePage}>
            {/* landing Section */}
            <section className={styles.homeLandingWrapper}>
              {/* fluid simulation */} 
              <div className={styles.fluidBackground}>
                <FluidSimulation color={customColors} />
              </div>

              <div className={styles.landingHeadingContainer}>
                <img src={IntroImage} alt="Hi, I'm Abby" />
              </div>
              <FontAwesomeIcon
                  icon={faChevronDown}
                  className={`${styles.caretIcon} ${!caretVisible ? styles.hidden : ''}`}
                  onClick={handleCaretClick}
                />
            </section>

            {/* recent works */}
            <Projects />

            {/* experience */}
            <section className={styles.experience}>
                <img src={ExpImage} alt="My Experience Section" />
                <table className={styles.experienceTable}>
                <tbody>
                    <tr>
                    <td>fall 2024</td>
                    <td>teaching assistant</td>
                    <td>cmu information systems</td>
                    </tr>
                    <tr>
                    <td>summer 2024</td>
                    <td>product management intern</td>
                    <td>the home depot</td>
                    </tr>
                    <tr>
                    <td>fall 2023</td>
                    <td>ux designer</td>
                    <td>cmu software engineering institute</td>
                    </tr>
                    <tr>
                    <td>summer 2023</td>
                    <td>software engineering intern</td>
                    <td>icylon, llc</td>
                    </tr>
                    <tr>
                    <td>2022-23</td>
                    <td>resident assistant</td>
                    <td>carnegie mellon university</td>
                    </tr>
                </tbody>
                </table>
        </section>
    </div>
  );
}

export default Home;
