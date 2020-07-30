import React, {ChangeEvent, useRef, useState} from 'react';
import {FileInput} from "./editor-components/file-input";
import {LoadingFile} from "./editor-components/loading-reading-file";

export const LoadingFiles = () => {

    const inRef = useRef<HTMLInputElement>(null);

    const [code, setCode] = useState(false);
    const [file, setFile] = useState()
    const [fileURL, setFileURL] = useState()

    const upload = (e: ChangeEvent<HTMLInputElement>) => {

        const newFile = e.target.files && e.target.files[0]

        if (newFile) {
            setFile(newFile)
            setFileURL(window.URL.createObjectURL(newFile))
        }
    }

    const returnFileSize = (n: number) => {
        if (n < 1024) {
            return n + 'bytes';
        } else if (n > 1024 && n < 1048576) {
            return (n / 1024).toFixed(2) + 'KB';
        } else if (n > 1048576) {
            return (n / 1048576).toFixed(2) + 'MB';
        }
    };

    return <>
        <FileInput code={code} setCode={setCode}/>
        <LoadingFile
            file={file}
            inRef={inRef}
            returnFileSize={returnFileSize}
            upload={upload}
        />
    </>
}
