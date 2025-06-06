import { useState,useCallback,useEffect,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [length, setLength] = useState(8);
  const [nuumberAllowed,setNumberAllowed] = useState(false);
  const [charAllowed,setCharAllowed] = useState(false);
  const [password,setPassword]= useState(" ");

// useCallback take 2 parms, one function , other the array of dependencies
// ref

const passwordRef = useRef(null);

// const copyPassword=()=>{

// } noramlly bhi kAR SKTE but optemisation is gud


const copyPassword = useCallback(()=>{

passwordRef.current.select(); // bas selected dikhata
// passwordRef.current.setSelectionRange(0,100);

  window.navigator.clipboard.writeText(password)
},
[password])


const passwordGenerator= useCallback(()=>{
  let pass="";
  let str ="asdfghjklqwertyuiopzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";

  if(nuumberAllowed){
    str+="0123456789";
  }
  if(charAllowed){
    str+="!@#$%^&*()_+"
  }
  for(let i=1;i<=length;i++){
    let n = Math.floor(Math.random()*str.length + 1);
     pass = pass+str.charAt(n);         
  }
  setPassword(pass);

},[length,nuumberAllowed,charAllowed, ]);
// 2 parms is provided for optimisation

// useEffect take 2 parms, one function , other the array of dependencies

useEffect(()=>{
  passwordGenerator()
},[ length,nuumberAllowed,charAllowed,passwordGenerator])
  return (
    <>
    <center>
    <div className="w=full max-w-wd mx-auto shadow-md rounded px-4 bg-grey-700">  <h1 className='text-4xl text-center text-white mb-5'>Password Genetrator</h1>
    <input type='text' name='password' value={password} placeholder='password' 
    ref={passwordRef}
    ></input>
    <button className='ml-5 rounded ' type='submit' style={{backgroundColor:'white'}} onClick={copyPassword}>copy</button></div>
    <br></br>
    <input type="range" name='lenght' min={6} max={100}
    value={length} onChange={(e)=>{
      setLength(e.target.value)
    }}></input>
    <label style={{color:'lightgrey', }}>Length: {length}</label>
    <br></br>
    <label style={{color:"white"}}>Numbers </label>
    <input type="checkbox" 
    defaultChecked={nuumberAllowed}
    onClick={()=>{
    setNumberAllowed((prev)=>!prev)
   }}/>
    <label style={{color:"white"}}>Spl chars </label>
    <input type="checkbox" 
    defaultChecked={nuumberAllowed}
    onClick={()=>{
    setCharAllowed((prev)=>!prev)
   }}/>


  <button onClick={passwordGenerator} style={{backgroundColor:'white'}} > go</button>
     </center>
    </>
  )
}

export default App
