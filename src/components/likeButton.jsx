import { useState } from "react";

function LikeButton() {
  const [liked, setLiked] = useState(false);

  const handleClick = () => {
    setLiked(prev => !prev);
  };


  return (
    <div className="btn-div">
      <button onClick={handleClick} style={{
        background: "none",
    border: "none",
    fontSize: "1.2rem",
    cursor: "pointer",
    color: "#e91e63",
      }}>
      {liked ? "❤️ Liked" : "🤍 Like"}
    </button>
    </div>
  );
}

export default LikeButton;
