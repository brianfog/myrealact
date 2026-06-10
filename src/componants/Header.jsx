import { useRef } from "react";
import './header.css';

function Header() {


    const ham = useRef(null);

    const head_exp = useRef(null);

    const menu_height = useRef(null);

    let swc = false;

    const header_expantion = () => {


        if (menu_height.current && ham.current && head_exp.current) {

            swc = !swc;

            const menu_boundry = menu_height.current.getBoundingClientRect();

            ham.current.style.tranform = swc ? `rotate(90deg)` : `rotate(0deg)`;

            head_exp.current.style.height = swc ? `${120 + menu_boundry.height}px` : `120px`;


        }


    }


    return (
        <header ref={head_exp}>
            <div className="nav">
                <div className="logo">
                    <a href="#">MOVIE.LAND</a>
                </div>
                <div className="search-sec">
                    <div className="Search-input">
                        <input type="text" placeholder="Search" />
                        <button>GO</button>
                    </div>
                </div>
                <div className="menu" ref={menu_height}>
                    <ul className="list-items">
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
            </div>
            <div className="hamb" ref={ham} onClick={header_expantion}>
                <div className="hamb-container">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </header>
    );
}

export default Header