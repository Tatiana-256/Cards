import React, {useState} from 'react';
import styles from "../imagine-video-file-editor.module.css";
import './fileCheckBox.css'


export const FileInput = () => {

    const [code, setCode] = useState(false);

    return <div className={styles.inputContainer}>
        <label className={styles.customFileUpload}>
            <input type="file" accept=".jpg, .jpeg, .png" multiple/>
            Load file
        </label>
        <label className="container">Reader
            <input type="checkbox" checked={code} onChange={e => setCode(e.currentTarget.checked)}/>
            <span className="checkmark"></span>
        </label>
        {/*<label>*/}
        {/*    reader*/}
        {/*    <input type={'checkbox'} />*/}
        {/*</label>*/}
    </div>
}
