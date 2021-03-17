import React, { memo } from 'react';
import styles from './footer.module.css';

const Footer = memo((props) => {
    console.log('Footer');
    return (
        <footer className={styles.footer}>
            <p className={styles.text}>@inthefielddd</p>
        </footer>
    );
});

export default Footer;
