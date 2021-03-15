import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './login.module.css';

const Login = ({ authService }) => {
    const history = useHistory();

    const goToMaker = (userId) => {
        history.push({
            pathname: '/maker',
            state: { id: userId },
        });
    };

    const onLogin = (event) => {
        authService //
            .login(event.currentTarget.textContent)
            .then((data) => goToMaker(data.user.uid));
    };

    //사용자값이 mount될때
    useEffect(() => {
        authService.onAuthChange((user) => {
            console.log(user);
            user && goToMaker(user.uid);
        });
    });

    return (
        <section className={styles.login}>
            <Header />
            <section>
                <h1 className={styles.title}>Login</h1>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <button className={styles.button} onClick={onLogin}>
                            <i className={`fab fa-google ${styles.icon}`}></i>
                            <span>Google</span>
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
