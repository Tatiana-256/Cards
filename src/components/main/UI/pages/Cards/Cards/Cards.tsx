import React, {useEffect} from 'react';
import Preloader from "../../../common/Preloader/Preloder";
import styles from "../CardsPack/CardsPack.module.css";
import Button from "../../../common/button/Button";
import {Card} from "./Card";


export const Cards = () => {


    return <div>
        {/*{isLoading ? <Preloader/> :*/}
        <div className={styles.container}>
            <div className={styles.head}>
                <div className={styles.searchTyping}>
                    <div>Question</div>
                    <div>Answer</div>
                    <div>Grade</div>
                    <Button buttonClass={'regularButton'}>Add</Button>
                </div>
            </div>
            {/*{cards.map(card => {*/}
            {/*    return <Card _id={card._id} name={card.name} answer={card.answer} grade={card.grade}/>*/}
            {/*})*/}
            {/*}*/}
        </div>
        {/*}*/}
    </div>
}
