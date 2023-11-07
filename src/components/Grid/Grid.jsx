import { useState } from "react";
import Card from "../Card/Card";
import { ToastContainer, toast } from 'react-toastify';


import './Grid.css'
import 'react-toastify/dist/ReactToastify.css';

function isWinner(board,symbol){


if(board[0]==board[1] && board[1]==board[2]&& board[2]==symbol) return symbol;
if(board[3]==board[4] && board[4]==board[5]&& board[5]==symbol) return symbol;
if(board[6]==board[7] && board[7]==board[8]&& board[8]==symbol) return symbol;


if(board[0]==board[3] && board[3]==board[6]&& board[6]==symbol) return symbol;
if(board[1]==board[4] && board[4]==board[7]&& board[7]==symbol) return symbol;
if(board[2]==board[5] && board[5]==board[8]&& board[8]==symbol) return symbol;

if(board[0]==board[4] && board[4]==board[8]&& board[8]==symbol) return symbol;
if(board[2]==board[4] && board[4]==board[6]&& board[6]==symbol) return symbol;

return "";

}



function Grid({numberOfCards}){

const [turn,setTurn]=useState(true);  //true-O  false-X
const [board,setBoard]=useState(Array(numberOfCards).fill(""));
const [winner ,setWinner]=useState(null);
    function play(index){

        console.log("clicked",index);
        if(turn==true){
            board[index]="O"
        }
        else{
            board[index]="X"
        }

        const win=isWinner(board,turn ? "O" : "X");
        console.log("Winner is ",win);

            if(win){
            setWinner(win);
            toast.success(`Winner is ${win}`)
        }
          
        if (win === "" && board.every((cell) => cell !== "")) {
            // All cells are filled, and there is no winner
            toast.info("It's a draw! No winner.");
          }

        setBoard([...board]);
        setTurn(!turn);

    }
function reset(){
    setBoard(Array(numberOfCards).fill(""));
    setWinner(null);
    setTurn(true);
    
}

return(

    <div className="grid-wrapper">

        {winner && (
            <>
            <button className="reset" onClick={reset}>Click to reset game</button>
            <ToastContainer position="top-center" theme="dark" />
            </>
        )}

{!winner && (
            <>
            <button className="reset" onClick={reset}>Click to reset game</button>
            <ToastContainer position="top-center" theme="dark" />
            </>
        )}

        <h1 className="turn">Current turn : {(turn) ? 'O' : 'X'}</h1>

        <div className="grid">
        
        
    {board.map((value,idx)=>{   
       return <Card gameEnd ={winner ? true : false} onPlay = {play} player={value} key={idx} index={idx}/>
    })}
    
        
        
        </div>
    </div>

)


}

export default Grid;