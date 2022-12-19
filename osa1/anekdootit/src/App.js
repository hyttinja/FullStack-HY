import { useState } from 'react'
const Anecdote = ({header,anecdote,votes}) =>{
  return(
    <div>
      <h1>{header}</h1>
      {anecdote} has votes {votes}
    </div>
  )
}
const Button = ({onClick, text}) => {
  return (
    <button
      onClick={onClick}
      >
        {text}
      </button>
  )
}
const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
  ]
  const [points,setPoints] = useState([0,0,0,0,0,0,0]);
  const [selected, setSelected] = useState(0)

  return (
    <div>
      <Button text="vote" onClick={() =>{
        const copy = [...points];
        copy[selected]+=1; 
        setPoints(copy)}
      }></Button>
      <Button text="Next anecdote"
              onClick={() =>setSelected(Math.round(Math.random()*(anecdotes.length-1)))}
      />
      <Anecdote 
        header="Anecdote of the day"
        anecdote={anecdotes[selected]}
        votes={points[selected]}
      />
      <Anecdote 
        header="Anecdote with most votes"
        anecdote={anecdotes[points.indexOf(Math.max(...points))]}
        votes={points[points.indexOf(Math.max(...points))]}
      />
    </div>

  )
}

export default App