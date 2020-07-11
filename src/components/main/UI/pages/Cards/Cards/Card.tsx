import styles from "../CardsPack/CardsPack.module.css";
import Button from "../../../common/button/Button";
import React from "react";

type propsType = {
    _id: string,
    name: string,
    answer: string,
    grade: number
}

export const Card = (props: propsType) => {

    const {_id, name, answer, grade} = props

    return <div className={styles.cardsPack} key={_id}>
        <div>{name}</div>
        <div>{answer}</div>
        <div>{grade}</div>
        <div className={styles.buttons}>
            <Button buttonClass={'regularButton'}>Update</Button>
            <Button buttonClass={'deleteButton'}>Delete</Button>
        </div>
    </div>
}
