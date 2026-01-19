const keyboardrows =
    [
        ["E", "R", "T", "Y", "U", "I", "O", "P", "Ğ", "Ü"],
        ["A", "S", "D", "F", "G", "H", "J", "K", "L", "Ş", "İ"],
        ["ENTER", "Z", "C", "V", "B", "N", "M", "Ö", "Ç", "⌫"]
    ];

function Keyboard({onKeyDown}) {
    return (
        <div className="flex flex-col gap-2 mt-7">
            {keyboardrows.map((row, i) => (
            <div key={i} className="flex justify-center gap-1">
                {row.map((key) => (
                    <button key={key}
                            onClick={() => onKeyDown(key)}
                            className="h-12 rounded font-bold">{key}
                    </button>
                ))}
            </div>
            ))}
        </div>
    );
}

export default Keyboard;