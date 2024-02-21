import React, { useState } from "react"

//custom hook to check if user is online/offline
function useIsonline(){

    const [isonline,setIsonline] = useState(window.navigator.onLine);
    
    setInterval(()=>{
        setIsonline(window.navigator.onLine);
        console.log('5 sec');
    },5000)

    console.log(isonline);

    return isonline;

}



function App2(){
    const online = useIsonline();
    if(online==true){
        return(<>
        user online
        </>)
    }
    return(
        <>user offline</>
    )
}

export default App2