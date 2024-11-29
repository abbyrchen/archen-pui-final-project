import React, { useEffect, useRef, useState } from 'react';
import Lenis from "@studio-freight/lenis";

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

  const simulationRef = useRef();
  const customColors = [
    [1, 1, 1], // White
    [0.5, 0.5, 0.5], // Gray
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

  return (
    <div className={styles.homePage}>
            {/* Landing Section */}
            <section className={styles.homeLandingWrapper}>
              {/* Fluid Simulation */} 
              <div className={styles.fluidBackground}>
                <FluidSimulation color={customColors} />
              </div>

              <div className={styles.landingHeadingContainer}>
                <img src={IntroImage} alt="Hi, I'm Abby" />
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className="caret_icon"
                />
              </div>
            </section>

            {/* Recent Works Section */}
            <Projects />

            {/* Experience Section */}
            <section className={styles.experience}>
                <img src={ExpImage} alt="Experience section" />
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
