import {CardPackType, changeCardPack, deleteCardPack} from "../../../../../BLL/cardsRedusers/cardsPack-reduser";
import React, {useState} from "react";
import {useDispatch} from "react-redux";
import styles from "../CardsPack.module.css";
import Button from "../../../../common/button/Button";
import {NavLink} from "react-router-dom";
import {UpdatePackModule} from "../../../../common/moduls/windowModules/updatePackModule/updatePackModule";
import {DeleteModule} from "../../../../common/moduls/windowModules/deleteModule/deleteModule";

type PropsType = {
    dataItem: CardPackType
    dataIndex: number
}

export const ContainerModulePack:React.FC<PropsType> = ({dataItem, dataIndex}) => {

    const dispatch = useDispatch()
    const [showUpdateModule, setShowUpdateModule] = useState(false)
    const [showDeleteModule, setShowDeleteModule] = useState(false)

    const onDeletePack = () => {
        dispatch(deleteCardPack(dataItem._id))
        setShowDeleteModule(false)
    }
    const onChangePack = (newPackName: string) => {
        dispatch(changeCardPack(dataItem._id, newPackName))
        setShowUpdateModule(false)
    }

    return <div key={dataIndex + dataItem._id}>
        <div  className={styles.buttons}>
            <Button
                onClick={() => setShowDeleteModule(true)}
                buttonClass={'deleteButton'}>
                Delete
            </Button>
            <Button
                onClick={() => setShowUpdateModule(true)}
                buttonClass={'regularButton'}
            >
                Update
            </Button>
            <NavLink to={`/cards/cards/${dataItem._id}`}>
                <Button buttonClass={'regularButton'}>
                    Show cards
                </Button>
            </NavLink>
            <NavLink to=''>
                <Button buttonClass={'regularButton'}>
                    Learn
                </Button>
            </NavLink>
            <Button buttonClass={'regularButton'}>Add to basket</Button>
        </div>
        <UpdatePackModule showModule={showUpdateModule}
                          packName={dataItem.name}
                          ChangePack={onChangePack}
                          backgroundOnClick={() => setShowUpdateModule(false)}
        />
        <DeleteModule
            showModule={showDeleteModule}
            moduleName={'pack'}
            onDeletePack={onDeletePack}
            backgroundOnClick={() => {
                setShowDeleteModule(false)
            }}
        />
    </div>
}
