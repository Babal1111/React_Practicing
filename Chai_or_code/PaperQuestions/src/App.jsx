import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SimpleDataFetch from './SimpleDataFetch'
import SubmitDataApi from './SubmitDataApi'
import UseReff from './UseReff'
import UseReff2 from './UseReff2'
import StopWatch from './StopWatch'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <UseReff></UseReff> */}
    {/* <SubmitDataApi></SubmitDataApi> */}
      {/* <SimpleDataFetch></SimpleDataFetch> */}

    <StopWatch></StopWatch>
      {/* <UseReff2></UseReff2> */}
    </>
  )
} 

export default App
