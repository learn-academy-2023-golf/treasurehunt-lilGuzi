import React, { useState } from "react"
import "./App.css"
import Square from "./components/Square"
import Reset from "./components/Reset"

const App = () => {
  const [board, setBoard] = useState([
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?"
  ])

  const [trasureLocation, setTreasureLocation] = useState(Math.floor(Math.random() * board.length))
  const [bombLocation, setBombLocation] = useState(Math.floor(Math.random() * board.length))

  const handleGamePlay = (index) => {
    // alert(index)
    let updatedBoard = [...board]
    if (trasureLocation === index){
      updatedBoard[index] = "🍬"
      setBoard(updatedBoard)
    } else if (bombLocation === index) {
      updatedBoard[index] = "👻"
    setBoard(updatedBoard)
    }else {
    updatedBoard[index] = "🎃"
    setBoard(updatedBoard)
    }
  }

  const restart = () => {
    let resetBoard = ["?", "?", "?", "?", "?", "?", "?", "?", "?"]
    setBoard(resetBoard)
  }

  return (
    <>
      <h1>Treasure Hunt Game</h1>
      <div className="gameboard">
      {board.map((value, index) => {
        return (
          <Square 
          value={value} 
          key={index} 
          index={index}
          handleGamePlay={handleGamePlay}
          />
          )
      })}
      </div>
      <div> <Reset restart={restart}/> 
      
      </div>
    </>
  )
}

export default App
