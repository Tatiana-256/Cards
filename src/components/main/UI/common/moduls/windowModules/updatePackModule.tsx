import React, {ChangeEvent, useState} from 'react';
import {Module} from "./UniversalModule";
import CustomInput from "../../input/Input";
import Button from "../../button/Button";

type PropsType = {
    showModule: boolean,
    packName: string,
    ChangePack: () => void
    backgroundOnClick: () => void
}

export const UpdatePackModule = (props: PropsType) => {

    const [packName, setPackName] = useState(props.packName)

    const onchangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        setPackName(e.currentTarget.value)
    }


    return <Module height={300} width={400} show={props.showModule} backgroundOnClick={props.backgroundOnClick}
                   enableBackground={true}>
        <CustomInput name={"Add new item"} value={packName} onChange={onchangeInput}/>
        <Button buttonClass={'regularButton'} onClick={props.ChangePack}>Add</Button>
    </Module>
}

