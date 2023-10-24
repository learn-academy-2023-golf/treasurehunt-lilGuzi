import React from "react"

const Reset = (props) => {
    const resetGame = () => {
        props.restart()
    }
    return (
        <>
        <button onClick={resetGame}>Reset Game </button>
        </>
    )
}

export default Reset