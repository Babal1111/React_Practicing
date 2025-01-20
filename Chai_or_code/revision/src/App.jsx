import { useState } from 'react'
import Toggle from './components/toggle'

import './App.css'
import Counter from './components/counter'
import Stopwatch from './components/Stopwatch'
import UseEffect from './components/UseEffect'
import UseReff from './components/UseReff'
import Props1 from './components/Props1'

function App() {
  const data1= [{
    id:1,
    product:"apple",
    price:100
  },{
    id:2,
    product:"banana",
    price:200
  },{
    id:3,
    product:"aloo",
    price:300
  }]

  return (
    <>
    <Toggle />
    <Counter></Counter>
    <Stopwatch></Stopwatch>
    <UseEffect></UseEffect>
    <UseReff></UseReff>
    <Props1 data={data1}></Props1>

</>
  )
}

export default App
