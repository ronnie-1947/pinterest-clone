import React, {useState} from 'react'
import styles from './MainBoard.module.scss'
import './Masonry.scss'

import {Backdrop} from '@material-ui/core'
import PinCard from '../../components/cards/Pins/Pin'
import Masonry from 'react-masonry-css'
import PresentBoard from '../../components/cards/present/Present'

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
    600: 2,
}

const MainBoard = ({ pics }: Props) => {

    const [backdrop, setBackdrop] = useState(false)
    const [imgUrl, setImgUrl] = useState('')

    const closeBackdrop = ()=>{
        setBackdrop(false)
    }
    
    const handlePresent = (url:string)=>{
        setBackdrop(true)
        setImgUrl(url)
    }

    return (
        <div className={styles.container}>
            <Backdrop style={{zIndex:10}} open={backdrop} onClick={closeBackdrop}>
                <PresentBoard url={imgUrl}/>
            </Backdrop>
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className='my-masonry-grid'
                columnClassName='my-masonry-grid_column'
            >
                {
                    pics?.map((pic: any, indx: number) => <PinCard presentHandler={handlePresent} key={indx} {...pic} />)
                }
            </Masonry>
        </div>
    )
}

export default MainBoard
