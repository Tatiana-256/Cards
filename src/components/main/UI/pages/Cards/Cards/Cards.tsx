import React from 'react';
import styles from "../CardsPack/CardsPack.module.css";
import Button from "../../../common/button/Button";
import {useSelector} from 'react-redux';
import {AppStateType} from '../../../../BLL/redux-store';
import {CardType} from "../../../../BLL/cardsRedusers/cards-reduser";
import { Card } from './Card';


export const Cards = () => {

    const packCards = useSelector<AppStateType, Array<CardType>>(state => state.cards.cards)


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
            {packCards.map(card => {
                return <Card _id={card._id} name={card.question} answer={card.answer} grade={card.grade}/>
            })
            }
        </div>
        {/*}*/}
    </div>
}
