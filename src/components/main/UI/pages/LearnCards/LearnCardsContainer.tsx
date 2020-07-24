import React, {useEffect, useState} from 'react';
import {LearnCards} from "./LearnCards";
import {useDispatch, useSelector} from "react-redux";
import {NavLink, useParams} from "react-router-dom";
import {CardType, loadCardsData} from "../../../BLL/cardsRedusers/cards-reduser";
import {AppStateType} from "../../../BLL/redux-store";
import Button from "../../common/button/Button";


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
        if (cards.length > 0) setCard(cards[0])
    }, [dispatch, id])

    const cards = useSelector<AppStateType, Array<CardType>>(state => state.cards.cards)


    return <>
        {card.answer === "answer" ?
            <div>There is no any cards. Please add
                <NavLink to={`/cards/cards/${id}`}> <Button buttonClass={'regularButton'}>Add cards</Button></NavLink>
            </div>
            :
            <LearnCards card={card}/>
        }</>
}
