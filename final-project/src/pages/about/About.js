import { React } from 'react';
import styles from './About.module.css';
import AboutQuote from '../../assets/about.png';
import ProfileImage from '../../assets/profileimage.JPG';
import Abby from '../../assets/abby.png';

function About() {
    return (
        <div className={styles.aboutPage}>
            <img src={AboutQuote} alt="driven by curiosity and fueled by creativity, i'm a designer, explorer, & creator bringing ideas to life" className={styles.aboutImage} />

            <div className={styles.aboutContainer}>
                <div className={styles.imageContainer}>
                    <img src={ProfileImage} alt="image of me on a beach in qingdao" />
                </div>
                <div className={styles.textContainer}>
                    <div className={styles.intro}>
                        <h1>Hi, I’m <span className={styles.fancy}>Abby</span></h1>
                    </div>

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
                        Outside the classroom, I’m the captain of <a href="">CMU’s volleyball team</a>, Vice President of the Asian Desi Pacific Islander Student Athlete Association, 
                        and a fashion designer for Lunar Gala, creating a line of clothing. I have a passion for travel and 
                        exploring new cultures—I recently studied abroad in Amsterdam, visiting many places across Europe, 
                        and I'm preparing for a solo trip to China next. I also love discovering new foods (check out my Beli) 
                        and am an avid collector of vintage designer clothing, accessories, and shoes, always on the hunt for unique finds. 
                        To stay active, I enjoy running, hiking, pickleball, and volleyball, while in my downtime, I love crocheting, 
                        knitting, and sewing—and I'm constantly seeking new creative hobbies.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;