// import libraries
import { React, useEffect } from 'react';
import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// import stylesheet
import styles from './Play.module.css';

// import images
import PlayImage from '../../assets/playground_image.png';
import xaiPaper from '../../assets/questiondriven.gif';
import beaPage1 from '../../assets/bea1.png';
import didotParis from '../../assets/didotparis.png';
import beaPage2 from '../../assets/bea2.png';
import filialPiety from '../../assets/grid.gif';
import didotOpposite from '../../assets/didotopposite.png';

const galleryItems = [
    { src: xaiPaper, alt: 'work 1: information interaction design' },
    { src: beaPage1, alt: 'work 2: beatopia magazine page' },
    { src: didotParis, alt: 'work 3: didot poster' },
    { src: beaPage2, alt: 'work 4: another beatopia magazine page' },
    { src: filialPiety, alt: 'work 5: information grid design' },
    { src: didotOpposite, alt: 'work 6: another didot poster' },
];

const Play = () => {
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

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        // animate experience image
        gsap.fromTo(
            `.${styles.playHeading}`,
            { opacity: 0, x: -50 },
            {
                opacity: 1,
                x: 0,
                duration: 2,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: `.${styles.playHeading}`,
                    start: "top 80%",
                },
            }
      );

        // animate gallery images
        gsap.fromTo(
            `.${styles.galleryItem}`,
            {
                opacity: 0,
                y: 50,
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power4.out",
                stagger: 0.2,
                scrollTrigger: {
                    trigger: `.${styles.playgroundImages}`,
                    start: "top 80%",
                },
            }
        );
    }, []);

    return (
        <div className={styles.playPage}>
            <section className={styles.playHeading}>
                <h1 className={styles.playTitle}>Playground</h1>
                <img src={PlayImage} className={styles.playImage} />
            </section>

            {/* images of work */}
            <div className={styles.playgroundImages}>
                {galleryItems.map((item, index) => (
                    <img key={index} src={item.src} alt={item.alt} className={styles.galleryItem} />
                ))}
            </div>
        </div>
    );
}

export default Play;