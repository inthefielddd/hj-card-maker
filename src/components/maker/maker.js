import React, { useState } from 'react';
import { useHistory } from 'react-router';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './maker.module.css';

const Maker = ({ authService }) => {
    const [cards, setCards] = useState([
        {
            id: 1,
            name: 'choi hyeon ji',
            company: 'google',
            theme: 'dark',
            title: 'signer',
            email: 'chl12005@naver.com',
            message: 'i can do it',
            fileName: 'hj',
            fileURL: 'hj.png',
        },
        {
            id: 2,
            name: 'jay',
            company: 'ola',
            theme: 'light',
            title: 'engineer',
            email: '1@naver.com',
            message: 'i can do it',
            fileName: 'hj',
            fileURL: 'hj.png',
        },
        {
            id: 3,
            name: 'hyeon3',
            company: 'google',
            theme: 'colorful',
            title: 'signer',
            email: 'hey@naver.com',
            message: 'i can do it',
            fileName: 'hj',
            fileURL: null,
        },
    ]);

    const history = useHistory();

    const onLogout = () => {
        authService.logout();
        history.push('/');
    };

    return (
        <section className={styles.maker}>
            <Header className={styles.header} onLogout={onLogout} />
            <div className={styles.container}>
                <Editor />
                <Preview cards={cards} />
            </div>
            <Footer className={styles.footer} />
        </section>
    );
};

export default Maker;
