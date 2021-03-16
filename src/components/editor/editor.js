import React from 'react';
import CardAddForm from '../card_add_form copy/card_add_form';
import CardEditForm from '../card_edit_form/card_edit_form';
import styles from './editor.module.css';

const Editor = ({ cards, addCard, updateCard, deleteCard, FileInput }) => {
    return (
        <section className={styles.editor}>
            <h1 className={styles.title}>Card Editor</h1>
            {Object.keys(cards).map((key) => (
                <CardEditForm key={key} FileInput={FileInput} card={cards[key]} updateCard={updateCard} deleteCard={deleteCard} />
            ))}
            <CardAddForm onAdd={addCard} FileInput={FileInput} />
        </section>
    );
};

export default Editor;
