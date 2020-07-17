import React from 'react';
import {Module} from "./UniversalModule";
import CustomInput from "../../input/Input";
import Button from "../../button/Button";

type PropsType = {
    showModule: boolean,
    packName: string,
    ChangePack: () => void
    backgroundOnClick: ()=>void
}

export const UpdatePackModule = (props: PropsType) => {

    return <Module height={300} width={400} show={props.showModule} backgroundOnClick={props.backgroundOnClick} enableBackground={true}>
        <CustomInput name={"Add new item"} value={props.packName}/>
        <Button buttonClass={'regularButton'} onClick={props.ChangePack}>Add</Button>
    </Module>
}

