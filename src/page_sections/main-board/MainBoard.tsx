import React from 'react'
import styles from './MainBoard.module.scss'
import './Masonry.scss'

import PinCard from '../../components/cards/Pins/Pin'
import Masonry from 'react-masonry-css'

interface Props {
    pics: {
        url: string
        id: string
    }[]
}

const breakpointColumnsObj = {
    default: 6,
    1540:5,
    1100: 4,
    940:3,
    700: 2,
    500: 1
}

const MainBoard = ({ pics }: Props) => {
    return (
        <div className={styles.container}>
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className='my-masonry-grid'
                columnClassName='my-masonry-grid_column'
            >
                {
                    pics?.map((pic: any, indx: number) => <PinCard key={indx} {...pic} />)
                }
            </Masonry>
        </div>
    )
}

export default MainBoard
