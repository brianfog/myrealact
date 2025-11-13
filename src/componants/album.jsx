import "./ALBUM.css"
import Reacts, { useRef, useEffect, useContext } from "react";
import SIGNER from "./Sign"
import { userglobal } from "../userinfo";
import USEPANEL from "./userpanel";


    /*
        this is a comment
        it's supposed to be a filler
        so i can read my code easier
        better to clean your code
        than getting a headache
    */

export default function Album() {


    /*
        this is a comment
        it's supposed to be a filler
        so i can read my code easier
        better to clean your code
        than getting a headache
    */


    const signapp = () => {
        if (!user) {
            sinp.current.style.display = `flex`;
        } else {
            userpanel.current.style.display = `flex`;
        }
    }

    
    /*
        this is a comment
        it's supposed to be a filler
        so i can read my code easier
        better to clean your code
        than getting a headache
    */

    const userpanel = useRef(null)

    const sliref = useRef(null)


    
    /*
        this is a comment
        it's supposed to be a filler
        so i can read my code easier
        better to clean your code
        than getting a headache
    */



    useEffect(() => {

        const slis = sliref.current;
        let drag = false;
        let starx = 0;
        let subt = 0;
        let sumb = 0;

        
    /*
        this is a comment
        it's supposed to be a filler
        so i can read my code easier
        better to clean your code
        than getting a headache
    */

        const pendown = (e) => {
            starx = e.clientX;
            drag = true;
        };

        const penmove = (e) => {
            if (drag) {
                subt = e.clientX - starx;
                let sup = subt + sumb;
                if (sup > 100) sup = 120;
                if (sup < -100) sup = -120;
                slis.style.transform = `translateX(${sup}px)`;
            }
        };

        const penup = () => {
            drag = false;
            sumb += subt;

            subt = 0;

        };

        
    /*
        this is a comment
        it's supposed to be a filler
        so i can read my code easier
        better to clean your code
        than getting a headache
    */

        slis.addEventListener("pointerdown", pendown);

        window.addEventListener("pointermove", penmove);

        window.addEventListener("pointerup", penup);

        return () => {
            slis.removeEventListener("pointerdown", pendown);

            window.removeEventListener("pointermove", penmove);

            window.removeEventListener("pointerup", penup);
        };



    }, [])

    
    /*
        this is a comment
        it's supposed to be a filler
        so i can read my code easier
        better to clean your code
        than getting a headache
    */

    const { user, sinp } = useContext(userglobal);

    
    /*
        this is a comment
        it's supposed to be a filler
        so i can read my code easier
        better to clean your code
        than getting a headache
    */

    return (
        <>
            <SIGNER />
            <USEPANEL props={userpanel} use={user} />
            <div className="albomwhole">
                <div className="user-pf">
                    <div className="user-option">
                        <button onClick={signapp}> Profile </button>
                        <button> User Manual</button>
                        <button> Social Media</button>
                    </div>
                    <img src="" />
                </div>
                <div className="wholeslide">
                    <div className="slide" ref={sliref}>
                        <div className="sitem">
                            <img src="" />
                        </div>
                        <div className="sitem">
                            <img src="" />
                        </div>
                        <div className="sitem">
                            <img src="" />
                        </div>
                        <div className="sitem">
                            <img src="" />
                        </div>
                        <div className="sitem">
                            <img src="" />
                        </div>
                        <div className="sitem">
                            <img src="" />
                        </div>
                        <div className="sitem">
                            <img src="" />
                        </div>
                        <div className="sitem">
                            <img src="" />
                        </div>
                    </div>
                </div>
                <div className="albom">
                    <div className="one">
                    </div>
                    <div className="two">
                    </div>
                    <div className="three">
                    </div>
                    <div className="four">
                    </div>
                </div>

            </div>
        </>
    )
}