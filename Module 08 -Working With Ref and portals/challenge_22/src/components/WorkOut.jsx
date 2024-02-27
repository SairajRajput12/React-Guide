import React from 'react';


export default function Workout({ title, description, time, onComplete }) {
  const timer = React.useRef(); 
  function handleStartWorkout() {
    // Todo: Start timer 
    timer.current = setTimeout(() =>{
        handleStopWorkout()
    },1000)
  }

  function handleStopWorkout() {
    // Todo: Stop timer
    clearTimeout(timer.current);
    onComplete();
  }

  return (
    <article className="workout">
      <h3>{title}</h3>
      <p>{description}</p>
      <p>{time}</p>
      <p>
        <button onClick={handleStartWorkout}>Start</button>
        <button onClick={handleStopWorkout}>Stop</button>
      </p>
    </article>
  );
}
