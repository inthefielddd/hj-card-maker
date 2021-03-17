import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './maker.module.css';

const Maker = ({ authService, FileInput, cardRepository }) => {
    console.log('Maker');
    const history = useHistory();
    const historyState = history?.location?.state;
    const [cards, setCards] = useState({});
    const [userId, setUserId] = useState(historyState && historyState.id);
    //userId와 cardRepository가 변경될때마다
    //작동한다
    useEffect(() => {
        //만약 유저값이 없다면
        //아무것도 안해준다
        if (!userId) {
            return;
        }
        //있다면
        const stopSync = cardRepository.syncCards(userId, (cards) => {
            setCards(cards);
        });
        //있다면
        return () => stopSync();
    }, [userId, cardRepository]);

    //로그인상태에따라 작동하는 useEffect
    //authService와 userId와 history
    //변경될때만 마운트 되게한다
    useEffect(() => {
        authService.onAuthChange((user) => {
            if (user) {
                //유저가 있다면
                setUserId(userId);
            } else {
                //유저가 없다면 홈화면을 렌더한다
                history.push('/');
            }
        });
    }, [userId, authService, history]);

    //로그아웃 로직
    const onLogout = useCallback(() => {
        authService.logout();
    }, [authService]);

    const createOrUpdateCard = (card) => {
        setCards((cards) => {
            const updated = { ...cards };
            updated[card.id] = card;
            return updated;
        });
        cardRepository.saveCard(userId, card);
    };

    //deleteCard
    const deleteCard = (card) => {
        setCards((cards) => {
            const updated = { ...cards };
            delete updated[card.id];
            return updated;
        });
        cardRepository.removeCard(userId, card);
    };

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
