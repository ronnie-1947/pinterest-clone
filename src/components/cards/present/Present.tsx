import styles from './Present.module.scss'
import React from 'react'

interface Props {
    url: string
}


const Present = ({ url }: Props) => {
    return (
        <img className={styles.board__img} src={url} alt="img" />
    )
}

export default Present
