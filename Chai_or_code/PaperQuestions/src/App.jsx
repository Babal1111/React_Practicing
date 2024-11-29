import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SimpleDataFetch from './SimpleDataFetch'
import SubmitDataApi from './SubmitDataApi'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <SubmitDataApi></SubmitDataApi>
      {/* <SimpleDataFetch></SimpleDataFetch> */}
    </>
  )
}

export default App
