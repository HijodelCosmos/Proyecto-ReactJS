import React, {useState, useEffect} from "react";

const Botoncito = () => {
    const [clicks, setClick] =useState(0);
    const [time,setTime]= useState("")

    const addClick = () => setClick(clicks + 1);
    const subtractClick = ()=> setClick(clicks -1);

    useEffect(()=>{
        console.log("El boton se renderizo")
    })

    useEffect(()=>{
        console.log("El botón se montó exitosamente")
        return(
            console.log("Mi elemento se va a desmontar")
        )
    },[])

    useEffect(()=>{
        setTime(Date())
    },[clicks])


    return(
        <div className="container justify-content-center text-center">
            <button type="button" className="btn btn-lg btn-success mt-5 m-3" onClick={() => {addClick()}}>
                CLIKEAME +
            </button>
            <h1 className="bg-success text-white mt-3 mb-3">Ya clickeaste {clicks} veces</h1>
            <h3 className="bg-success text-white mt-3 mb-3">{time}</h3>
            <button type="button" className="btn btn-lg btn-danger m-3" onClick={() => {subtractClick()}}>
                CLIKEAME -
            </button>
        </div>
    );
};

export default Botoncito;
