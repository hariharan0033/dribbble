import React from 'react'
import NavBarComponent from './components/NavBarComponent/NavBarComponent';
import './App.css'
import MenuBarComponent from './components/MenuBarComponent/MenuBarComponent';
import CardContainerComponent from './components/CardContainerComponent/CardContainerComponent';
const App = () => {
  return (
    <React.Fragment>
      <NavBarComponent/>
      <MenuBarComponent/>
      <CardContainerComponent/>
    </React.Fragment>
    )
}

export default App