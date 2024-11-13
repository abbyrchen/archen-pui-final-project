import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

// navbar header
function Header() {
    return (
        <nav>
            <div className={styles.logo}>
                <NavLink to="/" className={styles.logoLink}>
                    <h2>ABBY CHEN</h2>
                </NavLink>
            </div>

            <ul className={styles.navLinks}>
                <li>
                    <NavLink 
                        to="/" 
                        className={({ isActive }) => isActive ? `${styles.navItem} ${styles.current}` : styles.navItem}
                    >
                        work
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/play" 
                        className={({ isActive }) => isActive ? `${styles.navItem} ${styles.current}` : styles.navItem}
                    >
                        play
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/about" 
                        className={({ isActive }) => isActive ? `${styles.navItem} ${styles.current}` : styles.navItem}
                    >
                        about
                    </NavLink>
                </li>
                <li>
                    <a href="path-to-resume.pdf" target="_blank" rel="noopener noreferrer" className={styles.navItem}>
                        resume
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Header;
