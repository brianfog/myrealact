import "./mandiv.css"
import Content from "./CONTENT"
import React, { useEffect, useState } from "react"


function MANDIV() {

    const [mov, setmov] = useState([])

    const [num, setnum] = useState(0)


    
    /*
        this is a comment
        it's supposed to be a filler
        so i can read my code easier
        better to clean your code
        than getting a headache
    */



    useEffect(() => {
        fetch("http://localhost:8000/get_movies")
            .then(res => res.json())
            .then(data => {
                setmov(data);
                setnum(Math.ceil(data.length / 4)); // number of pages
                setfilm(data.slice(0, 4));
            })
    }, []);


    
    /*
        this is a comment
        it's supposed to be a filler
        so i can read my code easier
        better to clean your code
        than getting a headache
    */


    const scrllup = () => {

        window.scrollTo({
            top: 100,
            left: 100,
            behavior: "smooth",
        });

    }


    
    /*
        this is a comment
        it's supposed to be a filler
        so i can read my code easier
        better to clean your code
        than getting a headache
    */


    const handlbt = (ins) => {
        let lims = 4;
        let mins = ins * lims;
        let maxs = mins + lims;

        setfilm(mov.slice(mins, maxs));
        setTimeout(() => {
            scrllup();
        }, 100);

    };


    
    /*
        this is a comment
        it's supposed to be a filler
        so i can read my code easier
        better to clean your code
        than getting a headache
    */
   

    const [film, setfilm] = useState([])

    
    /*
        this is a comment
        it's supposed to be a filler
        so i can read my code easier
        better to clean your code
        than getting a headache
    */

    return (



        <main>
            {film.map((movie, index) => (<Content key={index} movi={movie} />))}
            <div className="page-count">
                {Array.from({ length: num }, (_, fo) => (<button className="pagbt" onClick={() => handlbt(fo)} key={fo}>{fo + 1}</button>))}
            </div>
        </main>
    )
}

export default MANDIV