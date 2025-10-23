/* eslint-disable no-undef */
import "./content.css"

function Content({movi}) {

    return (
        <div className="content">
            <div className="c-title">
                <h1>{movi.NAME}</h1>
            </div>
            <div className="main-content">
                <div className="genre">
                    <p>Score : <a>{movi.SCORE}</a></p>
                    <p>Country : <a>{movi.COUNTRY}</a></p>
                    <p>Language : <a>{movi.LANGUAGE}</a></p>
                    <p>Duration : <a>120 min</a></p>
                </div>
                <div className="plot">
                    <p> {movi.PLOT}</p>
                </div>
                <div className="picture">
                    <img src={movi.IMGADD} />
                </div>
                <button>Watch</button>
            </div>
        </div>
    )
}


export default Content