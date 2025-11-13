import { useContext } from "react";
import "./userp.css"
import { userglobal } from "../userinfo";



export default function USEPANEL({ props, use }) {


    const {setuser , fav} = useContext(userglobal)


    const closer = () => {
        props.current.style.display = "none";
    };


    function signoutbtn(){
        localStorage.removeItem("token")
        setuser(null)
        closer()
    }


    return (
        <div className="userpage" ref={props}>

            <div className="useppan">

                <div className="use-right">
                    <div className="realprof">
                        <img />
                        <div className="NAMail">
                            <h1>{use?.user_name || "Loading..."}</h1>
                            <p>{use?.email || ""}</p>
                        </div>
                    </div>

                    <button className="signout" onClick={signoutbtn}>
                        Sign Out
                    </button>
                </div>
                <h1 className="fav">Favorite</h1>
                <div className="use-left">
                    <div className="liksec">

                        {fav.map((movie) => (<div className="liked"> 
                            <img src={movie.movipic} alt={movie.movid}/>
                        </div>))}

                    </div>
                </div>

                <span className="aft"></span>
                <span className="befo"></span>

            </div>

            <div className="close" onClick={closer} >
                <span></span>
                <span></span>
            </div>

        </div>

    )


}