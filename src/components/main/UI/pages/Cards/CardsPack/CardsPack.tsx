import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../../BLL/redux-store";
import styles from './CardsPack.module.css'
import Preloader from "../../../common/Preloader/Preloder";
import {
    CardPackType,
    loadCardsPackData
} from '../../../../BLL/cardsRedusers/cardsPack-reduser';
import Table, {ITableModel} from "../../../common/Table/Table";
import {Paginator} from "../../../common/Paginator/Paginator";
import {ModuleUp} from "../../../common/moduls/buttonUp/buttonUp";
import SearchPack from "../../../common/SearchPack/SearchPack";
import {ContainerModulePack} from "./ContainerModulePack/ContainerModulePack";
import Loader from '../../../common/loader/LoaderComponent';

const CardsPack = () => {

    const dispatch = useDispatch();
    const {isLoading, cards} = useSelector((store: AppStateType) => store.cardsPack)

    useEffect(() => {
        dispatch(loadCardsPackData())
    }, [dispatch]);

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
            title: (index: number) => <div key={"buttons" + index}>Buttons</div>,
            render:(dataItem: CardPackType, dataIndex: number) => {
                return <ContainerModulePack key={dataIndex + dataItem._id} dataItem={dataItem} dataIndex={dataIndex}/>
            }
        },
    ]

    return <div>
        {isLoading ? <Loader/> :
            <div className={styles.container}>
                <SearchPack/>
                <Table model={model} data={cards}/>
                <ModuleUp/>
                <Paginator/>
            </div>
        }
    </div>
}

export default CardsPack

