import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../BLL/redux-store";
import CustomInput from "../../common/input/Input";
import Button from "../../common/button/Button";
import styles from './Cards.module.css'
import {loadCardsData} from "../../../BLL/cards-reduser";


const Cards = (props: any) => {


    const dispatch = useDispatch();
    const {isLoading, cards, page, token,} = useSelector((store: AppStateType) => store.cards)
    debugger
    let deckId = props.match.params.deckId


    useEffect(() => {
        dispatch(loadCardsData(token, deckId, page))
    }, []);

    return <div>
        {
            isLoading ? <div>...Loading</div> :
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
                        <Button buttonClass={'regularButton'}>Add</Button>
                    </div>
                    {
                        cards.map(card => {
                            return <div className={styles.cards} key={card._id}>
                                <div>{card.name}</div>
                                <div>{card.rating}</div>
                                <div className={styles.buttons}>
                                    <Button buttonClass={'regularButton'}>Add to basket</Button>
                                    <Button buttonClass={'regularButton'}>Update</Button>
                                    <Button buttonClass={'deleteButton'}>Delete</Button>

                                </div>
                            </div>
                        })
                    }
                </div>
        }
    </div>
}


export default Cards
