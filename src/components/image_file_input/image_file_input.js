import React, { useState } from 'react';
import styles from './image_file_input.module.css';

const ImageFileInput = ({ name }) => {
    const [loading, setLoading] = useState(false);
    return (
        <div className={styles.container}>
            <input className={styles.file} type="file" name="file" accept="image/*" />
            {!loading && <button className={styles.button}>{name || 'No File'}</button>}
        </div>
    );
};

export default ImageFileInput;
