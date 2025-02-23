/* eslint-disable react-refresh/only-export-components */
// src\App.jsx
import { createContext, useState } from 'react'
import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Projects from './Pages/Projects/Projects'
import { ScrollToTop } from 'scroll-totop-button'


export const ThemeContext = createContext(null)
export const TotalProjectsContext = createContext(null);

function App() {

  const [isDark, setIsDark] = useState(false)
  const [totalProject, setTotalProject] = useState(0)

  return (
    <>
      <ThemeContext.Provider value={{ isDark, setIsDark }}>
        <Header />
        <TotalProjectsContext.Provider value={{ totalProject, setTotalProject }}>
          <main>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='projects' element={<Projects />} />
            </Routes>
            <ScrollToTop
              threshold={1275}
              smooth={true}
              className='!bg-primary text-white !size-12 !rounded-lg !text-xl'
            />
          </main>
        </TotalProjectsContext.Provider>
        <Footer />
      </ThemeContext.Provider>
    </>
  )
}

export default App
