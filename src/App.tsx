import {useState, useEffect} from 'react'
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
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)

  const getImages = (query:string)=>{
    unsplash.get(`/search/photos?page=${page}`, {
      params: {
        query,
        per_page: 50
      }
    }).then((res:any)=>{
      const pictures : Pic[] = res?.data?.results?.map((img:any)=>({
        url: img?.urls?.small,
        id: img?.id,
        description: img?.description
      }))

      if(page === 1){
        setPics([...pictures])
        return
      }
      
      setPics([...pics, ...pictures])
    })
  }

  useEffect(()=>{
    getImages('paris')
  },[])

  return (
    <div className="App">
      <Header search={search} setPage={setPage} setSearch={setSearch} getImages={getImages}/>
      <MainBoard pics={pics}/>
    </div>
  )
}

export default App
