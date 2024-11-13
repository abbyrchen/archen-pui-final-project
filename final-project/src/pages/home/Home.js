import React, { useRef, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'; 
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCreative, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import styles from './Home.module.css';
import IntroImage from '../../assets/homepage.png';
import ExpImage from '../../assets/experience.png';
import InformativityImg from '../../assets/informativity.png';
import BAAImg from '../../assets/cmu_baa.png';
import wildMeImg from '../../assets/wildme.png'

const recentWorks = [
    { id: 1, src: InformativityImg, alt: 'informativity project' },
    { id: 2, src: BAAImg, alt: 'CMU BAA website redesign'},
    { id: 3, src: wildMeImg, alt: 'WildMe research'},
]

function Home() {
    const swiperRef = useRef(null);
    const [isLocked, setIsLocked] = useState(false);

    const handleScroll = () => {
        const recentWorksElement = document.querySelector(`.${styles.recentWorks}`);
        const rect = recentWorksElement.getBoundingClientRect();
        const isInViewport = rect.top <= 0 && rect.bottom >= window.innerHeight;

        if (isInViewport) {
            document.body.style.overflow = 'hidden'; // Lock page scroll
            setIsLocked(true);
        } else {
            document.body.style.overflow = 'auto'; // Unlock page scroll
            setIsLocked(false);
        }
    };

    useEffect(() => {
        const handleSwiperScroll = () => {
            if (swiperRef.current) {
                const swiper = swiperRef.current.swiper;
                if (swiper.isEnd || swiper.isBeginning) {
                    document.body.style.overflow = 'auto'; // Allow scrolling after the last project
                } else {
                    document.body.style.overflow = 'hidden'; // Lock during swiping
                }
            }
        };

        if (swiperRef.current) {
            const swiper = swiperRef.current.swiper;
            swiper.on('slideChange', handleSwiperScroll);
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (swiperRef.current?.swiper) {
                const swiper = swiperRef.current.swiper;
                swiper.off('slideChange', handleSwiperScroll);
            }
            document.body.style.overflow = 'auto';
        };
    }, []);

    return (
        <div className={styles.homePage}>
            {/* landing section */}
            <section className={styles.landingContainer}>
                <div className={styles.content}>
                    <img src={IntroImage} alt="Hi, I'm Abby" />
                </div>
                <FontAwesomeIcon 
                    icon={faChevronDown} 
                    className={styles.caretIcon}
                />
            </section>

            {/* recent works section */}
            <section className={styles.recentWorks}>
                <div className={styles.recentContent}>
                    <h2 className={styles.sectionTitle}>recent work</h2>
                    <Swiper
                        ref={swiperRef}
                        modules={[EffectCreative, Mousewheel]}
                        effect="creative"
                        creativeEffect={{
                            perspective: true,
                            prev: {
                                translate: [0, 0, -200], // Adjust depth to prevent severe zoom-out
                                scale: 0.9,             // Slightly reduce previous slide size
                                opacity: 1            // Add opacity for smoother transitions
                            },
                            next: {
                                translate: [0, '100%', 0], // Align slides vertically
                                scale: 0.9,               // Slightly reduce next slide size
                                opacity: 1             // Consistent opacity for next slide
                            },
                            current: {
                                translate: [0, 0, 100], // Center current slide fully visible
                                scale: 1,            // No scaling for active slide
                                opacity: 1           // Full visibility for active slide
                            },
                        }}
                        direction="vertical"
                        slidesPerView={1}
                        mousewheel
                        centeredSlides
                        speed={1000} // Smooth swipe transition
                        className={styles.swiperContainer}
                    >
                        {recentWorks.map((work) => (
                            <SwiperSlide key={work.id} className={styles.workSlide}>
                                <img src={work.src} alt={work.alt} className={styles.projectImage} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>


            {/* experience section */}
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
