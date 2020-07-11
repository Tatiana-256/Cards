import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../../BLL/redux-store";
import CustomInput from "../../../common/input/Input";
import Button from "../../../common/button/Button";
import styles from  './CardsPack.module.css'
import Preloader from "../../../common/Preloader/Preloder";
import {
    addCardPack,
    changeCardPack,
    deleteCardPack,
    loadCardsPackData
} from '../../../../BLL/cardsRedusers/cardsPack-reduser';


const CardsPack = () => {

    const dispatch = useDispatch();
    const {isLoading, cards} = useSelector((store: AppStateType) => store.cardsPack)

    useEffect(() => {
        dispatch(loadCardsPackData())
    }, []);

    const addCardsButtonClick = () => {
        debugger
        dispatch(addCardPack())
    }


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
                <div  className={styles.head}>
                    <CustomInput/>
                    <Button buttonClass={'regularButton'}>Add new Pack</Button>
                </div>

                {cards.map(card => {
                    const onChangePack = () => {
                        dispatch(changeCardPack(card._id))
                    }

                    const onDeletePack = () => {
                        dispatch(deleteCardPack(card._id))
                    }


                    return <div className={styles.cardsPack} key={card._id}>
                        <div>{card.name}</div>
                        <div>{card.rating}</div>
                        <div className={styles.buttons}>
                            <Button buttonClass={'regularButton'}>Add to basket</Button>
                            <Button buttonClass={'regularButton'}>Show Cards</Button>
                            <Button buttonClass={'regularButton'}
                                    onClick={onChangePack}
                            >Update</Button>
                            <Button buttonClass={'deleteButton'}
                                    onClick={onDeletePack}
                            >Delete</Button>
                        </div>
                    </div>
                })
                }
            </div>
        }
    </div>
}


export default CardsPack
