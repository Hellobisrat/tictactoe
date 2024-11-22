
import { useEffect, useState } from 'react'
import './styles.css'
function Square({vlaue,onClick}){

  return <button onClick={onClick} className="square">{vlaue}</button>
}



export default function TicTacToe(){

  const [squares,setSquares] = useState(Array(9).fill(''))
  const [isXTurn,setIsXTurn]=useState(true)
  const [status, setStatus]=useState('')

function getwinner(squares){
  const winnerPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [2,5,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7]

  ]
  for (let i=0; i<winnerPatterns.length; i++){
    const[x,y,z] =winnerPatterns[i]
    if(squares[x] && squares[x] === squares[y]&& squares[x]===squares[z]){
      return squares[x]
    }

  }
  return null
}

  
function handleClick(getCurrentSquare){
  let cpySquares = [...squares]
  if(getwinner(cpySquares) || cpySquares[getCurrentSquare]) return;
  cpySquares[getCurrentSquare]=isXTurn ? "X" :"0";
  setIsXTurn(!isXTurn)
  setSquares(cpySquares)
}

useEffect(()=>{
  if(!getwinner(squares)&&squares.every(item => item!=='')){
      setStatus('this is a draw ! Please restart the game')
  } else if (getwinner(squares)){
    setStatus(`Winner is ${getwinner(squares)} please restart the game`)
  } else {
    setStatus(`Next player is ${isXTurn ?'X' :'O'}`)
  }
    

},[squares,isXTurn])

function handleRestart(){
  setIsXTurn(true)
  setSquares(Array(9).fill(''))
}


  return (
    <div className="tic-tac-container">
         <div className="row">
           <Square vlaue={squares[0]} onClick={()=>handleClick(0)}/>
           <Square vlaue={squares[1]} onClick={()=>handleClick(1)}/>
           <Square  vlaue={squares[2]} onClick={()=>handleClick(2)}/>
         </div>
         <div className="row">
         <Square vlaue={squares[3]} onClick={()=>handleClick(3)}/>
         <Square vlaue={squares[4]} onClick={()=>handleClick(4)}/>
         <Square vlaue={squares[5]} onClick={()=>handleClick(5)}/>
         </div>
         <div className="row">
         <Square vlaue={squares[6]} onClick={()=>handleClick(6)}/>
         <Square vlaue={squares[7]} onClick={()=>handleClick(7)}/>
         <Square vlaue={squares[8]} onClick={()=>handleClick(8)}/>
         </div>
        <h1>{status}</h1>
        <button onClick={handleRestart}>Restart</button>
    </div>
  )

}