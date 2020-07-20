import React from 'react'
import styles from './loader.module.css'

const Loader = () => {
    return <div className={styles.position}>
        <div className={styles.loader}/>
        <div>Loading...</div>
    </div>
}

export default Loader
