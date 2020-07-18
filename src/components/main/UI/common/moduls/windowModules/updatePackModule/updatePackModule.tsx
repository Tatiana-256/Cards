import React, {ChangeEvent, useState} from 'react';
import {Module} from "../UniversalModule";
import CustomInput from "../../../input/Input";
import Button from "../../../button/Button";
import styles from './updatePack.module.css'

type PropsType = {
    showModule: boolean,
    packName: string,
    ChangePack: (newPackName: string) => void
    backgroundOnClick: () => void
}

export const UpdatePackModule = (props: PropsType) => {

    const [packName, setPackName] = useState(props.packName)

    const onchangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        setPackName(e.currentTarget.value)
    }

    const changePack = () => {
        debugger
        props.ChangePack(packName)
    }

    return <Module height={300}
                   width={400}
                   show={props.showModule}
                   backgroundOnClick={props.backgroundOnClick}
                   enableBackground={true}>
        <div className={styles.window}>
            <div style={{color: 'black'}}>Change pack`s name</div>
            <CustomInput
                value={packName}
                onChange={onchangeInput}
            />
            <div className={styles.buttons}>
                <Button buttonClass={'regularButton'} onClick={changePack}>Add</Button>
                <Button buttonClass={'deleteButton'} onClick={props.backgroundOnClick}>Cancel</Button>
            </div>
        </div>
    </Module>
}

