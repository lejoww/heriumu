import { useState } from 'react'
import Header from './components/Header'
import LoadingDock from './components/LoadingDock'

function App() {
  return (
    <div className="App">
      <Header/>
      <LoadingDock/>
    </div>
  )
}

export default App
