import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

// navbar header
function Header() {
    const [dropdownVisible, setDropdownVisible] = useState(false);

    const handleMouseEnter = () => setDropdownVisible(true);
    const handleMouseLeave = () => setDropdownVisible(false);

    return (
        <nav>
            <div className={styles.logo}>
                <NavLink to="/" className={styles.logoLink}>
                    <h2>ABBY CHEN</h2>
                </NavLink>
            </div>

            <ul className={styles.navLinks}>
                <li
                   className={styles.navItem}
                   onMouseEnter={handleMouseEnter}
                   onMouseLeave={handleMouseLeave} 
                >
                    <NavLink 
                        to="/" 
                        className={({ isActive }) => isActive ? `${styles.navItem} ${styles.current}` : styles.navItem}
                    >
                        work
                    </NavLink>
                    {dropdownVisible && (
                        <ul className={styles.dropdownMenu}>
                            <li>
                                <NavLink to="/work/informativity" className={styles.dropdownItem}>Informativity</NavLink>
                            </li>
                            <li>
                                <NavLink to="/work/cmu-baa-redesign" className={styles.dropdownItem}>CMU BAA</NavLink>
                            </li>
                            <li>
                                <NavLink to="/work/wildme-study" className={styles.dropdownItem}>WildMe</NavLink>
                            </li>
                        </ul>
                    )}
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
                    <a href="/resume.pdf" target="_blank" className={styles.navItem}>
                        resume
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Header;
