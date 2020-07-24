import React, {useState} from 'react';
import styles from './LearnCards.module.css';
import Button from "../../common/button/Button";
import {v1} from 'uuid'


type PropsType = {
    answer: string
    question: string

}

export const LearnCards = (props: PropsType) => {

    const [isChecked, setIsChecked] = useState(false)
    const grades = ['don`t know', 'forgot', 'hard to remember', 'know', 'know well']

    return <div className={styles.container}>
        <div className={styles.module}>
            <div>Question
                <div>{props.question}</div>
            </div>
            {
                isChecked ?
                    <div>
                        Answer
                        <div>
                            {props.answer}
                        </div>
                    </div>
                    :
                    <Button
                        buttonClass={'regularButton'}
                        style={{width: '150px'}}
                        onClick={() => setIsChecked(true)}
                    >
                        Check question
                    </Button>}
            <div className={styles.buttons}>
                {grades.map(g => {
                    return <Button buttonClass={'smallButton'} style={{boxShadow: "3px 5px 5px rgba(0,0,0,0.4)"}}
                                   key={v1()}
                    >
                        {g}
                    </Button>
                })}
            </div>
        </div>
    </div>
}

