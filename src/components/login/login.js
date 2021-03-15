import React from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './login.module.css';

const Login = (props) => {
    const onLogin = () => {};
    return (
        <section className={styles.login}>
            <Header />
            <section>
                <h1 className={styles.title}>Login</h1>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <button className={styles.button} onClick={onLogin}>
                            <i className={`fab fa-google ${styles.icon}`}></i>
                            <span> Google</span>
                        </button>
                    </li>
                    <li className={styles.item}>
                        <button className={styles.button} onClick={onLogin}>
                            <i className={`fab fa-github ${styles.icon}`}></i>
                            <span>Github</span>
                        </button>
                    </li>
                </ul>
            </section>
            <Footer />
        </section>
    );
};

export default Login;
