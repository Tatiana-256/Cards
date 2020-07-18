import {CardType, deleteCard, updateCard} from "../../../../../BLL/cardsRedusers/cards-reduser";
import styles from "../../CardsPack/CardsPack.module.css";
import Button from "../../../../common/button/Button";
import {DeleteModule} from "../../../../common/moduls/windowModules/deleteModule/deleteModule";
import {UpdateCardModule} from "../../../../common/moduls/windowModules/updateCardModule/updateCardModule";
import React, {useState} from "react";
import {useDispatch} from "react-redux";

type PropsType = {
    dataItem: CardType
    dataIndex: number
}

export const ContainerModuleCards:React.FC<PropsType> = ({dataItem, dataIndex}) => {

    const dispatch = useDispatch()
    const [showUpdateModule, setShowUpdateModule] = useState(false)
    const [showDeleteModule, setShowDeleteModule] = useState(false)

    const onDeletePack = () => {
        dispatch(deleteCard(dataItem._id))
        setShowDeleteModule(false)
    }
    const onChangeCard = (question: string, answer: string) => {
        dispatch(updateCard(dataItem._id, question, answer))
        setShowUpdateModule(false)
    }
    return <div key={dataIndex + dataItem._id} className={styles.buttons}>
        <Button
            onClick={() => setShowDeleteModule(true)}
            buttonClass={'deleteButton'}
        >
            Delete
        </Button>
        <Button
            onClick={() => setShowUpdateModule(true)}
            buttonClass={'regularButton'}
        >
            Update
        </Button>
        <DeleteModule
            showModule={showDeleteModule}
            moduleName={'card'}
            onDeletePack={onDeletePack}
            backgroundOnClick={() => {
                setShowDeleteModule(false)
            }}
        />
        <UpdateCardModule
            showModule={showUpdateModule}
            cardQuestion={dataItem.question}
            cardAnswer={dataItem.answer}
            ChangeCard={onChangeCard}
            backgroundOnClick={() => setShowUpdateModule(false)}
        />

    </div>
}
