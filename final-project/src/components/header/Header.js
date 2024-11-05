import { React } from 'react';
import styles from './Header.module.css';

// navigation bar header
function Header() {
    return (
        <nav>
            <div className={styles.logo}>
                <a href='home.jsx'>
                    <h2>ABBY CHEN</h2>
                </a>
            </div>

            <ul className={styles.navLinks}>
                <li className={`${styles.navItem} ${styles.current}`}>
                    <a href='home.jsx'>work</a>
                </li>
                <li className={styles.navItem}>
                    <a href='play.jsx'>play</a>
                </li>
                <li className={styles.navItem}>
                    <a href='about.jsx'>about</a>
                </li>
                <li className={styles.navItem}>
                    <a href='' target='_blank'>resume</a>
                </li>
            </ul>
        </nav>
    );
}

export default Header;