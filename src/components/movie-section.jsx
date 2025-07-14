import MovieCard from "./MovieCard";

function MovieSection({ heading }) {
  return (
    <section className="movie-section-wrapper">
      <div className="movie-section-header">
        <h1>{heading}</h1>
        <span className="see-more">See more &gt;</span>
      </div>

      <div className="movie-scroll-area">
        <img src="/left-btn.png" alt="left" className="nav-arrow" />

        <div className="movie-cards">
          <MovieCard
            Imgsrc="public/Poster2.png"
            text="TV SERIES"
            year="USA, 2016 - Current"
            name="Stranger Things"
            rating="86.0/100"
            tomato="97%"
            genre="Action, Adventure, Horror"
          />
          <MovieCard
            Imgsrc="public/Poster3.png"
            year="USA, 2005"
            name="Batman Begins"
            rating="82.0/100"
            tomato="70%"
            genre="Action, Adventure"
          />
          <MovieCard
            Imgsrc="public/Poster4.png"
            year="USA, 2018"
            name="Spider-Man : Into The Spider Verse"
            rating="84.0/100"
            tomato="87%"
            genre="Animation, Action, Adventure"
          />
          <MovieCard
            Imgsrc="public/Poster5.png"
            year="USA, 2017"
            name="Dunkirk"
            rating="78.0/100"
            tomato="94%"
            genre="Action, Drama, History"
          />
        </div>

        <img src="/right-btn.png" alt="right" className="nav-arrow" />
      </div>
    </section>
  );
}

export default MovieSection;
