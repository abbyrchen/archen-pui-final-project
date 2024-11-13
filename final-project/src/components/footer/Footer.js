import { React } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'; 
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import styles from './Footer.module.css';

// site footer
function Footer() {
    return (
        <div className={styles.footer}>
            <section className={styles.socials}>
                <p>find me here</p>
                <a href="mailto:abbyrchen@gmail.com">
                    <FontAwesomeIcon 
                        icon={faEnvelope}
                        className={styles.icon}
                    /> 
                </a>
                <a href="https://www.linkedin.com/in/abby-chen333/" target="_blank">
                    <FontAwesomeIcon
                        icon={faLinkedin}
                        className={styles.icon}
                    />
                </a>
                <a href="https://www.instagram.com/abbyrchen/" target="_blank">
                    <FontAwesomeIcon
                        icon={faInstagram}
                        className={styles.icon}
                    />
                </a>
            </section>

            <section className={styles.signature}>
                <p>made by abby chen, with love <FontAwesomeIcon icon={faHeart} className={styles.icon} /></p>
            </section>
        </div>
    );
}

export default Footer;