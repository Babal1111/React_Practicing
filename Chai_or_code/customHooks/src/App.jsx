import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CurrencyConverter from './CurrencyConverter'
import Input from './Input'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CurrencyConverter></CurrencyConverter>
      <Input></Input>
    </>
  )
}

export default App
