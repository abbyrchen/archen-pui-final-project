import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'; 
import styles from './Home.module.css';
import IntroImage from '../../assets/homepage.png';
import ExpImage from '../../assets/experience.png';

function Home() {
    return (
        <div className={styles.homePage}>
            {/* landing section w animation */}
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
