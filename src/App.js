import React, { useContext } from 'react'
import ThemeContextProvider, { ThemeContext } from './context/ThemeContext'
import Interface from './components/Interface'




const App = () => {
  return (
    <div className='App'  >
    <ThemeContextProvider>
      <Interface/>
    </ThemeContextProvider>
    </div>
  )
}

export default App