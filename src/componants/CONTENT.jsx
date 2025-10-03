import "./content.css"

function Content() {

    return (
        <div className="content">
            <div className="c-title">
                <h1>CONTENT TITLE</h1>
            </div>
            <div className="main-content">
                <div className="genre">
                    <p>Score : <a>7.8</a></p>
                    <p>Country : <a>USA</a></p>
                    <p>Language : <a>English</a></p>
                    <p>Duration : <a>120 min</a></p>
                </div>
                <div className="plot">
                    <p> This is the long plot of the movie thats gonna be placed here . this movie belongs to the hosting server</p>
                </div>
                <div className="picture">
                    <img src="" />
                </div>
                <button>Watch</button>
            </div>
        </div>
    )
}


export default Content