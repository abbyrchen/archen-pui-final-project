import React, { useEffect } from 'react';
import styles from './CustomCursor.module.css';

const CustomCursor = () => {
  useEffect(() => {
    const customCursor = document.getElementById('customCursor');

    // handle cursor movement
    const moveCursor = (e) => {
      const { clientX: x, clientY: y } = e;
      customCursor.style.left = `${x}px`;
      customCursor.style.top = `${y}px`;
    };

    // handle hover effect for clickable elements
    const addHoverEffect = () => {
      customCursor.classList.add(styles.hover);
    };

    const removeHoverEffect = () => {
      customCursor.classList.remove(styles.hover);
    };

    window.addEventListener('mousemove', moveCursor);
    document.querySelectorAll('a, button, [data-cursor-hover]').forEach((element) => {
      element.addEventListener('mouseenter', addHoverEffect);
      element.addEventListener('mouseleave', removeHoverEffect);
    });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.querySelectorAll('a, button, [data-cursor-hover]').forEach((element) => {
        element.removeEventListener('mouseenter', addHoverEffect);
        element.removeEventListener('mouseleave', removeHoverEffect);
      });
    };
  }, []);

  return <div id="customCursor" className={styles.customCursor}></div>;
};

export default CustomCursor;
