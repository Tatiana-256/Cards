import React, {ChangeEvent, useState, useRef} from 'react';
import styles from "../imagine-video-file-editor.module.css";
import './fileCheckBox.css'
import Button from "../../../../main/UI/common/button/Button";

interface PropsType {
    code: boolean,
    setCode(e: any): void

}


export const FileInput: React.FC<PropsType> = ({code, setCode}) => {
    return <div>
        <div className={styles.inputContainer}>
            <label className={styles.customFileUpload}>
                <input type="file" accept=".jpg, .jpeg, .png" multiple/>
                Load file
            </label>
            <label className="container">Reader
                <input type="checkbox" checked={code}
                       onChange={(e: any) => setCode(e.currentTarget.checked)}/>
                <span className="checkmark"></span>
            </label>
        </div>
    </div>

}
