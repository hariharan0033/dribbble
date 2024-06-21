import React from 'react'
import NavBarComponent from './components/NavBarComponent/NavBarComponent';
import './App.css'
import MenuBarComponent from './components/MenuBarComponent/MenuBarComponent';
const App = () => {
  return (
    <React.Fragment>
      <NavBarComponent/>
      <MenuBarComponent/>
    </React.Fragment>
    )
}

export default App