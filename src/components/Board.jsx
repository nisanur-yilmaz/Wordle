
function Board({board}) {
    const rows = Array(6).fill(null);

    return (
        <div className="grid grid-rows-6 gap-2 board">
            {rows.map((_, i) => (
                <div key={i} className="flex gap-2 ">
                    {Array(5).fill(null).map((_, j) => (
                        <div key={j} className="w-12 h-12 border flex items-center justify-center border-black">
                            {board[i][j]}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default Board;