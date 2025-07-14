import LikeButton from "./likeButton";
import Ratings from "./ratingCard";

function MovieCard({ text, year, name, rating, tomato, genre, Imgsrc }) {
  return (
    <div className="movie-card">
      <div className="movie-thumbnail">
        <img src={Imgsrc} alt={name} className="poster-img" />

        <div className="card-top">
          <span className="movie-tag">{text}</span>
          <div className="like-btn">
            <LikeButton />
          </div>
        </div>
      </div>

      <div className="movie-info">
        <p className="movie-year">{year}</p>
        <h2 className="movie-name">{name}</h2>
        <Ratings rating={rating} tomatoRating={tomato} />
        <p className="movie-genre">{genre}</p>
      </div>
    </div>
  );
}

export default MovieCard;
