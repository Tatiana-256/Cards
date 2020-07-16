import React, {useEffect} from 'react';
import styles from "../CardsPack/CardsPack.module.css";
import Button from "../../../common/button/Button";
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from '../../../../BLL/redux-store';
import {addCards, CardType, deleteCard, loadCardsData, updateCard} from "../../../../BLL/cardsRedusers/cards-reduser";
import {useParams} from "react-router-dom";
import Table, {ITableModel} from "../../../common/Table/Table";

export const Cards = () => {
    const {id} = useParams()

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadCardsData(id))
    }, [dispatch])

    const cards = useSelector<AppStateType, Array<CardType>>(state => state.cards.cards)


    const model: Array<ITableModel> = [
        {
            title: (index: number) => <div key={"question" + index}>Question</div>,
            render(dataItem: CardType, dataIndex: number) {
                return <div key={dataIndex + dataItem._id}>{dataItem.question}</div>
            }
        },
        {
            title: (index: number) => <div key={"answer" + index}>Answer</div>,
            render(dataItem: CardType, dataIndex: number) {
                return <div key={dataIndex + dataItem._id}>{dataItem.answer}</div>
            }
        },
        {
            title: (index: number) => <div key={"grade" + index}>Grade</div>,
            render(dataItem: CardType, dataIndex: number) {
                return <div key={dataIndex + dataItem._id}>{dataItem.grade}</div>
            }
        },
        {
            title: (index: number) => <div key={"buttons" + index}>Buttons</div>,
            render(dataItem: CardType, dataIndex: number) {
                const onDeletePack = () => {
                    dispatch(deleteCard(dataItem._id))
                }
                const onChangePack = () => {
                    dispatch(updateCard(dataItem._id))
                }
                return <div key={dataIndex + dataItem._id} className={styles.buttons}>
                    <Button onClick={onDeletePack} buttonClass={'deleteButton'}>Delete</Button>
                    <Button onClick={onChangePack} buttonClass={'regularButton'}>Update</Button>
                </div>
            }
        },
    ]

 const addCardsButtonClick = () => {
     dispatch(addCards(id))
 }
    return <div>
        {/*{isLoading ? <Preloader/> :*/}
        <div className={styles.container}>
            <div className={styles.head}>
                <Button buttonClass={'regularButton'} onClick={addCardsButtonClick}>Add</Button>
            </div>
            <Table model={model} data={cards}/>
        </div>
        {/*}*/}
    </div>
}
