import React, {useEffect} from 'react';
import styles from "../CardsPack/CardsPack.module.css";
import Button from "../../../common/button/Button";
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from '../../../../BLL/redux-store';
import {CardType, loadCardsData} from "../../../../BLL/cardsRedusers/cards-reduser";
import {Card} from './Card';
import {useParams} from "react-router-dom";


export const Cards = () => {
    let {id} = useParams()
    const dispatch = useDispatch()
    useEffect(() => {
        debugger
       dispatch( loadCardsData(id))
    }, [dispatch])

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
                debugger
                return <Card _id={card._id} name={card.question} answer={card.answer} grade={card.grade}/>
            })
            }
        </div>
        {/*}*/}
    </div>
}
