import { useState } from "react";

function NavBar() {
  const [movieName, setMovieName] = useState("");

  return (
    <nav>
      <img src="/home-logo.png" alt="movix logo" />

      <div className="search-container">
        <input
          type="search"
          value={movieName}
          onChange={(e) => setMovieName(e.target.value)}
          placeholder="What do you want to watch?"
          className="search-input"
        />
        <img src="/Search.png" alt="Search" />
      </div>

      <div className="profile">
        <p>Hi, $Fullname</p>
        <img src="/Menu.png" alt="menu" />
      </div>
    </nav>
  );
}
export default NavBar;
