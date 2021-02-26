import React, {useState} from 'react';

function Squat () {
  const [squats, setSquats] = useState(0);

  return (
    <div>
      <h2> Squats completed: (squats)</h2>
      <button onClick={() => }> Completed 1 squat: </button>
      <button> Reset count </button>

    </div>
  )
}

export default Squats;
