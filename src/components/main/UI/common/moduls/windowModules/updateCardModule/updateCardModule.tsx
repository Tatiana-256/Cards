import React, {ChangeEvent, useState} from 'react';
import {Module} from "../UniversalModule";
import CustomInput from "../../../input/Input";
import Button from "../../../button/Button";
import styles from '../updatePackModule/updatePack.module.css'

type PropsType = {
    showModule: boolean,
    cardQuestion: string,
    cardAnswer: string,
    ChangeCard: (question: string, answer: string) => void
    backgroundOnClick: () => void
}

export const UpdateCardModule = (props: PropsType) => {

    const [question, setQuestion] = useState(props.cardQuestion);
    const [answer, setAnswer] = useState(props.cardAnswer);

    const onchangeQuestionInput = (e: ChangeEvent<HTMLInputElement>) => {
        setQuestion(e.currentTarget.value)
    }
    const onchangeAnswerInput = (e: ChangeEvent<HTMLInputElement>) => {
        setAnswer(e.currentTarget.value)
    }

    const changeCard = () => {
        debugger
        props.ChangeCard(question, answer)
    }

    return <Module height={300}
                   width={400}
                   show={props.showModule}
                   backgroundOnClick={props.backgroundOnClick}
                   enableBackground={true}>
        <div className={styles.window}>
            <div style={{color: 'black'}}>Change card question</div>
            <CustomInput
                value={question}
                onChange={onchangeQuestionInput}
            />
            <div style={{color: 'black'}}>Change card answer</div>
            <CustomInput
                value={answer}
                onChange={onchangeAnswerInput}
            />
            <div className={styles.buttons}>
                <Button buttonClass={'regularButton'}
                        onClick={changeCard}>
                    Add
                </Button>
                <Button
                    buttonClass={'deleteButton'}
                    onClick={props.backgroundOnClick}>
                    Cancel
                </Button>
            </div>
        </div>
    </Module>

}
