const initialGameBoard = [
    [null,null,null],
    [null,null,null],
    [null,null,null],
]

// Lecture 78: Rendering multidimensional list

export default function GameBoard(){
    return(
        <ol id="game-board">
            {initialGameBoard.map((row,rowIndex) =>(
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol,colIndex) =>( 
                            <li key={colIndex}>
                                <button>
                                    {playerSymbol}
                                </button>
                            </li>))
                        }
                    </ol>
                </li>
             ))
             }
        </ol>
    );
}