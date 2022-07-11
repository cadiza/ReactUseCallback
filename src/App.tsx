import React, { useEffect, useState, useCallback } from 'react';
import './App.css';
// import Card from "./components/Card/Card"
import Square from "./components/Square/Square"

const App = () => {

  const randomBool = () => Math.random() < 0.5;
  const [squareData, setSquareData] = useState([
    { position: 1, isActive: true },
    { position: 2, isActive: true },
    { position: 3, isActive: true },
    { position: 4, isActive: true },
    { position: 5, isActive: true },
    { position: 6, isActive: true },
    { position: 7, isActive: true },
    { position: 8, isActive: true },
    { position: 9, isActive: true },
  ])
  const [current, setCurrent] = useState(-1);




  const handleChange = useCallback((position: number) => {
    setCurrent(position);
  }, []);

  useEffect(() => {
    setSquareData(
      squareData.map(item =>
        item.position === current
          ? { ...item, isActive: false }
          : { ...item }
      ))
  }, [current])


  let squares = [
    <Square position={squareData[0].position} isActive={squareData[0].isActive} handleChange={handleChange} key={squareData[0].position} />,
    <Square position={squareData[1].position} isActive={squareData[1].isActive} handleChange={handleChange} key={squareData[1].position} />,
    <Square position={squareData[2].position} isActive={squareData[2].isActive} handleChange={handleChange} key={squareData[2].position} />,
    <Square position={squareData[3].position} isActive={squareData[3].isActive} handleChange={handleChange} key={squareData[3].position} />,
    <Square position={squareData[4].position} isActive={squareData[4].isActive} handleChange={handleChange} key={squareData[4].position} />,
    <Square position={squareData[5].position} isActive={squareData[5].isActive} handleChange={handleChange} key={squareData[5].position} />,
    <Square position={squareData[6].position} isActive={squareData[6].isActive} handleChange={handleChange} key={squareData[6].position} />,
    <Square position={squareData[7].position} isActive={squareData[7].isActive} handleChange={handleChange} key={squareData[7].position} />,
    <Square position={squareData[8].position} isActive={squareData[8].isActive} handleChange={handleChange} key={squareData[8].position} />,
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setSquareData([
        { position: 1, isActive: randomBool() },
        { position: 2, isActive: randomBool() },
        { position: 3, isActive: randomBool() },
        { position: 4, isActive: randomBool() },
        { position: 5, isActive: randomBool() },
        { position: 6, isActive: randomBool() },
        { position: 7, isActive: randomBool() },
        { position: 8, isActive: randomBool() },
        { position: 9, isActive: randomBool() },
      ])
    }, 1800);
    return () => clearTimeout(timer);
  }, []);


  return (
    <div className="App">
      <header className="App-header">
        <div className="board">
          {squares}
        </div>
      </header>
    </div>
  )
}

export default App;
