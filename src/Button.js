import React, { useState, useEffect } from 'react';

const ColorSequenceGame = () => {
  const colors = ['#FF5700', '#33FF57', '#5733FF', '#FF3357', '#33FFC5', '#FFC533', '#33C5FF', '#C533FF', '#C5FF33'];
  const [sequence, setSequence] = useState([]);
  const [color, setColor] = useState([]);
  const [userInput, setUserInput] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [indexing, setIndexing] = useState(0);

  useEffect(() => {
    generateSequence();
  }, []);

  const generateSequence = () => {
    let newSequence = [];
    while (newSequence.length < 9) {
      const color = colors[Math.floor(Math.random() * colors.length)];
      if (!newSequence.includes(color)) {
        newSequence.push(color);
      }
    }
    setSequence(newSequence);
    
    let newColor = [];
    while (newColor.length < 9) {
      const color = colors[Math.floor(Math.random() * colors.length)];
      if (!newColor.includes(color)) {
        newColor.push(color);
      }
    }
    setColor(newColor);
  };

  const handleClick = (index, color) => {
    if (!gameOver) {
    
        if(sequence[indexing] !== color){
            setUserInput([]);
            setIndexing(0);
        }
      if (sequence[indexing] === color) {
        setUserInput([...userInput, sequence[indexing]]);
        setIndexing(prevIndexing => prevIndexing + 1);
        if (indexing === colors){
          setGameOver(true);
          alert('Good job!');
        }
      } else {
        // setGameOver(true);
        alert('Game over! Try again.');
      }
    }
  };

  const resetGame = () => {
    setUserInput([]);
    setIndexing(0);
    setGameOver(false);
    // generateSequence();
  };

  return (
    <div style={{ paddingTop: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ paddingTop: '20rem', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
        {sequence.map((color, index) => (
          <div key={index} style={{ width: 50, height: 50, backgroundColor: color, marginBottom: 5 }}></div>
        ))}
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', width: '200px', alignContent: 'center', justifyContent: 'center', marginTop: 20 }}>
        {color.map((color, index) => (
          <button key={index} style={{ flex: '0 1 50px', padding: '20px', gap: '25px', backgroundColor: gameOver || userInput.includes(color) ? color : '#808080', width: 50, height: 50, marginRight: 10 }} onClick={() => handleClick(index, color)} disabled={gameOver}></button>
        ))}
      </div>
      <button onClick={resetGame}>Reset Game</button>
    </div>
  );
};

export default ColorSequenceGame;