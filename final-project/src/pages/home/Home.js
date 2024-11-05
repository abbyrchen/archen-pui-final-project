import { React } from 'react';
import styles from './Home.module.css';
import FluidAnimation from '../../components/FluidAnimation';
import introImage from '../../assets/homepage.png';

// home page that shows works
function Home() {
    return (
        <div className={styles.landingContainer}>
            <div className={styles.content}>
                <img src={introImage} alt="Hi, I'm Abby" />
            </div>
        </div>
    );
}

export default Home;