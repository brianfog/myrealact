import "./mandiv.css"
import Content from "./CONTENT"
import React, { useEffect, useRef, useState } from "react"
import movilist from "../../DataBase/MOV.Movie.json";


function MANDIV() {

    const [mov, setmov] = useState([])

    const [num, setnum] = useState(0)

    const load = useRef(null)


    /*
        this is a comment
        it's supposed to be a filler
        so i can read my code easier
        better to clean your code
        than getting a headache
    */



    useEffect(() => {
        load.current.style.display = `flex`;


        setmov(movilist);
        setnum(Math.ceil(movilist.length / 4)); // number of pages
        setfilm(movilist.slice(0, 4));

        load.current.style.display = `none`;

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
            <div className="loading" ref={load}>Loading...</div>
            {film.map((movie, index) => (<Content key={index} movi={movie} />))}
            <div className="page-count">
                {Array.from({ length: num }, (_, fo) => (<button className="pagbt" onClick={() => handlbt(fo)} key={fo}>{fo + 1}</button>))}
            </div>
        </main>
    )
}

export default MANDIV