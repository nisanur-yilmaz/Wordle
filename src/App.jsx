import {useState} from 'react'
import './App.css'
import Board from "./components/Board.jsx";
import Keyboard from "./components/Keyboard.jsx";

function App() {
    const correctWord = "REACT";
    const [board, setBoard] = useState(
        Array(6).fill(null).map(() => Array(5).fill(""))
    );
    const [colors, setColors] = useState(
        Array(6).fill(null).map(() => Array(5).fill(""))
    );
    const [keybordcolor, setKeybordcolor] = useState({});

    const [row, setRow] = useState(0);
    const [col, setCol] = useState(0);

    const handleKeyDown = (key) => {
        if (key === "ENTER") {
            if (col === 5) {
                const userGuess = board[row].join("")
                const colorCopy = [...colors];

                const keybordColorCopy = {...keybordcolor};
                const priority = {gray: 0, yellow: 1, green: 2}

                for (let i = 0; i < 5; i++) {

                    if (userGuess[i] === correctWord[i]) {
                        colorCopy[row][i] = "green";
                    }
                    if (colorCopy[row][i] !== "green"
                        && correctWord.includes(userGuess[i]))
                    {
                        colorCopy[row][i] = "yellow";
                    }
                    if (colorCopy[row][i] !== "green" && colorCopy[row][i] !== "yellow") {
                        colorCopy[row][i] = "gray";

                    }
                    const letter = userGuess[i];
                    if (!correctWord.includes(letter)) {
                        keybordColorCopy[letter] = "black"
                    }

                }
                setColors(colorCopy);
                setKeybordcolor(keybordColorCopy);
                setRow(row + 1);
                setCol(0);
            } else {
                alert("Yetersiz harf")
            }


            return;
        }
        if (key === "⌫") {
            if (col > 0) {
                const copy = [...board];
                copy[row][col - 1] = "";
                setBoard(copy);
                setCol(col - 1)

            }
            return;
        }
        if (col < 5 && row < 6) {
            const copy = [...board];
            copy[row][col] = key;
            setBoard(copy);
            setCol(col + 1);
        }
    }
    return (
        <>
            <Board board={board} colors={colors}/>
            <Keyboard onKeyDown={handleKeyDown} keyColors={keybordcolor}/>

        </>
    )
}

export default App
