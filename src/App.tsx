import { useState, useEffect } from 'react'
import './App.scss'

import Header from './page_sections/header/Header'
import MainBoard from './page_sections/main-board/MainBoard'

import unsplash from './lib/axios'

interface Pic {
  url: string
  id: string
  description: string
}

const App = () => {

  const [pics, setPics] = useState<any>([])
  const [hiddenSearch, setHiddenSearch] = useState('random')
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)
  const [frst, setFrst] = useState(true)


  useEffect(() => {

    (async function () {

      if (!frst) return
      setLoading(true)

      const result = await unsplash.get(`/search/photos?page=1`, {
        params: {
          query: hiddenSearch.length > 0 ? hiddenSearch : 'random',
          per_page: 50
        }
      })

      const pictures: Pic[] = result?.data?.results?.map((img: any) => ({
        url: img?.urls?.small,
        id: img?.id,
        regular_url: img?.urls?.regular,
        description: img?.description
      }))

      setPics([...pictures])
      setFrst(false)
      setLoading(false)
    
    }())

  }, [setLoading, frst, hiddenSearch, setPics])


  useEffect(() => {
    window.onscroll = async () => {
      
      if (loading) return
      if (window.innerHeight + document.documentElement.scrollTop > document.documentElement.offsetHeight - 600) {

        setLoading(true)

        const result = await unsplash.get(`/search/photos?page=${page + 1}`, {
          params: {
            query: hiddenSearch.length > 0 ? hiddenSearch : 'random',
            per_page: 50
          }
        })

        const pictures: Pic[] = result?.data?.results?.map((img: any) => ({
          url: img?.urls?.small,
          regular_url: img?.urls?.regular,
          id: img?.id,
          description: img?.description
        }))

        setPics([...pics, ...pictures])
        setPage(page + 1)
        setLoading(false)
      }
    }
  }, [loading, page, hiddenSearch, pics])


  return (
    <div className="App">
      <Header setHiddenSearch={setHiddenSearch} setPage={setPage} setPics={setPics} />
      <MainBoard pics={pics} />
    </div>
  )
}

export default App
