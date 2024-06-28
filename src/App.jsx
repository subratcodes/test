import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Timer from './Pages/Timer/Timer';
import Input from './Components/Inputs/Input';

function App() {
  const [count, setCount] = useState(0);
  const[darkMode,setDarkMode]=useState(true);


  function handleToggleValues(){
    setDarkMode(!darkMode);

  }

  return (<div style={{display:'flex'}}>
   <Timer></Timer>
    </div>
  )
}

export default App
