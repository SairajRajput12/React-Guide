
export default function GameBoard({handleButtonClick,gameBoard}){
    return(
        <ol id="game-board">
            {gameBoard.map((array,rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {array.map((playerSymbol,colIndex) => (
                            <li key={colIndex}>
                                <button onClick={() => handleButtonClick(rowIndex,colIndex)} disabled={playerSymbol !== null }>{playerSymbol}</button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    );
}

/*
<ol id="game-board">
        {initial_board.map((row,rowIndex) =>(
            <li key={rowIndex}> 
                <ol>
                    {row.map((playerSymbol,colIndex) =>( 
                        <li key={colIndex}>
                            <button onClick={() => fun(rowIndex,colIndex)} disabled={playerSymbol !== null }>
                                {playerSymbol}
                            </button>
                        </li>))
                    }
                </ol>
            </li>
         ))
         }
    </ol>
*/