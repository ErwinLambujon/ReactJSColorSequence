import React, { useState, useEffect } from "react";
import { Button, ButtonGroup } from "@mui/material";
import "./App.css";

const colors = [
  "#FF5700",
  "#33FF57",
  "#5733FF",
  "#FF3357",
  "#33FFC5",
  "#FFC533",
  "#33C5FF",
  "#C533FF",
  "#C5FF33",
];

const initialButtonColor = "#33FF57";

function App() {
  const [sequence, setSequence] = useState(colors);
  const [userInput, setUserInput] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [indexing, setIndexing] = useState(0);

  useEffect(() => {
  }, []);

  const handleClick = (color) => {
    if (!gameOver) {
      if (sequence[indexing] !== color) {
        setGameOver(true);
        alert("Game over! Try again.");
        return;
      }

      setUserInput([...userInput, sequence[indexing]]);
      setIndexing((prevIndexing) => prevIndexing + 1);

      if (indexing === 8) {
        setGameOver(true);
        alert("Good job!");
      }
    }
  };

  const resetGame = () => {
    setUserInput([]);
    setIndexing(0);
    setGameOver(false);
  };

  return (
    <div className="App">
      <div className="color-range">
        {sequence.map((color, index) => (
          <div
            key={index}
            className="color-box"
            style={{ backgroundColor: color }}
          />
        ))}
      </div>
      <header className="App-header">
        <div className="button-groups">
          <ButtonGroup variant="contained" aria-label="buttonGroup">
            {colors.slice(0, 3).map((color, index) => (
              <Button
                key={index}
                variant="contained"
                sx={{
                  width: 200,
                  height: 100,
                  margin: 1,
                  backgroundColor:
                    gameOver || userInput.includes(color)
                      ? color
                      : initialButtonColor,
                }}
                onClick={() => handleClick(color)}
                disabled={gameOver}
              ></Button>
            ))}
          </ButtonGroup>
          <ButtonGroup variant="contained" aria-label="buttonGroup">
            {colors.slice(3, 6).map((color, index) => (
              <Button
                key={index}
                variant="contained"
                sx={{
                  width: 200,
                  height: 100,
                  margin: 1,
                  backgroundColor:
                    gameOver || userInput.includes(color)
                      ? color
                      : initialButtonColor,
                }}
                onClick={() => handleClick(color)}
                disabled={gameOver}
              ></Button>
            ))}
          </ButtonGroup>
          <ButtonGroup variant="contained" aria-label="buttonGroup">
            {colors.slice(6, 9).map((color, index) => (
              <Button
                key={index}
                variant="contained"
                sx={{
                  width: 200,
                  height: 100,
                  margin: 1,
                  backgroundColor:
                    gameOver || userInput.includes(color)
                      ? color
                      : initialButtonColor,
                }}
                onClick={() => handleClick(color)}
                disabled={gameOver}
              ></Button>
            ))}
          </ButtonGroup>
        </div>
      </header>
      <button className="reset" onClick={resetGame}>Reset Game</button>
    </div>
  );
}

export default App;
