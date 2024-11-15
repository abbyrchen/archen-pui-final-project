// import libraries
import React, { useRef, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCreative, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';

// import icons + images
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'; 
import IntroImage from '../../assets/homepage.png';
import ExpImage from '../../assets/experience.png';
import InformativityImg from '../../assets/informativity.png';
import BAAImg from '../../assets/cmu_baa.png';
import wildMeImg from '../../assets/wildme.png'

// import styles
import styles from './Home.module.css';

// import components
import FluidShader from '../../components/FluidShader';


const recentWorks = [
    { id: 1, src: InformativityImg, alt: 'informativity project', title: 'Informativity', tags: ['User Research', 'UX Design'] },
    { id: 2, src: BAAImg, alt: 'CMU BAA website redesign', title: 'Cmu Baa', tags: ['Frontend Development', 'UX Design'] },
    { id: 3, src: wildMeImg, alt: 'WildMe research', title: 'Wild Me', tags: ['User Research'] }
];

function Home() {
    const swiperRef = useRef(null);
    const [isLocked, setIsLocked] = useState(false);
    const [caretVisible, setCaretVisible] = useState(true);
    const recentWorksRef = useRef(null);

    const handleCaretClick = () => {
        if (recentWorksRef.current) {
            recentWorksRef.current.scrollIntoView({ behavior: 'smooth' });
            setCaretVisible(false); // hide caret on click
        }
    }

    const handleScroll = () => {
        const recentWorksElement = document.querySelector(`.${styles.recentWorks}`);
        const rect = recentWorksElement.getBoundingClientRect();
        const isInViewport = rect.top <= 0 && rect.bottom >= window.innerHeight;

        if (isInViewport) {
            document.body.style.overflow = 'hidden'; // lock page scroll
            setIsLocked(true);
            setCaretVisible(false); // hide caret when scrolling down
        } else {
            document.body.style.overflow = 'auto'; // unlock page scroll
            setIsLocked(false);
            setCaretVisible(true); // show caret on scrolling up
        }
    };

    useEffect(() => {
        const handleSwiperScroll = () => {
            if (swiperRef.current) {
                const swiper = swiperRef.current.swiper;
                if (swiper.isEnd || swiper.isBeginning) {
                    document.body.style.overflow = 'auto'; // allow scrolling after the last project
                    setCaretVisible(true);
                } else {
                    document.body.style.overflow = 'hidden'; // lock during swiping
                    setCaretVisible(false);
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
                {/*<FluidShader />*/}
                <div className={styles.content}>
                    <img src={IntroImage} alt="Hi, I'm Abby" />
                </div>
                <FontAwesomeIcon 
                    icon={faChevronDown} 
                    className={`${styles.caretIcon} ${!caretVisible ? styles.hidden : ''}`}
                    onClick={handleCaretClick}
                />
            </section>

            {/* recent works section */}
            <section ref={recentWorksRef} className={styles.recentWorks}>
                <div className={styles.recentContent}>
                    <h2 className={styles.sectionTitle}>recent work</h2>
                    <Swiper
                        ref={swiperRef}
                        modules={[EffectCreative, Mousewheel]}
                        effect="creative"
                        creativeEffect={{
                            perspective: true,
                            prev: {
                                translate: [0, 0, -200], 
                                scale: 0.9,          
                                opacity: 1           
                            },
                            next: {
                                translate: [0, '100%', 0], 
                                scale: 0.9,         
                                opacity: 1       
                            },
                            current: {
                                translate: [0, 0, 100], 
                                scale: 1,          
                                opacity: 1      
                            },
                        }}
                        direction="vertical"
                        slidesPerView={1}
                        mousewheel
                        centeredSlides
                        speed={1000}
                        className={styles.swiperContainer}
                    >
                        {recentWorks.map((work) => (
                            <SwiperSlide key={work.id} className={styles.workSlide}>
                                <div className={styles.projectSlide}>
                                    <img src={work.src} alt={work.alt} className={styles.projectImage} />
                                    <div className={styles.projectInfo}>
                                        <p className={styles.projectTitle}>{work.title}</p>
                                        <div className={styles.projectTags}>
                                            {work.tags.map((tag, index) => (
                                                <span className={styles.projectTag} key={index}>{tag}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
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