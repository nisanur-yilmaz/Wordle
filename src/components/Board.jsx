function Board({board, colors}) {
    return (
        <div className="grid grid-rows-6 gap-2 board">
            {board.map((row, i) => (
                <div key={i} className="flex gap-2 ">
                    {row.map((cell, j) => (
                        <div key={j}
                             className={`w-12 h-12 border flex items-center justify-center border-black
                        ${colors[i][j] === "green" ? "bg-green-600 text-white" : ""}
                        ${colors[i][j] === "yellow" ? "bg-yellow-400 text-white" : ""}
                        ${colors[i][j] === "gray" ? "bg-gray-400 text-white" : ""}
                             `}

                        >
                            {cell}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default Board;