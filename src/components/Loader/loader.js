import React from 'react';
import "./loader.css"

const Loader = ({loaderState})=>{
   // const [loading , setLoading] = useState(false)
/*
    useEffect(()=>{
        if (loaderState===true){
            setLoading(true)
            setTimeout(() => {
                setLoading(false)
                console.log("probando")
            }, 1500);}
        return clearTimeout()
    },[loaderState])
*/
    return(
        <React.Fragment>
            {loaderState===true&&
                <div id="loader--wrapper">
                    <div id="loader">
                        <h2 id="loader--Title">Loading</h2>
                    </div>    
                </div>     }
        </React.Fragment>
        
    )
}

export default Loader