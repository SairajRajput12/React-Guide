import { useState } from "react";

const initialGameBoard = [
    [null,null,null],
    [null,null,null],
    [null,null,null],
]

// Lecture 78: Rendering multidimensional list

export default function GameBoard({currPlayer,fun}){
    const [gameBoard,setGameBoard] = useState(initialGameBoard); 

    function handleSelectSquare(rowIndex,colIndex){
        setGameBoard((previousGameBoard) => 
            {
                const updatedBoard = [...previousGameBoard.map(innerArray => [...innerArray])]; 
                updatedBoard[rowIndex][colIndex] = currPlayer;
                return updatedBoard; 
            }
        );

        fun(); 
    }

    return(
        <ol id="game-board">
        {/* Using nested map methood for the 2d list */}
            {gameBoard.map((row,rowIndex) =>(
                <li key={rowIndex}> 
                {/* Here the key attribute is added for  */}
                    <ol>
                        {row.map((playerSymbol,colIndex) =>( 
                            <li key={colIndex}>
                                <button onClick={() => handleSelectSquare(rowIndex,colIndex)}>
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