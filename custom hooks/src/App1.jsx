import {  useState, useEffect } from "react";
import axios from 'axios'

//https://sum-server.100xdevs.com/todos
//custom hooks start with use
//they should use internal hooks(useState, useEffect, another custom hook)
//eg: useONlineStatus, useWindowSize, useMousePosition , useInterval, useDebounce, datafetching hooks

//custom hook useTodos()
function useTodos(){
    const [todos,setTodos] = useState([]);
    const [loading,setLoading] = useState(true);

    
    useEffect(()=>{
         
        async function fetchData(){
            const response = await axios.get("https://sum-server.100xdevs.com/todos");
            setTodos(response.data.todos);
            setLoading(false);
        }
     setInterval(()=>{
        fetchData();
     },5000);

     fetchData();
    },[])
    
    return {todos,loading};
}


function App1(){
    const {todos,loading} = useTodos();
    
    if(loading){
        return(<><div>Loading...</div></>)
    }
    return (
        <>
        {todos.map(todo => <RenderComp key={todo.id} title={todo.title} description={todo.description}/>)}
        </>
      )
}

//component
function RenderComp({title,description}){
    return(
        <>
        <h3>{title}</h3>
        <h4>{description}</h4>
        </>
    )
}
export default App1;