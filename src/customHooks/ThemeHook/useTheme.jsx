// src\customHooks\ThemeHook\useTheme.jsx

import { useContext } from "react"
import { ThemeContext } from "../../App"

const useTheme = () => {

  const dark = useContext(ThemeContext)

  const handleTheme = () => {
    dark.setIsDark(!dark.isDark)
    localStorage.setItem('isDark',!dark.isDark)
  }
  const isDark = localStorage.getItem('isDark')
  return [isDark, handleTheme]
}

export default useTheme