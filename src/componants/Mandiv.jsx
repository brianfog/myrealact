import "./mandiv.css"
import Content from "./CONTENT"
import React,{useEffect, useState} from "react"


function MANDIV() {

    const[mov , setmov]= useState([])

    useEffect( () => {
        fetch ("http://localhost:8000/get_movies")
        .then (res => res.json())
        .then (data => setmov(data))
    },[]);

    return (



        <main>
            {mov.map ((movie, index) => (<Content key={index} movi={movie}/>))}
        </main>
    )
}

export default MANDIV