// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Header from './components/header/Header';
import Home from './components/main/Home';
import Project from './components/projects/Project';
import './App.css'

function App() {

  return (
    <>
      <Header />
      <div className="now-header">
        <Home />
        <Project />
      </div>
    </>
  )
}

export default App
