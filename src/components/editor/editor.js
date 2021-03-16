import React from 'react';
import CardEditForm from '../card_edit_form/card_edit_form';
import styles from './editor.module.css';

const Editor = ({ cards, updateCard, deleteCard }) => {
    return (
        <section className={styles.editor}>
            <h1 className={styles.title}>Card Editor</h1>
            {Object.keys(cards).map((key) => (
                <CardEditForm key={key} card={cards[key]} updateCard={updateCard} deleteCard={deleteCard} />
            ))}
        </section>
    );
};

export default Editor;
