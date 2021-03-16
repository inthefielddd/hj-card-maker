import React, { useRef, useState } from 'react';
import styles from './image_file_input.module.css';

const ImageFileInput = ({ imageUploader, name, onFileChange }) => {
    const [loading, setLoading] = useState(false);
    const inputRef = useRef();

    const onButtonClick = (event) => {
        event.preventDefault();
        inputRef.current.click();
    };

    //input onChange이벤트 핸들러
    //인풋의 값이 변경됐을떄(이미지)
    const onChange = async (event) => {
        //로딩중일떄
        setLoading(true);
        //imageUploader는 파일이 비동기로 만들어졌기떄문에
        //이벤트가 발생한 요소의files를 클라우드 연결된 곳에 올리게한다
        const uploaded = await imageUploader.upload(event.target.files[0]);
        console.log(uploaded);
        //로딩이 끝나면
        //Loading 값을 업데이트 해줘야 name 값을 가져온다!!!중요
        setLoading(false);
        //onFileChange 파일 정보를담아사
        //addForm과 editForm에서 각각 다른역할로 사용
        onFileChange({
            name: uploaded.original_filename,
            url: uploaded.url,
        });
    };

    return (
        <div className={styles.container}>
            <input ref={inputRef} className={styles.input} type="file" name="file" accept="image/*" onChange={onChange} />
            {!loading && (
                <button onClick={onButtonClick} className={`${styles.button} ${name ? styles.pink : styles.grey}`}>
                    {name || 'No File'}
                </button>
            )}
            {loading && <div className={styles.loading}></div>}
        </div>
    );
};

export default ImageFileInput;
