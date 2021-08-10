import React from 'react'
import styles from './Pin.module.scss'
interface Props {
    url: string
    id: string
    regular_url:string
    description: string
    presentHandler: (url:string)=>void
}


const Pin = ({url, regular_url, presentHandler}:Props) => {

    return (
        <div onClick={()=>presentHandler(regular_url)} className={styles.container}>
            <img
                src={url}
                alt="pin img"
            />
        </div>
    )
}

export default Pin
