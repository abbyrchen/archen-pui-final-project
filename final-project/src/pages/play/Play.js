import { React } from 'react';
import PlayImage from '../../assets/playground_image.png';
import styles from './Play.module.css';

import xaiPaper from '../../assets/questiondriven.gif';
import beaPage1 from '../../assets/bea1.png';
import didotParis from '../../assets/didotparis.png';
import beaPage2 from '../../assets/bea2.png';
import filialPiety from '../../assets/grid.gif';
import didotOpposite from '../../assets/didotopposite.png';


const galleryItems = [
    { src: xaiPaper, alt: 'work 1: information interaction design' },
    { src: beaPage1, alt: 'work 2: beatopia magazine page' },
    { src: didotParis, alt: 'work 3: didot poster' },
    { src: beaPage2, alt: 'work 4: another beatopia magazine page' },
    { src: filialPiety, alt: 'work 5: information grid design' },
    { src: didotOpposite, alt: 'work 6: another didot poster' },
];

function Play() {
    return (
        <div className={styles.playPage}>
            <section className={styles.playHeading}>
                <h1 className={styles.playTitle}>Playground</h1>
                <img src={PlayImage} className={styles.playImage} />
            </section>

            {/* images of work */}
            <div className={styles.playgroundImages}>
                {galleryItems.map((item, index) => (
                    <img key={index} src={item.src} alt={item.alt} className={styles.galleryItem} />
                ))}
            </div>
        </div>
    );
}

export default Play;