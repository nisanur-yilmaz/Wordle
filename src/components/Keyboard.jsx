const keyboardrows =
    [
        ["E", "R", "T", "Y", "U", "I", "O", "P", "Ğ", "Ü"],
        ["A", "S", "D", "F", "G", "H", "J", "K", "L", "Ş", "İ"],
        ["ENTER", "Z", "C", "V", "B", "N", "M", "Ö", "Ç", "⌫"]
    ];

function Keyboard({onKeyDown, keyColors}) {
    return (
        <div className="flex flex-col gap-2 mt-7">
            {keyboardrows.map((row, i) => (
                <div key={i} className="flex justify-center gap-1">
                    {row.map((key) => (
                        <button key={key}
                                onClick={() => onKeyDown(key)}
                                className={` rounded font-bold flex items-center justify-center
                                ${i === 1 ? "w-12 h-19 text-sm" : "w-15 h-19"}
                                ${keyColors[key] === "black" ? "bg-black text-white" : ""}
                                ${!keyColors[key] ? "bg-gray-400 text-white" : ""}
                               
                                `}
                        >

                            {key}
                        </button>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default Keyboard;