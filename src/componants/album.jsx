import "./ALBUM.css"
import Reacts, { useRef, useEffect, useContext } from "react";
import SIGNER from "./Sign"
import { userglobal } from "../userinfo";
import USEPANEL from "./userpanel";
import api from "../axe";
import usericon from '../assets/useicon.png'


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
            api.post("/likget", { "email": user.email })
                .then(res => { if (res) { setfav(res.data.favs) } })
                .catch(error => console.error(error))
        }
    }


    /*
        this is a comment
        it's supposed to be a filler
        so i can read my code easier
        better to clean your code
        than getting a headache
    */

    function getSlideLimit() {
        const w = window.innerWidth;

        if (w < 480) return 120;     // phones
        if (w < 768) return 170;    // tablets
        if (w < 1024) return 280;   // small laptops
        return 300;                // desktop
    }

    /*
        this is a comment
        it's supposed to be a filler
        so i can read my code easier
        better to clean your code
        than getting a headache
    */
    const sliref = useRef(null);

    const pos = useRef(0);        // saved position
    const startX = useRef(0);     // pointer start
    const dragging = useRef(false);
    const limit = useRef(getSlideLimit());
    const userpanel = useRef(null)





    /*
        this is a comment
        it's supposed to be a filler
        so i can read my code easier
        better to clean your code
        than getting a headache
    */

    useEffect(() => {

        const el = sliref.current;
        if (!el) return;

        const updateLimit = () => {
            limit.current = getSlideLimit();
            pos.current = Math.max(
                -limit.current,
                Math.min(limit.current, pos.current)
            );
            el.style.transform = `translateX(${pos.current}px)`;
        };

        const onDown = (e) => {
            dragging.current = true;
            startX.current = e.clientX;
            el.setPointerCapture(e.pointerId);
        };

        const onMove = (e) => {
            if (!dragging.current) return;

            const delta = e.clientX - startX.current;
            let next = pos.current + delta;

            if (next > limit.current) {
                next =
                    limit.current +
                    (next - limit.current) * 0.15;
            }
            if (next < -limit.current) {
                next =
                    -limit.current +
                    (next + limit.current) * 0.15;
            }

            el.style.transform = `translateX(${next}px)`;
        };

        const onUp = () => {
            if (!dragging.current) return;
            dragging.current = false;

            const matrix = new DOMMatrixReadOnly(
                getComputedStyle(el).transform
            );
            pos.current = Math.max(
                -limit.current,
                Math.min(limit.current, matrix.m41)
            );

            el.style.transition = "transform 0.25s ease";
            el.style.transform = `translateX(${pos.current}px)`;

            requestAnimationFrame(() => {
                el.style.transition = "";
            });
        };

        el.addEventListener("pointerdown", onDown);
        window.addEventListener("pointermove", onMove);
        window.addEventListener("pointerup", onUp);
        window.addEventListener("resize", updateLimit);

        return () => {
            el.removeEventListener("pointerdown", onDown);
            window.removeEventListener("pointermove", onMove);
            window.removeEventListener("pointerup", onUp);
            window.removeEventListener("resize", updateLimit);
        };
    }, []);


    /*
        this is a comment
        it's supposed to be a filler
        so i can read my code easier
        better to clean your code
        than getting a headache
    */

    const { user, sinp, setfav } = useContext(userglobal);


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

                    <div className="wholeslide">
                        <div className="slide" ref={sliref}>
                            {
                                Array.from({ length: 9 }, (_, i) => (
                                    <div className="sitem" key={i}>
                                        <img src="" />
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    <div className="user-pf-img">
                        <img src={usericon} />
                    </div>
                </div>

            </div>
        </>
    )
}