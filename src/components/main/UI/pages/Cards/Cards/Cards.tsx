import React, {ChangeEvent, useEffect, useState} from 'react';
import styles from "../CardsPack/CardsPack.module.css";
import Button from "../../../common/button/Button";
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from '../../../../BLL/redux-store';
import {addCards, CardType, loadCardsData, searchCardByQuestion} from "../../../../BLL/cardsRedusers/cards-reduser";
import {useParams} from "react-router-dom";
import Table, {ITableModel} from "../../../common/Table/Table";
import CustomInput from "../../../common/input/Input";
import {ContainerModuleCards} from "./ContainerModuleCards/ContainerModuleCards";

export const Cards = () => {
    const {id} = useParams()
    const [valueSerch, setValueSerch] = useState('');

    const [value, setValue] = useState('');

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(loadCardsData(id))
    }, [dispatch])

    const cards = useSelector<AppStateType, Array<CardType>>(state => state.cards.cards)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValueSerch(e.currentTarget.value)
    }

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }

    const searchByQuestion = () => {
        dispatch(searchCardByQuestion(valueSerch))
    }




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
            render: (dataItem: CardType, dataIndex: number) => {
                return <ContainerModuleCards key={dataIndex + dataItem._id} dataItem={dataItem} dataIndex={dataIndex}/>
            }
        },
    ]

    const addCardsButtonClick = () => {
        dispatch(addCards(id, value))
        setValue("")
    }
    return <div>
        {/*{isLoading ? <Preloader/> :*/}
        <div className={styles.searchTyping}>
            <CustomInput onChange={onChangeHandler} value={valueSerch}/>
            <Button buttonClass={'regularButton'} onClick={searchByQuestion}>Search</Button>
        </div>
        <div className={styles.container}>
            <div className={styles.head}>
                <CustomInput onChange={onChange} value={value}/>
                <Button buttonClass={'regularButton'} onClick={addCardsButtonClick}>Add</Button>
            </div>
            <Table model={model} data={cards}/>
        </div>
        {/*}*/}
    </div>
}
