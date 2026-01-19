import {useState} from 'react'
import './App.css'
import Board from "./components/Board.jsx";
import Keyboard from "./components/Keyboard.jsx";
// source of truth
function App() {
    const [board, setBoard] = useState(
        Array(6).fill(null).map(() => Array(5).fill(""))
    );

    const [row, setRow] = useState(0);
    const [col, setCol] = useState(0);

    const handleKeyDown = (key) => {
        if (key === "ENTER") {
            if (col === 5) {
                setRow(row + 1);
                setCol(0);
            }
            else
            {
                alert("Yetersiz harf")
            }


            return;
        }
        if (key === "⌫") {
            if (col > 0) {
                const copy = [...board];
                copy[row][col - 1] = "";
                setBoard(copy);
                setCol(col -1)

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
            <Board board={board}/>
            <Keyboard onKeyDown={handleKeyDown}/>

        </>
    )
}

export default App
