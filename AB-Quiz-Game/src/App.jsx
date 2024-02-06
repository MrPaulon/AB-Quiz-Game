import './App.scss'
import AB_Background from "../public/au-bureau-bg.png"
import AB_Logo from "../public/au-bureau-logo.png"

import Card from "./assets/modules/Card/Card.jsx"

function App() {

  return (
    <>
      <img className='background' src={AB_Background} alt="" />
      <div className='main'>

        <div className="CardSection">

        <Card/>

        </div>

        <div className="LogoSection">
          <img className='logo' src={AB_Logo} alt="" />
          <h5 className='name'>Flins</h5>
        </div>
      </div>
    </>
  )
}

export default App
