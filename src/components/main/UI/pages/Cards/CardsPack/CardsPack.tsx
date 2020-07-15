import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../../BLL/redux-store";
import CustomInput from "../../../common/input/Input";
import Button from "../../../common/button/Button";
import styles from './CardsPack.module.css'
import Preloader from "../../../common/Preloader/Preloder";
import {
    loadCardsPackData,
    addCardPack,
    changeCardPack,
    deleteCardPack,
    CardPackType
} from '../../../../BLL/cardsRedusers/cardsPack-reduser';
import Table, {ITableModel} from "../../../common/Table/Table";
import {Paginator} from "../../../common/Paginator/Paginator";


const CardsPack = () => {

    const dispatch = useDispatch();
    const {isLoading, cards} = useSelector((store: AppStateType) => store.cardsPack)

    useEffect(() => {
        dispatch(loadCardsPackData())
    }, []);

    const addCardsButtonClick = () => {
        dispatch(addCardPack())
    }

    const model: Array<ITableModel> = [
        {
            title: (index: number) => <div key={"names" + index}>Names</div>,
            render(dataItem: CardPackType, dataIndex: number) {
                return <div key={dataIndex + dataItem._id}>{dataItem.name}</div>
            }
        },
        {
            title: (index: number) => <div key={"rating" + index}>Rating</div>,
            render(dataItem: CardPackType, dataIndex: number) {
                return <div key={dataIndex + dataItem._id}>{dataItem.rating}</div>
            }
        },
        {
            title: (index: number) => <div key={"grade" + index}>Grade</div>,
            render(dataItem: CardPackType, dataIndex: number) {
                return <div key={dataIndex + dataItem._id}>{dataItem.grade}</div>
            }
        },
        {
            title: (index: number) => <div  key={"buttons" + index} style={{width: "400px"}}>Buttons</div>,
            render(dataItem: CardPackType, dataIndex: number) {
                const onDeletePack = () => {
                    dispatch(deleteCardPack(dataItem._id))
                }
                const onChangePack = () => {
                    dispatch(changeCardPack(dataItem._id))
                }
                return <div key={dataIndex + dataItem._id}>

                    <Button onClick={onDeletePack} buttonClass={'deleteButton'}>Delete</Button>
                    <Button onClick={onChangePack} buttonClass={'regularButton'}>Update</Button>
                    <Button buttonClass={'regularButton'}>Add to basket</Button>
                </div>
            }
        },
    ]

    return <div>
        {isLoading ? <Preloader/> :
            <div className={styles.container}>
                <div className={styles.head}>
                    <div className={styles.searchTyping}>
                        <Button buttonClass={'regularButton'}>Search</Button>
                        <CustomInput/>
                    </div>
                    <div className={styles.searchTyping}>
                        <Button buttonClass={'regularButton'}>Search</Button>
                        <div>Diapason of price
                            ________________________________
                        </div>
                    </div>
                </div>
                <div className={styles.head}>
                    <div>Product name</div>
                    <div>
                        <div>Price</div>
                        <div>
                            <button>+</button>
                            <button>-</button>
                        </div>
                    </div>
                    <Button onClick={addCardsButtonClick} buttonClass={'regularButton'}>Add</Button>
                </div>
                <Table model={model} data={cards}/>
                <Paginator/>
            </div>
        }
    </div>
}


export default CardsPack
