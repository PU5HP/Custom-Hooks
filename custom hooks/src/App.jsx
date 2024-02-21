import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [render,setRender] = useState(true);
  
  useEffect(()=>{
    setTimeout(()=>{
      setRender(false)
    },10000)
  },[])

  return (
    <>
     {render ? <MyComponent1/> :<div><MyComponent></MyComponent></div>}
    </>
  )
}


function MyComponent1(){
  
  useEffect(()=>{
    console.log('inside use effect');

    return ()=>{
      console.log("component unmounted")
    }
  },[])

  return(
    <>
    <div>MyComponent1</div>
    </>
  )


}
function MyComponent(){

  const [count,setCount] = useState(0);

  function incrementCount(){
    setCount(count+1);
  }
  
  return(
    <>
    <p>{count}</p>
    <button onClick={incrementCount}>click here to increment</button>
    </>
  )

}


export default App
