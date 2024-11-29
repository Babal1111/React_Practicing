import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Card'
import Bgchanger from './Bgchange'

function App() {
  const [count, setCount] = useState(0);

  const data ={
    price: 1000,
    address: "jalandhar cantt",
  }
  const data2 ={
    price: 21000,
    address: "ambala cantt",
  }
  return (
    <>
      {/* <h1 className='bg-green-400'p-4 rounded-xl>Tilwind test</h1>
      */}
      <Card data={data} />
      <Card data={data2} />
      
      <Bgchanger/>

    </>
  )
}

export default App
