import React, {ChangeEvent, useState} from 'react';
import {useDispatch} from "react-redux";
import styles from './SearchPack.module.css'
import {addCardPack, searchPackByFilter, showSearchedPack} from "../../../BLL/cardsRedusers/cardsPack-reduser";
import CustomInput from "../input/Input";
import Button from "../button/Button";


const SearchPack = () => {

    const [value, setValue] = useState('');
    const dispatch = useDispatch();

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }

    const addCardsButtonClick = () => {
        dispatch(addCardPack(value))
        setValue('')
    }

    // ____________ filters for packs__________________

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


    return (
        <>
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
        </>
    )

}

export default SearchPack
