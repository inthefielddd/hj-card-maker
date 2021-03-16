import React from 'react';
import Button from '../button/button';
import ImageFileInput from '../image_file_input/image_file_input';
import styles from './card_edit_form.module.css';

const CardEditForm = ({ card, updateCard, deleteCard }) => {
    //card
    const { name, company, theme, title, email, message, fileName, fileURL } = card;

    //delete를 수행할 로직
    const onSubmit = () => {
        deleteCard(card);
    };

    //값이 변할때 수행할 로직
    const onChange = (event) => {
        if (!event.currentTarget == null) {
            return;
        }
        event.preventDefault();
        updateCard({
            //카드를 즉각적으로 업데이트 시켜줘야한다
            ...card,
            [event.currentTarget.name]: event.currentTarget.value,
        });
    };
    return (
        <form className={styles.form}>
            <input className={styles.input} type="text" value={name} name="name" onChange={onChange} />
            <input className={styles.input} type="text" value={company} name="company" onChange={onChange} />
            <select className={styles.select} name="theme" value={theme} onChange={onChange}>
                <option placeholder="light">light</option>
                <option placeholder="dark">dark</option>
                <option placeholder="colorful">colorful</option>
            </select>
            <input className={styles.input} type="text" value={title} name="title" onChange={onChange} />
            <input className={styles.input} type="text" value={email} name="email" onChange={onChange} />
            <textarea className={styles.textarea} name="message" value={message} cols="10" onChange={onChange} />
            <div className={styles.fileInput}>
                <ImageFileInput />
            </div>
            <Button name="Delete" className={styles.button} onClick={onSubmit} />
        </form>
    );
};

export default CardEditForm;
