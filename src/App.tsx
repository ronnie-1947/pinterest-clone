import React from 'react'
import './App.scss'

import Header from './page_sections/header/Header'
import MainBoard from './page_sections/main-board/MainBoard'

const App = () => {
  return (
    <div className="App">
      <Header/>
      <MainBoard/>
    </div>
  )
}

export default App
