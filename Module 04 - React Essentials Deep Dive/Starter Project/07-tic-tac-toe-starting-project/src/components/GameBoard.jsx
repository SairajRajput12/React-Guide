


// Lecture 78: Rendering multidimensional list

export default function GameBoard({currPlayer,fun,turns,board}){
    // last reference: this component has the missing information about order in which the log button has been clicked
    // const [gameBoard,setGameBoard] = useState(initialGameBoard); 

    // function handleSelectSquare(rowIndex,colIndex){
    //     setGameBoard((previousGameBoard) => 
    //         {
    //             const updatedBoard = [...previousGameBoard.map(innerArray => [...innerArray])]; 
    //             updatedBoard[rowIndex][colIndex] = currPlayer;
    //             return updatedBoard; 
    //         }
    //     );

    //     fun(); 
    // }

    // Lecture 84: deriving state from props. 
    
    

    return(
        <ol id="game-board">
        {/* Using nested map methood for the 2d list */}
            {board.map((row,rowIndex) =>(
                <li key={rowIndex}> 
                {/* Here the key attribute is added for  */}
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
    );
}