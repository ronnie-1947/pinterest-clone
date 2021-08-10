import { useState } from 'react'
import styles from './Header.module.scss'
import { Link } from 'react-router-dom'

import unsplash from '../../lib/axios'
import { Pinterest, NotificationImportant, Textsms, Face, KeyboardArrowDown, SearchSharp } from '@material-ui/icons'

interface Props {
    setPage: any
    setPics:any
    setHiddenSearch:any
}

interface Pic {
    url: string
    id: string
    description: string
}

const Header = ({ setPage, setPics, setHiddenSearch }: Props) => {

    const [search, setSearch] = useState('')

    const getImages = () => {
        unsplash.get(`/search/photos?page=1`, {
            params: {
                query: search?search:'random',
                per_page: 30
            }
        }).then((res: any) => {
            const pictures: Pic[] = res?.data?.results?.map((img: any) => ({
                url: img?.urls?.small,
                id: img?.id,
                description: img?.description,
                regular_url: img?.urls?.regular
            }))
            setPics([...pictures])
            setHiddenSearch(search)
            setPage(1)
        }).catch(error=>{

        })
    }

    const submitHandler = (e: any) => {
        e.preventDefault()
        getImages()
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
                    <SearchSharp className={styles.header__searchLogo} style={{ fontSize: '2.5rem' }} />
                </span>
                <form onSubmit={submitHandler}>
                    <input value={search}
                        onChange={(e: any) => {
                            const regex = /^[\s\d\w]*$/
                            if (regex.test(e.target.value)) setSearch(e.target.value)
                        }}
                        type="search" placeholder="search" />
                </form>
            </div>

            <div className={styles.header__icons}>
                <span>
                    <NotificationImportant style={{ fontSize: '2rem' }} className={styles.icon} />
                </span>
                <span>
                    <Textsms style={{ fontSize: '2rem' }} className={styles.icon} />
                </span>
                <span>
                    <Face style={{ fontSize: '2rem' }} className={styles.icon} />
                </span>
                <span>
                    <KeyboardArrowDown style={{ fontSize: '2rem' }} className={styles.icon} />
                </span>
            </div>

        </header>
    )
}

export default Header