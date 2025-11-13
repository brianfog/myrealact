import { useEffect } from "react";
import './header.css';

function Header() {



    useEffect(() => {
        const ham = document.querySelector('.hamb');
        const menio = document.querySelector('.menu');
        let sw = false;

        const handler = () => {
            sw = !sw;
            ham.classList.toggle('active', sw === true);
            menio.classList.toggle('active', sw === true);
        };

        ham.addEventListener('click', handler);

        return () => ham.removeEventListener('click', handler);
    }, []);



    return (
        <header>
            <div className="nav">
                <div className="logo">
                    <a href="#">MOVIE.LAND</a>
                </div>
                <div className="search-sec">
                    <div className="search-box">
                        <input type="text" placeholder="Search" />
                        <button>GO</button>
                    </div>
                </div>
                <div className="menu">
                    <ul className="lism">
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">About</a>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                        <li>
                            <a href="#">ads</a>
                        </li>
                    </ul>
                </div>
                <div className="hamb">
                    <div>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header