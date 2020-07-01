import React, {ChangeEvent, useState} from 'react';
import CustomInput from "../../common/input/Input";
import Button from "../../common/button/Button";

type PropsType = {
    onClickNewPassword: (newPass: string) => void
}


const NewPassword = (props: PropsType) => {

    const [newPass, setEmail] = useState("")

    const handleSubmit = () => {
        props.onClickNewPassword(newPass)
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }

    return <div>
        Refresh Password
        <form onSubmit={handleSubmit} action="">
            <CustomInput onChange={handleChange} value={newPass}/>
            <Button buttonClass={"regularButton"}>Submit</Button>
        </form>
    </div>
}

export default NewPassword
