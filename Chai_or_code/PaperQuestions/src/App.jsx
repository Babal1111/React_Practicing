import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SimpleDataFetch from './SimpleDataFetch'
import SubmitDataApi from './SubmitDataApi'
import UseReff from './UseReff'
import UseReff2 from './UseReff2'
import StopWatch from './StopWatch'
import Footer from './components/Footer'
import Home from './components/Home'
import Header from './components/Header'
import Uncontrolled from './components/Ucontrolled'
import Fetch from './Fetch'
import Hotel from './Hotel'
import w1 from './assets/wrestler/w1.jpg'
import w2 from './assets/wrestler/w2.jpg'
import w3 from './assets/wrestler/w3.jpg'
import Wrestler from './Wrestler'
import Axios from '../Axios'
import Countdown from './Countdown'
import Post from '../Post'
import FormValidation from './FormValidation'
import Theme from './Theme'
import Redux from './Redux'

function App() {
  const [count, setCount] = useState(0)

  const wrestlerData=[
    {
      id:1,
      name:"John Cena",
      img:w1
    },
    {
      id:2,
      name:"Randy Orton",
      img:w2
    },
    {
      id:3,
      name:"Roman Reigns",
      img:w3
    }
  ]
  
  

  const hotelData={
  name: "Hotel Name",
  address: "Hotel Address",
  room: {
    room1: { type: "executive", price: 1000 },
    room2: { type: "deluxe", price: 1200 },
  },
};
  return (
    <>
    {/* <UseReff></UseReff> */}
    {/* <SubmitDataApi></SubmitDataApi> */}
      {/* <SimpleDataFetch></SimpleDataFetch> */}

    {/* <StopWatch></StopWatch> */}
      {/* <UseReff2></UseReff2> */}

      {/* <Header></Header>
      <Home></Home>
      <Footer></Footer> */}
      {/* <Fetch></Fetch> */}
      {/* <Uncontrolled/> */}
      {/* <Hotel data={hotelData}></Hotel> */}

      {/* <Wrestler wrestlerData={wrestlerData}></Wrestler> */}

{/* <Countdown></Countdown> */}
      {/* <Axios></Axios> */}
{/* <FormValidation></FormValidation>
      <Post></Post> */}
      <Theme></Theme>
      <Redux></Redux>
    </>
  )
} 

export default App
