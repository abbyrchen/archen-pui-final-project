import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

// navbar header
function Header() {
    return (
        <nav>
            <div className={styles.logo}>
                <Link to="/">
                    <h2>ABBY CHEN</h2>
                </Link>
            </div>

            <ul className={styles.navLinks}>
                <li className={`${styles.navItem} ${styles.current}`}>
                    <Link to="/">work</Link>
                </li>
                <li className={styles.navItem}>
                    <Link to="/play">play</Link>
                </li>
                <li className={styles.navItem}>
                    <Link to="/about">about</Link>
                </li>
                <li className={styles.navItem}>
                    <a href="path-to-resume.pdf" target="_blank" rel="noopener noreferrer">
                        resume
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Header;
