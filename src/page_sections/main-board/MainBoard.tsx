import React from 'react'
import styles from './MainBoard.module.scss'

import PinCard from '../../components/cards/Pins/Pin'

interface Props {
    pics: {
        url:string
        id:string
    }[]
}

const MainBoard = ({pics}:Props) => {
    return (
        <div className={styles.container}>
            {
                pics?.map((pic:any)=><PinCard key={pic?.id} {...pic}/>)
            }
        </div>
    )
}

export default MainBoard
