import React, {useState} from 'react';
import styles from './LearnCards.module.css';
import Button from "../../common/button/Button";
import {v1} from 'uuid'
import {CardType} from "../../../BLL/cardsRedusers/cards-reduser";


type PropsType = {
  card: CardType

}

export const LearnCards: React.FC<PropsType> = ({card}) => {

    const [isChecked, setIsChecked] = useState(false)
    const grades = ['don`t know', 'forgot', 'hard to remember', 'know', 'know well']

    const onSelectedGrade = () => {
        setIsChecked(false)
    }

    return <div className={styles.container}>
        <div className={styles.module}>
            <div>Question
                <div>{card.question}</div>
            </div>
            {
                isChecked ?
                    <div className={styles.answer}>
                        Answer
                        <div>
                            {card.answer}
                        </div>
                        <div className={styles.buttons}>
                            {grades.map(g => {
                                return <Button buttonClass={'smallButton'}
                                               style={{boxShadow: "3px 5px 5px rgba(0,0,0,0.4)"}}
                                               key={v1()}
                                               onClick={() => {
                                               }}
                                >
                                    {g}
                                </Button>
                            })}
                        </div>
                    </div>
                    :
                    <Button
                        buttonClass={'regularButton'}
                        style={{width: '150px'}}
                        onClick={() => setIsChecked(true)}
                    >
                        Check answer
                    </Button>}

        </div>
    </div>
}

