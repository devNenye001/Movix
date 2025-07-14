import NavBar from "../components/navBar";
import Ratings from "../components/ratingCard";
import MovieSection from "../components/movie-section";
import MovieSection2 from "../components/newArrivals";
import SingleSection from "../components/single-section";
import CastSection from "../components/CastSection";
import Footer from "../components/footer"

function Home() {
  return (
    <>
        <section className="hero">
            <NavBar/>
            <div className="hero2">
                <div className="hero-text">
                <h1>John Wick 3 :  Parabellum</h1>
                <Ratings/>
                <p>John Wick is on the run after killing a member of the international assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.</p>
                <button className="btn">
                    <img src="/public/Play.png" alt="play button" />
                    WATCH TRAILER</button>  
            </div>
            <img src="/PaginationBox.png" alt="pagination" />
            </div>
        </section>

        <section className="movies">
          <MovieSection
          heading = "Featured Movie" 
          />
          <MovieSection2
          heading = "New Arrival" 
          />
          <SingleSection
          heading = "Exclusive Videos" 
          />
          <CastSection
          heading = "Featured Casts" 
          />

        </section>
    <Footer/>
    </>
  );
}
export default Home;