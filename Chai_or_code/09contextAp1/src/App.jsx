import { useState,useEffect } from 'react'
import {Route, Routes} from 'react-router-dom';
import Home from './Home';
import ThemeContext from './ThemeContext';
import Header from './Header';

function App() {

  const [name,setName] = useState(null);
 useEffect(() => {
    setName('babal');
  }, []); 
  return (
    <>
    <ThemeContext.Provider value={[name,setName]}>
      <Header/>
      <ThemeProvider>
        <Header/>
        </ThemeProvider>
      <Routes>
        
        <Route path='/' element={<Home/>}/>
      </Routes>
      
    </ThemeContext.Provider>
      
     
    </>
  )
}

export default App
