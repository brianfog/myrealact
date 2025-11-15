import './signing.css'
import React, { useContext, useEffect, useRef, useState } from 'react';
import api from '../axe';
import { userglobal } from '../userinfo';


export default function SIGNER() {
    


    const [signinname, setnamelog] = useState('')

    const [signinpass, setpasslog] = useState('')

    const [signupemail, setemailsign] = useState('')

    const [signuppass, setpassign] = useState('')

    const [signupcon, setpasscon] = useState('')

    const [signupname, setupname] = useState('')

    const [tokie , settok] = useState( localStorage.getItem("token") || null)


    const {user ,setuser , sinp} = useContext(userglobal);


    /*
        signing in the user
        requires a function
        that sends user data
        if data was confirmed
        we get a respond
        to continue the process
    */


    function signpost(e) {
        e.preventDefault();
        api.post("/signin", { "useremail": signinname, "userpass": signinpass })
            .then(res => { if (res)  {
                localStorage.setItem("token" , res.data.token);
                settok(res.data.token);
            }})
            .catch(error => console.error(error))


        

        setTimeout(() => {
            closer()
            window.location.reload();
        }, 800);
        
    }


    
    /*
        this is a comment
        it's supposed to be a filler
        so i can read my code easier
        better to clean your code
        than getting a headache
    */


    async function signupost(e) {
        e.preventDefault();
        await api.post("/signup", { "username": signupname, "useremailnew": signupemail, "userpass": signuppass })
            .then(res => {
                if (res) {
                    localStorage.setItem("token",res.data.token);
                    settok(res.data.token);
                }
            })
            .catch(error => console.error(error))
        
        setTimeout(() => {
            closer()
            window.location.reload();
        }, 800);
           
    }


    
    /*
        this is a comment
        it's supposed to be a filler
        so i can read my code easier
        better to clean your code
        than getting a headache
    */


    const slirose = useRef(null);
    const slibtn = useRef(null);


    
    /*
        this is a comment
        it's supposed to be a filler
        so i can read my code easier
        better to clean your code
        than getting a headache
    */
    


    const closer = () => {
        sinp.current.style.display = "none";
    };


    
    /*
        this is a comment
        it's supposed to be a filler
        so i can read my code easier
        better to clean your code
        than getting a headache
    */



    useEffect(() => {

         if (localStorage.getItem("token")){
            settok(localStorage.getItem("token"));
            sinp.current.style.display= `none`;
        }

    },[settok])

    
    /*
        this is a comment
        it's supposed to be a filler
        so i can read my code easier
        better to clean your code
        than getting a headache
    */

    useEffect(() => {

        if (tokie) {
            api.post("/tokverify", {"token" : tokie})
                .then(res => {
                    setuser(res.data);
                    console.log(user);
                })
                .catch(error => console.error(error))

               
        }


        
    /*
        this is a comment
        it's supposed to be a filler
        so i can read my code easier
        better to clean your code
        than getting a headache
    */


        if (!slirose.current || !slibtn.current) return;

        let signsli = false;

        const slifunc = () => {
            signsli = !signsli;
            slirose.current.style.left = signsli ? "50%" : "0%";
            slibtn.current.innerText = signsli ? "Sign Up" : "Sign In";
        };


        const btn = slibtn.current;
        btn.addEventListener("click", slifunc);

        return () => btn.removeEventListener("click", slifunc);
    }, [tokie, slirose, slibtn]);


    
    /*
        this is a comment
        it's supposed to be a filler
        so i can read my code easier
        better to clean your code
        than getting a headache
    */


    return (
        <div className='signpage' ref={sinp}>
            <div className='signdiv'>
                <div className="signin">
                    <form onSubmit={signpost}>
                        <div className='signindiv'>
                            <label>Email Address</label>
                            <input type="text" placeholder='Your Email' value={signinname} onChange={(e) => setnamelog(e.target.value)} />
                            <label>Password</label>
                            <input type="password" placeholder='Your Password' value={signinpass} onChange={(e) => setpasslog(e.target.value)} />
                        </div>
                        <button type='submit'>Submit</button>
                    </form>
                </div>
                <div className="signup">
                    <form onSubmit={signupost}>
                        <div className='signupdiv'>
                            <label>User Name</label>
                            <input type="text" placeholder='Your User Name' value={signupname} onChange={(e) => setupname(e.target.value)} />
                            <label>Email Address</label>
                            <input type="text" placeholder='Your Email' value={signupemail} onChange={(e) => setemailsign(e.target.value)} />
                            <label>Password</label>
                            <input type="password" placeholder='Your Password' value={signuppass} onChange={(e) => setpassign(e.target.value)} />
                            <label>Confirm Password</label>
                            <input type="password" placeholder='Confirm Your Password' value={signupcon} onChange={(e) => setpasscon(e.target.value)} />
                        </div>
                        <button type='submit'>Submit</button>
                    </form>
                </div>
                <div className="rosi" ref={slirose}>
                    <button ref={slibtn}> Sign In </button>
                </div>
            </div>
            <div className="close" onClick={closer} >
                <span></span>
                <span></span>
            </div>
        </div>
    )
}