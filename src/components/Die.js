import React from "react";

export default function Die(props) {
  function handleRetry() {
    props.setGameOver(false);
    props.setCountScore(0);
    props.shuffleBoxes();
  }
  
  return (
    <div className="dice-container">
      <div className="die-face" style={props.style} onClick={props.onClick}>
        <div className="die-pic">
          <img
            src={`${process.env.PUBLIC_URL}${props.value.url}`}
            alt="flag"
          />
          <h2 className="die-name">{props.value.name}</h2>
        </div>
      </div>
      <div
        className={`gameOver ${props.gameOver ? "show" : ""}`}
        style={{ display: props.gameOver ? "block" : "none" }}
      >
        <h1 className="gameO">Game Over!</h1>
        <button onClick={handleRetry}>Retry</button>
      </div>
    </div>
  );
}
