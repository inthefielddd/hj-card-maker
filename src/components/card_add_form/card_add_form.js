import React, { useRef, useState } from 'react';
import Button from '../button/button';
import styles from './card_add_form.module.css';

const CardAddForm = ({ onAdd, FileInput }) => {
    const formRef = useRef();
    const nameRef = useRef();
    const companyRef = useRef();
    const themeRef = useRef();
    const titleRef = useRef();
    const emailRef = useRef();
    const messageRef = useRef();

    //file state
    const [file, setFile] = useState({ fileName: null, fileURL: null });

    //FileInput 기능 파일을 올리면 파일이름값 가져오게하기
    const onFileChange = (file) => {
        setFile({
            fileName: file.name, //image_file_input에서 받아오는 name,url 값을 state를 업데이트
            fileURL: file.url,
        });
    };
    //새로운 카드를 만들 로직
    const onSubmit = (event) => {
        event.preventDefault();

        //새로운 카드값
        const card = {
            id: Date.now(),
            name: nameRef.current.value || '',
            company: companyRef.current.value || '',
            theme: themeRef.current.value || '',
            emailRef: emailRef.current.value || '',
            message: messageRef.current.value || '',
            fileName: file.fileName || '',
            fileURL: file.fileURL || '',
        };
        formRef.current.reset();
        setFile({ fileName: null, fileURL: null });
        onAdd(card);
    };

    return (
        <form ref={formRef} className={styles.form}>
            <input ref={nameRef} className={styles.input} type="text" name="name" />
            <input ref={companyRef} className={styles.input} type="text" name="company" />
            <select ref={themeRef} className={styles.select} name="theme">
                <option placeholder="light">light</option>
                <option placeholder="dark">dark</option>
                <option placeholder="colorful">colorful</option>
            </select>
            <input ref={titleRef} className={styles.input} type="text" name="title" />
            <input ref={emailRef} className={styles.input} type="text" name="email" />
            <textarea ref={messageRef} className={styles.textarea} name="message" cols="10" />
            <div className={styles.fileInput}>
                <FileInput name={file.fileName} onFileChange={onFileChange} />
            </div>
            <Button name="Add" className={styles.button} onClick={onSubmit} />
        </form>
    );
};

export default CardAddForm;
