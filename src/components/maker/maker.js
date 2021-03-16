import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './maker.module.css';

const Maker = ({ authService, FileInput }) => {
    const [cards, setCards] = useState({
        1: {
            id: 1,
            name: 'choi hyeon ji',
            company: 'google',
            theme: 'dark',
            title: 'signer',
            email: 'chl12005@naver.com',
            message: 'i can do it',
            fileName: null,
            fileURL: null,
        },
        2: {
            id: 2,
            name: 'jay',
            company: 'ola',
            theme: 'light',
            title: 'engineer',
            email: '1@naver.com',
            message: 'i can do it',
            fileName: '',
            fileURL: '',
        },
        3: {
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
    });

    const history = useHistory();

    //로그아웃 로직
    const onLogout = () => {
        authService.logout();
    };

    const createOrUpdateCard = (card) => {
        setCards((cards) => {
            const updated = { ...cards };
            updated[card.id] = card;
            return updated;
        });
    };

    //deleteCard
    const deleteCard = (card) => {
        setCards((cards) => {
            const updated = { ...cards };
            delete updated[card.id];
            return updated;
        });
    };

    //로그인상태체크하고
    useEffect(() => {
        authService.onAuthChange((user) => {
            if (!user) {
                //유저가 없다면 홈화면을 렌더한다
                history.push('/');
            }
        });
    });
    return (
        <section className={styles.maker}>
            <Header className={styles.header} onLogout={onLogout} />
            <div className={styles.container}>
                <Editor
                    cards={cards}
                    addCard={createOrUpdateCard}
                    updateCard={createOrUpdateCard}
                    deleteCard={deleteCard}
                    FileInput={FileInput}
                />
                <Preview cards={cards} />
            </div>
            <Footer className={styles.footer} />
        </section>
    );
};

export default Maker;
