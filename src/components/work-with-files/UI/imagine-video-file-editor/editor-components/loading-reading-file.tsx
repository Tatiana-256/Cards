import React, {ChangeEvent} from 'react';
import styles from "../imagine-video-file-editor.module.css";
import './fileCheckBox.css'
import Button from "../../../../main/UI/common/button/Button";


interface PropsType {
    inRef: any,
    file: any,
    returnFileSize (n: number): void,
    upload (e: ChangeEvent<HTMLInputElement>): void
}

export const LoadingFile: React.FC<PropsType> = ({inRef, file, returnFileSize, upload}) => {
    return <div className={styles.inputContainer}>
        <img src={file} alt='file' width={'300px'}/>
        <div>Last modification: {file && file.lastModified}</div>
        <div>Size: {file && returnFileSize(file.size)}</div>
        <div>Type: {file && file.type}</div>

        <input
            ref={inRef}
            type={'file'}
            style={{display: 'none'}}
            onChange={upload}
        />
        <Button buttonClass={'regularButton'}
                onClick={() => inRef && inRef.current && inRef.current.click()}
        >
            add
        </Button>
    </div>
}
