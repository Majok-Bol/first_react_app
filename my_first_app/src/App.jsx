// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import { useEffect, useState } from "react"

// import './App.css'
const Card=({title})=>{
    // eslint-disable-next-line no-unused-vars
    const [hasLiked,setHasLiked]=useState(false);
    // eslint-disable-next-line no-unused-vars
    const [count,setCount]=useState(0);
    //use effect for fetching data
    useEffect(()=>{
      console.log(`${title} has been liked: ${hasLiked} `);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[hasLiked]);
  
  return(<div class="card" onClick={()=>{
    setCount(count+1);
   
  }}><h2>{title}<br></br> -{count}</h2>
  <button onClick={()=>setHasLiked(!hasLiked)}>{hasLiked?'❤️':'🤍'}</button>
  </div>)
  
}

const App=()=>{

  return(
    <div className="card-container">
    <h2>Trending Movies</h2>
    <Card  title="Escape From Sobibor"/>
      <Card title="Jason Bourne"/>
        <Card  title="Star Wars"/>
          <Card title="Anaconda"/>
            <Card title="Sniper"/>
    </div>

  )
  
}
export default App