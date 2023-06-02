import "./App.css";
import React from "react";
import Die from "./components/Die";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [countScore, setCountScore] = React.useState(0);
  const [highScore, setHighScore] = React.useState(0);
  const [setHeld] = React.useState(false);
  const [gameOver, setGameOver] = React.useState(false);
  const [boxes, setBoxes] = React.useState([
    { id: 1, name: "Afar", url: "Afar.svg.png", clicked: false },
    { id: 2, name: "Amhara", url: "Amhara.svg.png", clicked: false },
    { id: 3, name: "Southern Nations", url: "Gurage.svg.png", clicked: false },
    { id: 4, name: "Oromia", url: "Oromia.svg.png", clicked: false },
    { id: 5, name: "Sidama", url: "Sidama.svg.png", clicked: false },
    { id: 6, name: "Somalia", url: "Somalia.jpg", clicked: false },
    { id: 7, name: "Tigray", url: "Tigray.svg.png", clicked: false },
    { id: 8, name: "Addis Ababa", url: "Addis_Ababa.svg.png", clicked: false },
    { id: 9, name: "Dire Dawa", url: "Dire_Dawa.png", clicked: false },
    { id: 10, name: "Harari", url: "Harari.svg.png", clicked: false },
    { id: 11, name: "South West", url: "South_West.svg.png" },
    { id: 12, name: "Gambella", url: "Gambella.svg.png", clicked: false },
    {
      id: 13,
      name: "Benishangul-Gumuz",
      url: "Benishangul.svg.png",
      clicked: false,
    },
  ]);

  function shuffleBoxes(heldBoxId) {
    const shuffledBoxes = [...boxes];
    for (let i = shuffledBoxes.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledBoxes[i].url, shuffledBoxes[j].url] = [
        shuffledBoxes[j].url,
        shuffledBoxes[i].url,
      ];
      [shuffledBoxes[i].name, shuffledBoxes[j].name] = [
        shuffledBoxes[j].name,
        shuffledBoxes[i].name,
      ];
      [shuffledBoxes[i].id, shuffledBoxes[j].id] = [
        shuffledBoxes[j].id,
        shuffledBoxes[i].id,
      ];
      [shuffledBoxes[i].position, shuffledBoxes[j].position] = [
        shuffledBoxes[j].position,
        shuffledBoxes[i].position,
      ];
    }

    if (heldBoxId) {
      const heldBoxIndex = shuffledBoxes.findIndex(
        (box) => box.id === heldBoxId
      );
      shuffledBoxes[heldBoxIndex].held = true;
    }

    setBoxes(shuffledBoxes);
  }

  function handleGameOver() {
    setGameOver(true);
  }
  function handleClick(boxId) {
    const clickedBox = boxes.find((box) => box.id === boxId);
    if (clickedBox.held) {
      handleGameOver();
      if (countScore > highScore) {
        setHighScore(countScore);
      }
      setCountScore(0);
      const updatedBoxes = boxes.map((box) =>
        box.id === boxId ? { ...box, clicked: true, held: false } : box
      );
      setBoxes(updatedBoxes);
      setHeld(false);
    } else {
      const updatedBoxes = boxes.map((box) =>
        box.id === boxId ? { ...box, held: true } : box
      );

      setCountScore(countScore + 1);
      setBoxes(updatedBoxes);
      setHeld(true);
      shuffleBoxes(boxId);
    }
  }

  const boxesElements = boxes.map((box) => (
    <Die
      key={box.id}
      onClick={() => handleClick(box.id)}
      value={box}
      countScore={countScore}
      setCountScore={setCountScore}
      highScore={highScore}
      gameOver={gameOver}
      setGameOver={setGameOver}
      shuffleBoxes={shuffleBoxes}
      style={{ order: box.position }}
    />
  ));

  return (
    <div className="App">
      <Header countScore={countScore} highScore={highScore} />
      <div className="dice-container">{boxesElements}</div>
      <Footer />
    </div>
  );
}

export default App;
