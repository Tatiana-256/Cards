import React, {ChangeEvent, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../BLL/redux-store";
import {setNewPage} from "../../../BLL/cardsRedusers/cardsPack-reduser";
import styles from './Paginator.module.css';

export const Paginator = () => {

    const dispatch = useDispatch()
    const {page, pageCount, cardsTotalCount} = useSelector((store: AppStateType) => store.cardsPack)
    const [value, setValue] = useState(pageCount)

    const placeholder = Math.ceil(cardsTotalCount / pageCount)
    let pages = []
    for (let i = 1; i <= placeholder; i++) {
        pages.push(i)
    }

    const numberPages = 5

    let showArrowRight = Math.ceil(placeholder / numberPages)
    let [portionNumber, setPortionNumber] = useState(1)
    const leftPortionPageNumber = (portionNumber - 1) * numberPages + 1
    const rightPortionPageNumber = portionNumber * numberPages


    const handlerChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setValue(Number(e.target.value))
        dispatch(setNewPage(Number(e.target.value)))
    }

    const onPageChange = (p: number) => {
        dispatch(setNewPage(value, p))
    }

    return (
        <div className={styles.paginator}>
            <div>
                <select className={styles.select} value={value} onChange={handlerChange}>
                    <option value="4">4</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                </select>

            </div>
            {portionNumber > 1 &&
            <span className={styles.paginatorArrow} onClick={() => setPortionNumber(portionNumber - 1)}> « </span>
            }
            <div>
                {pages
                    .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                    .map(p => <span
                        className={`${styles.pages} ${page === p && styles.selectedPage}`}
                        onClick={() => onPageChange(p)}
                    >{p}</span>)}
            </div>
            {showArrowRight > portionNumber &&

            <span className={styles.paginatorArrow} onClick={()=>  setPortionNumber(portionNumber + 1)}> » </span>
            }
        </div>
    )
}
