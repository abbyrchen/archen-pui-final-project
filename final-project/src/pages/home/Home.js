import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'; 
import styles from './Home.module.css';
import IntroImage from '../../assets/homepage.png';

function Home() {
    return (
        <div className={styles.landingContainer}>
            <div className={styles.content}>
                <img src={IntroImage} alt="Hi, I'm Abby" />
            </div>
            <FontAwesomeIcon 
                icon={faChevronDown} 
                className={styles.caretIcon}
            />
        </div>
    );
}

export default Home;
