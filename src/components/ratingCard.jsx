function Ratings({ rating = "86.0/100", tomatoRating = "97%" }) {
  return (
    <>
      <div className="ratings">
        <div className="IMDB">
          <img src="/IMDB.png" alt="IMDB" />
          <p>{rating}</p>
        </div>
        <div className="tomatoes">
          <img src="/tomatoes.png" alt="tomato" />
          <p>{tomatoRating}</p>
        </div>
      </div>
    </>
  );
}

export default Ratings;
