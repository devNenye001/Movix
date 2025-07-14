import MovieCard from "./MovieCard";

function NewArrivals({ heading }) {
  return (
    <section className="Main-movie">
      <header>
        <h1>{heading}</h1>
        <span>See more &gt;</span>
      </header>

      <div className="movie-section">
        <img src="/left-btn.png" alt="left-btn" className="left-btn" />

        <div className="movie-cards">
          <MovieCard
            Imgsrc="public/Poster6.png"
            year="USA, 2021"
            name="Dune"
            rating="84.0/100"
            tomato="75%"
            genre="Action, Adventure, Drama"
          />
          <MovieCard
            Imgsrc="public/Poster7.png"
            year="USA, 2023"
            name="No Time To Die"
            rating="76.0/100"
            tomato="68%"
            genre="Action, Adventure, Thriller"
          />
          <MovieCard
            Imgsrc="public/Poster8.png"
            year="USA, 2021"
            name="Shang-Chi and the Legend of the Ten Rings"
            rating="79.0/100"
            tomato="71%"
            genre="Action, Adventure, Fantasy"
          />
          <MovieCard
            Imgsrc="public/Poster9.png"
            year="USA, 2021"
            name="Don't Breathe 2"
            rating="61.0/100"
            tomato="46%"
            genre="Action, Drama, Horror "
          />
        </div>

        <img src="/right-btn.png" alt="right-btn" className="right-btn" />
      </div>
    </section>
  );
}

export default NewArrivals;
