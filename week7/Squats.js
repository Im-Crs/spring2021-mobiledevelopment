import React, {useState} from 'react';

function Squats () {
  const [squats, setSquats] = useState(0);

  return (
    <div>
      <h2> Squats completed: (squats)</h2>
      <button onClick={() => setSquats(squats + 1)}> Completed 1 squat: </button>
      <button onClick={() => setSquats(0)}> Reset count </button>

    </div>
  )
}

export default Squats;
