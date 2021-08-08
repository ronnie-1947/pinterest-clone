import styles from './Header.module.scss'
import {Link} from 'react-router-dom'

import { Pinterest , NotificationImportant, Textsms, Face, KeyboardArrowDown, SearchSharp} from '@material-ui/icons'

interface Props {
    getImages: (query:string)=>void
    setPage: any
    setSearch:any
    search: string
}

const Header = ({getImages, search, setPage, setSearch}:Props) => {

    

    const submitHandler = (e:any)=>{
        e.preventDefault()
        if(search.length<1)return
        setPage(1)
        getImages(search)
    }

    return (
        <header className={styles.header}>
            <span className={styles.header__logoWrapper}>
                <Pinterest style={{ fontSize: '3.5rem' }} className={styles.header__logo} />
            </span>

            <Link className={styles.header__homeBtn} to='/'>Home</Link>
            <Link className={styles.header__followingBtn} to='/'>Today</Link>

            <div className={styles.header__search}>
                <span>
                    <SearchSharp className={styles.header__searchLogo} style={{fontSize: '2.5rem'}}/>
                </span>
                <form onSubmit={submitHandler}>
                    <input value = {search} 
                    onChange={(e:any)=>{
                        const regex = /^[\s\d\w]*$/
                        if(regex.test(e.target.value))setSearch(e.target.value)
                    }} 
                    type="search" placeholder="search"/>
                </form>
            </div>

            <div className={styles.header__icons}>
                <span>
                    <NotificationImportant style={{fontSize: '2rem'}} className={styles.icon}/>
                </span>
                <span>
                    <Textsms style={{fontSize: '2rem'}} className={styles.icon}/>
                </span>
                <span>
                    <Face style={{fontSize: '2rem'}} className={styles.icon}/>
                </span>
                <span>
                    <KeyboardArrowDown style={{fontSize: '2rem'}} className={styles.icon}/>
                </span>
            </div>

        </header>
    )
}

export default Header