import React, { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import gsap from 'gsap';
import styles from './Header.module.css';

import { ReactComponent as Logo } from '../../assets/logo.svg';

// navbar header
function Header() {
    const logoRef = useRef(null);
    const [dropdownVisible, setDropdownVisible] = useState(false);

    useEffect(() => {
        const paths = logoRef.current.querySelectorAll('path');
        paths.forEach(path => {
            gsap.set(path, { fill: "white" });
        });
    }, []);

    // logo should fill on hover
    const handleLogoMouseEnter = () => {
        // animate all paths to fill with color on hover
        const paths = logoRef.current.querySelectorAll('path');
        gsap.to(paths, {
            fill: "#4F4F4F", 
            duration: 1.5,
            ease: "power2.out",
            stagger: 0.05,
        });
    };

    const handleLogoMouseLeave = () => {
        // animate all paths back to white on mouse leave
        const paths = logoRef.current.querySelectorAll('path');
        gsap.to(paths, {
            fill: "white",
            duration: 1.5,
            ease: "power2.out",
            stagger: 0.05,
        });
    };


    return (
        <nav>
            <div className={styles.logo}>
                <NavLink to="/" onMouseEnter={handleLogoMouseEnter} onMouseLeave={handleLogoMouseLeave}>
                    <Logo
                        ref={logoRef}
                        className={styles.logoSvg}
                    />
                </NavLink>
            </div>

            <ul className={styles.navLinks}>
                <li
                   className={styles.navItem}
                   onMouseEnter={() => setDropdownVisible(true)}
                   onMouseLeave={() => setDropdownVisible(false)} 
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
                    <a href={`${process.env.PUBLIC_URL}/resume.pdf`} target="_blank" rel="noopener noreferrer" className={styles.navItem}>
                        resume
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Header;
