import { React, useEffect } from 'react';
import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";

import styles from './About.module.css';
import Sparkle from '../../assets/sparkle.png';
import ProfileImage from '../../assets/profileimage.JPG';

function About() {
    // smooth scroll
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

    // page load animation for intro text
    useEffect(() => {
        const timeline = gsap.timeline({
            defaults: {
                duration: 0.8,
                ease: "power2.out",
            },
        });

        console.log("GSAP Timeline initialized"); 

        // add animation for each line + img
        timeline
            .fromTo(`.${styles.firstLine}`, 
                { opacity: 0, y: 50 }, 
                { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
            )
            .fromTo(`.${styles.secondLine}`, 
                { opacity: 0, y: 50 }, 
                { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
                "-=0.5"
            )
            .fromTo(`.${styles.sparkleImg}`, 
                { opacity: 0, scale: 0.8 }, 
                { opacity: 1, scale: 1, duration: 0.8, ease: "power2.out" },
                "-=0.4"
            )
            .fromTo(`.${styles.rolesContainer} h2`, 
                { opacity: 0, y: 50 }, 
                { opacity: 1, y: 0, stagger: 0.2, duration: 0.8, ease: "power2.out" },
                "-=0.4"
            )
            .fromTo(`.${styles.lastLine}`, 
                { opacity: 0, y: 50 }, 
                { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
                "-=0.4"
            );


            console.log("First Line:", document.querySelector(`.${styles.firstLine}`));
console.log("Second Line:", document.querySelector(`.${styles.secondLine}`));
console.log("Sparkle Image:", document.querySelector(`.${styles.sparkleImg}`));
console.log("Roles Container:", document.querySelector(`.${styles.rolesContainer}`));
console.log("Last Line:", document.querySelector(`.${styles.lastLine}`));

    }, []);

    return (
        <div className={styles.aboutPage}>
            <section className={styles.intro}>
                <div className={styles.introTextContainer}>
                    <h1 className={styles.firstLine}>
                        driven by <span className={styles.emphasis}>curiosity</span> and fueled by
                    </h1>
                    <h1 className={styles.secondLine}>
                        <span className={styles.emphasis}>creativity</span>, i'm a <span className={styles.emphasis}>Designer</span>
                    </h1>
                    <div className={styles.flexRow}>
                        <div className={styles.sparkleImg}>
                            <img src={Sparkle} alt="rotating 3d sparkle"/>
                        </div>
                        <div className={styles.rolesContainer}>
                            <h2>Explorer,</h2>
                            <h2>& Creator</h2>
                        </div>
                    </div>
                    <h1 className={styles.lastLine}>bringing ideas to life.</h1>
                </div>
            </section>

            <section className={styles.bioSection}>
                <div className={styles.bioContainer}>
                    <div className={styles.imageContainer}>
                        <img src={ProfileImage} alt="image of me on a beach in Qingdao" className={styles.profileImage}/>
                    </div>

                    <div className={styles.textContainer}>
                        <h2>Hi, I'm <span className={styles.fancy}>Abby</span></h2>
                        <p>
                        With a background in computer science, business, and design, I strive to use my skills and passion for 
                        creating to craft innovative, user-centered solutions. While I primarily have experience in interaction 
                        design, frontend development, and user research, I have completed coursework in areas such as visual design 
                        and information architecture, equipping me with a versatile toolkit for solving diverse design challenges.
                    </p>
                    <p>
                        I'm a senior at Carnegie Mellon University, studying Information Systems and Human-Computer Interaction.
                        Currently, I’m a Teaching Assistant for Mobile Web Design and Development, mentoring and grading 40 students 
                        on design principles and frontend programming. Previously, I’ve worked as a Product Management Intern at 
                        The Home Depot and UX Designer for CMU’s Software Engineering Institute.
                    </p>
                    <p>
                        Outside the classroom, I’m an alumni captain of <a href="">CMU’s volleyball team</a>, Vice President of the Asian Desi Pacific Islander Student Athlete Association, 
                        and a fashion designer for Lunar Gala, creating a line of clothing. I have a passion for travel and 
                        exploring new cultures—I recently studied abroad in Amsterdam, visiting many places across Europe, 
                        and I'm preparing for a solo trip to China next. I also love discovering new foods (check out my Beli) 
                        and am an avid collector of vintage designer clothing, accessories, and shoes, always on the hunt for unique finds. 
                        To stay active, I enjoy running, hiking, pickleball, and volleyball, while in my downtime, I love crocheting, 
                        knitting, and sewing—and I'm constantly seeking new creative hobbies.
                    </p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;