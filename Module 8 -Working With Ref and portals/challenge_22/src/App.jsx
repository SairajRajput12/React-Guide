import React from 'react';
import Workout from './components/WorkOut';


/*
Your working on a "Workout" app and your task is to start and stop timers when users click the "Start" and "Stop" buttons of a selected workout.

You're provided with some code that already displays some workout items, therefore, you don't need to work on the JSX code or manage any state.

Instead, your task is to set a timer if the "Start" button is clicked and clear (stop) that timer once the "Stop" button is clicked.

If a timer expires, the same code that should execute if it's stopped manually (by pressing the "Stop" button) should be executed.

The timer expiration time should be different for every workout - take a closer look at the Workout component to get access to that workout-specific time.

You also must make sure that different Workout component instances set and manage separate, independent timers (i.e., when starting timers for "Pushups" and "Squats", clicking "Stop" for "Squats" should not stop the "Pushups" timer etc).

When a timer expires, the same function that's triggered when the "Stop" button is pressed should be executed.

Important: In this Udemy exercise environment, React Hooks can't be imported directly. Instead, you have to import React from 'react' and then call Hooks on that React object (e.g., React.useState()).


*/

const workouts = [
  {
    title: 'Pushups',
    description: 'Do 30 pushups',
    time: 1000 * 60 * 3,
  },
  {
    title: 'Squats',
    description: 'Do 30 squats',
    time: 1000 * 60 * 2,
  },
  {
    title: 'Pullups',
    description: 'Do 10 pullups',
    time: 1000 * 60 * 3,
  },
];

function App() {
  const [completedWorkouts, setCompletedWorkouts] = React.useState([]);

  function handleWorkoutComplete(workoutTitle) {
    setCompletedWorkouts((prevCompletedWorkouts) => [
      ...prevCompletedWorkouts,
      workoutTitle,
    ]);
  }

  return (
    <main>
      <section>
        <h2>Choose a workout</h2>
        <ul>
          {workouts.map((workout) => (
            <li key={workout.title}>
              <Workout
                {...workout}
                onComplete={() => handleWorkoutComplete(workout.title)}
              />
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Completed workouts</h2>
        <ul>
          {completedWorkouts.map((workoutTitle, index) => (
            <li key={index}>{workoutTitle}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default App;
