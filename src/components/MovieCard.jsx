import LikeButton from "./likeButton";
import Ratings from "./ratingCard";
function MovieCard({text, year, name, rating, tomato, genre, Imgsrc}) {
    return(
        <>
        <div className="movie-container">
            <div className="movie-img">
                <img src={Imgsrc} alt={name} />
                <span>{text}</span>
                <LikeButton/>
            </div>
            <div className="movie-details">
                <p className="year">{year}</p>
                <h1>{name}</h1>
                <Ratings
                    rating={rating}
                    tomatoRating={tomato}/>
            </div>
            <p>{genre}</p>
        </div>
        </>
    )

}
export default MovieCard

