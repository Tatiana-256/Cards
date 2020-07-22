import React from 'react';
import styles from './LearnCards.module.css';
import Button from "../../common/button/Button";


type PropsType = {
    answer: string
    question: string

}

export const LearnCards = (props: PropsType) => {

    return <div className={styles.container}>
        <div className={styles.module}>
            <div>Question
                <div>{props.question}</div>
            </div>
            <div>Answer
                <div>{props.answer}</div>
            </div>
            <div className={styles.buttons}>
                <Button buttonClass={'smallButton'} style={{boxShadow: "3px 5px 5px rgba(0,0,0,0.4)"}}>
                    don`t know
                </Button>
                <Button buttonClass={'smallButton'} style={{boxShadow: "3px 5px 5px rgba(0,0,0,0.4)"}}>
                    forgot
                </Button>
                <Button buttonClass={'smallButton'} style={{boxShadow: "3px 5px 5px rgba(0,0,0,0.4)"}}>
                    hard to remember
                </Button>
                <Button buttonClass={'smallButton'} style={{boxShadow: "3px 5px 5px rgba(0,0,0,0.4)"}}>
                    know
                </Button>
                <Button buttonClass={'smallButton'} style={{boxShadow: "3px 5px 5px rgba(0,0,0,0.4)"}}>
                    know well
                </Button>
            </div>
        </div>
    </div>
}
