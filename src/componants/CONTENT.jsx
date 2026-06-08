
import "./content.css"
import like from "../assets/heart-icon(2).svg"
import unlike from "../assets/heart-line-icon(1).svg"
import { useContext, useEffect, useRef, useState } from "react"
import api from "../axe"
import { userglobal } from "../userinfo"

function Content({ movi }) {

    const likebtn = useRef()
    const unlikebtn = useRef()
    const { user, fav } = useContext(userglobal)
    const [pushed, setpush] = useState(false)



    /*
        this is a comment
        it's supposed to be a filler
        so i can read my code easier
        better to clean your code
        than getting a headache
    */



    async function handlelike() {
        if (user) {
            setpush(!pushed);

            await api.post("/likeadd", {
                "useremail": user.email,
                "movie_id": movi.NAME,
                "liked": !pushed,
                "movie_pic": movi.IMGADD
            })

        }
    }




    /*
        this is a comment
        it's supposed to be a filler
        so i can read my code easier
        better to clean your code
        than getting a headache
    */


    useEffect(() => {
        if (fav) {
            if (fav.includes({ "movid": movi.NAME, "movipic": movi.IMGADD })) {
                setpush(true);
            }
        }
    }, [])



    useEffect(() => {


        if (!pushed) {
            likebtn.current.style.display = `none`;
            unlikebtn.current.style.display = `flex`;
        } else {
            likebtn.current.style.display = `flex`;
            unlikebtn.current.style.display = `none`;
        }



    }, [pushed])



    /*
        this is a comment
        it's supposed to be a filler
        so i can read my code easier
        better to clean your code
        than getting a headache
    */


    return (
        <div className="content">
            <div className="c-title">
                <h1>{movi.NAME}</h1>
                <button className="like-icon" onClick={handlelike}>
                    <img src={like} ref={likebtn} alt="like" />
                    <img src={unlike} ref={unlikebtn} />
                </button>
            </div>
            <div className="main-content">
                <div className="picture">
                    <img src={movi.IMGADD} />
                </div>
                <div className="genre">
                    <p>Score : <a>{movi.SCORE}</a></p>
                    <p>Country : <a>{movi.COUNTRY}</a></p>
                    <p>Language : <a>{movi.LANGUAGE}</a></p>
                    <p>Duration : <a>120 min</a></p>
                </div>
                <div className="plot">
                    <p> {movi.PLOT}</p>
                </div>
                <button>Watch</button>
            </div>
        </div>
    )
}


export default Content