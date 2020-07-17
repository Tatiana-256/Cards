import React, {ChangeEvent, useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../../BLL/redux-store";
import CustomInput from "../../../common/input/Input";
import Button from "../../../common/button/Button";
import styles from './CardsPack.module.css'
import Preloader from "../../../common/Preloader/Preloder";
import {
    addCardPack,
    CardPackType,
    changeCardPack,
    deleteCardPack,
    loadCardsPackData, searchPackByFilter, showSearchedPack,
} from '../../../../BLL/cardsRedusers/cardsPack-reduser';
import Table, {ITableModel} from "../../../common/Table/Table";
import {Paginator} from "../../../common/Paginator/Paginator";
import {NavLink} from 'react-router-dom';
import {ModuleUp} from "../../../common/moduls/buttonUp/buttonUp";
import {UpdatePackModule} from "../../../common/moduls/windowModules/updatePackModule";


const CardsPack = () => {

    const [value, setValue] = useState('');
    const [showModule, setShowModule] = useState(false)


    const dispatch = useDispatch();
    const {isLoading, cards} = useSelector((store: AppStateType) => store.cardsPack)

    useEffect(() => {
        dispatch(loadCardsPackData())
    }, [dispatch]);

    const addCardsButtonClick = () => {
        dispatch(addCardPack(value))
        setValue('')
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }

    const searchByName = () => {
        return dispatch(showSearchedPack(value))
    }
    const searchAtoZ = () => {
        return dispatch(searchPackByFilter('1', 'name'))
    }
    const searchZtoA = () => {
        return dispatch(searchPackByFilter('-1', 'name'))
    }

    const searchNew = () => {
        return dispatch(searchPackByFilter('1', 'created'))
    }
    const searchOlder = () => {
        return dispatch(searchPackByFilter('-1', 'created'))
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
            title: (index: number) => <div key={"buttons" + index}>Buttons</div>,
            render(dataItem: CardPackType, dataIndex: number) {
                const onDeletePack = () => {
                    dispatch(deleteCardPack(dataItem._id))
                }
                const onChangePack = () => {
                    dispatch(changeCardPack(dataItem._id))
                    setShowModule(false)
                }
                return <>
                    <div key={dataIndex + dataItem._id} className={styles.buttons}>
                        <Button onClick={onDeletePack} buttonClass={'deleteButton'}>Delete</Button>
                        <Button onClick={() => setShowModule(true)}
                                buttonClass={'regularButton'}>Update</Button>
                        <NavLink to={`/cards/cards/${dataItem._id}`}><Button buttonClass={'regularButton'}>Show
                            cards</Button></NavLink>
                        <NavLink to=''><Button buttonClass={'regularButton'}>Learn</Button></NavLink>
                        <Button buttonClass={'regularButton'}>Add to basket</Button>
                    </div>
                    <UpdatePackModule showModule={showModule} packName={dataItem.name} ChangePack={onChangePack}
                                      backgroundOnClick={() => setShowModule(false)}/>
                </>
            }
        },
    ]

    return <div>
        {isLoading ? <Preloader/> :
            <div className={styles.container}>
                <div className={styles.head}>
                    <div className={styles.searchTyping}>
                        <CustomInput onChange={onChangeHandler}/>
                        <Button buttonClass={'regularButton'} onClick={searchByName}>Search</Button>
                    </div>

                    <div className={styles.searchTyping}>
                        <Button buttonClass={'smallButton'} onClick={searchAtoZ}>Search A-Z </Button>
                        <Button buttonClass={'smallButton'} onClick={searchZtoA}>Search Z-A </Button>
                        <Button buttonClass={'smallButton'} onClick={searchNew}>Search by new </Button>
                        <Button buttonClass={'smallButton'} onClick={searchOlder}>Search by oldest </Button>
                    </div>
                </div>
                <div className={styles.head}>
                    <div className={styles.searchTyping}>
                        <div><CustomInput onChange={onChangeHandler}/></div>
                        <Button onClick={addCardsButtonClick} buttonClass={'bigButton'}>Add new cards pack</Button>
                    </div>
                </div>
                <Table model={model} data={cards}/>
                <ModuleUp/>
                <Paginator/>
            </div>
        }
    </div>
}


export default CardsPack
