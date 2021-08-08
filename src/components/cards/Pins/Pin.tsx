import React from 'react'
import styles from './Pin.module.scss'

interface Props {
    url: string
    id: string
    description: string
}


const Pin = ({url, id, description}:Props) => {

    return (
        <div className={styles.container}>
            <img
                src={url}
                alt="pin img"
            />
        </div>
    )
}

export default Pin
