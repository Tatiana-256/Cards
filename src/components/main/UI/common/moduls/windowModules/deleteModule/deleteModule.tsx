import React from 'react';
import {Module} from "../UniversalModule";
import Button from "../../../button/Button";
import styles from '../updatePackModule/updatePack.module.css'


type PropsType = {
    showModule: boolean
    moduleName: string
    onDeletePack: () => void
    backgroundOnClick: () => void

}

export const DeleteModule = (props: PropsType) => {

    return <Module height={300}
                   width={400}
                   show={props.showModule}
                   backgroundOnClick={props.backgroundOnClick}
                   enableBackground={true}
    >
        <div className={styles.window} style={{height: '100px'}}>
            <div style={{color: 'black'}}>Delete {props.moduleName}?</div>

            <div className={styles.buttons}>
                <Button
                    buttonClass={'regularButton'}
                    onClick={props.onDeletePack}>
                    Delete
                </Button>
                <Button buttonClass={'deleteButton'}
                        onClick={props.backgroundOnClick}>
                    Cancel
                </Button>
            </div>
        </div>
    </Module>

}
