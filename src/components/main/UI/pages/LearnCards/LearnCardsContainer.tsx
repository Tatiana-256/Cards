import React, {useEffect, useState} from 'react';
import {LearnCards} from "./LearnCards";
import {useDispatch, useSelector} from "react-redux";
import {NavLink, useParams} from "react-router-dom";
import {CardType, loadCardsData} from "../../../BLL/cardsRedusers/cards-reduser";
import {AppStateType} from "../../../BLL/redux-store";
import Button from "../../common/button/Button";
import styles from './LearnCards.module.css';
import {setCardGrade} from '../../../BLL/cardsRedusers/learnCard-reduser';


const getCard = (cards: Array<CardType>) => {
    const sum = cards.reduce((acc, card) => acc + (6 - card.grade) * (6 - card.grade), 0);
    const rand = Math.random() * sum;
    const res = cards.reduce((acc: { sum: number, id: number }, card, i) => {
            const newSum = acc.sum + (6 - card.grade) * (6 - card.grade);
            return {sum: newSum, id: newSum < rand ? i : acc.id}
        }
        , {sum: 0, id: -1});
    return cards[res.id + 1];
};

export const LearnCardsContainer = () => {
    debugger
    const {id} = useParams()

    const [first, setFirst] = useState<boolean>(false)
    const [card, setCard] = useState<CardType>(
        {
            answer: "answer",
            question: "question",
            cardsPack_id: "cardsPack_id",
            grade: 0,
            rating: 0,
            shots: 0,
            type: 'type',
            created: "created",
            updated: "updated",
            __v: 0,
            _id: "_id"
        })

    const dispatch = useDispatch()
    useEffect(() => {
        if (first) {
            dispatch(loadCardsData(id))
            setFirst(false)
        }
        if (cards.length > 0) getCard(cards)
    }, [dispatch, id])

    const cards = useSelector<AppStateType, Array<CardType>>(state => state.cards.cards)


    const setGrade = (grade: number, card_id: string) => {
        setCardGrade(grade, card_id)
    }

    return <>
        {card.answer === "answer" ?
            <div className={styles.noCards}>There is no any cards. Please add
                <NavLink to={`/cards/cards/${id}`}> <Button buttonClass={'regularButton'}>Add cards</Button></NavLink>
            </div>
            :
            <LearnCards card={card} setGrade={setGrade}/>
        }</>
}
