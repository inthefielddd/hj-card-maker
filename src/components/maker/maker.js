import React from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './maker.module.css';

const Maker = (props) => {
    const onLogout = () => {};
    return (
        <section className={styles.maker}>
            <Header className={styles.header} onLogout={onLogout} />
            <div className={styles.container}>
                <h1>Maker</h1>
            </div>
            <Footer className={styles.footer} />
        </section>
    );
};

export default Maker;
