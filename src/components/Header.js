import React from "react";

export default function Header(props) {
  return (
    <header className="header--head">
      <div className="header--left">
        <h1>Memory Game</h1>
        <p>
          "Memory game with Ethiopian Region flags shuffled on click, no
          repeats."
        </p>
      </div>
      <div className="header--right">
        <h3>Score: {props.countScore}</h3>
        <h3>High-Score: {props.highScore}</h3>
      </div>
    </header>
  );
}
