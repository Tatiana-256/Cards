import {searchPackByFilter} from "../../../../BLL/cardsRedusers/cardsPack-reduser";

import React from 'react';
import {useDispatch} from "react-redux";
import styles from "../../../common/SearchPack/SearchPack.module.css";
import Button from "../../../common/button/Button";


export const CardsPackFilters = () => {

    const dispatch = useDispatch();


    // ____________ filters for packs__________________

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

    return <div className={styles.searchFilter}>
        <Button buttonClass={'smallButton'} onClick={searchAtoZ}>Search A-Z </Button>
        <Button buttonClass={'smallButton'} onClick={searchZtoA}>Search Z-A </Button>
        <Button buttonClass={'smallButton'} onClick={searchNew}>Search by new </Button>
        <Button buttonClass={'smallButton'} onClick={searchOlder}>Search by oldest </Button>
    </div>


}
