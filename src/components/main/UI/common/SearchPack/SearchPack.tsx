import React, {ChangeEvent, useState} from 'react';
import {useDispatch} from "react-redux";
import styles from './SearchPack.module.css'
import {addCardPack, showSearchedPack} from "../../../BLL/cardsRedusers/cardsPack-reduser";
import CustomInput from "../input/Input";
import Button from "../button/Button";


const SearchPack = () => {

    const [search, setSearch] = useState('');
    const [value, setValue] = useState('');
    const dispatch = useDispatch();

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.currentTarget.value)
    }
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }

    const addCardsButtonClick = () => {
        if (!value) {
            alert("Введите название!!!")
        } else {
            dispatch(addCardPack(value))
            setValue('')
        }
    }

    // ____________ filters for packs__________________

    const searchByName = () => {
        return dispatch(showSearchedPack(search))
    }
    return (
        <>
            <div className={styles.head}>
                <div className={styles.searchTyping}>
                    <CustomInput onChange={onChangeHandler} value={search}/>
                    <Button buttonClass={'regularButton'} onClick={searchByName}>Search</Button>
                </div>
            </div>
            <div className={styles.head}>
                <div className={styles.searchTyping}>
                    <div><CustomInput onChange={onChange} value={value}/></div>
                    <Button onClick={addCardsButtonClick} buttonClass={'bigButton'}>Add new cards pack</Button>
                </div>
            </div>
        </>
    )

}

export default SearchPack
