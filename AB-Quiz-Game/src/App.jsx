import './App.scss'
import AB_Background from "./assets/img/au-bureau-bg.png"
import AB_Logo from "./assets/img/au-bureau-logo.png"

import Card from "./assets/modules/Card/Card.jsx"

function App() {

  return (
    <>
      <img className='background' src={AB_Background} alt="" />
      <div className='main'>
        <Card/>
      </div>

      <div className="logoSection">
        <img className='logo' src={AB_Logo} alt="" />
        <p className='name'>Flins</p>
      </div>
    </>
  )
}

export default App
