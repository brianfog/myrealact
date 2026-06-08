import "./aside.css";

export default function Side_Grid ({title}){


    return(
        <aside>
            <div className="side">
                <div className="title-div">
                    <h1 className="title">{title}</h1>
                </div>
                <div className="movie-grid">
                    {
                        Array.from({length: 9},(_,i)=>(<img key={i}/>))
                    }
                </div>
                <button> All </button>
            </div>
        </aside>
    )

}