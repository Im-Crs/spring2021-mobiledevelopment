import Pushups from './components/Pushups.js'
import Squats from './components/Squats.js'
import JumpJack from './components/JumpJack.js'
import LegRaise from './components/LegRaise.js'


function App() {
  return (
    <div>
      <h1 id="AppTitle"> EXCERSISE TRACKER </h1>
      <Pushups/>
      <Squats/>
      <JumpJack/>
      <LegRaise/>
    </div>
  );
}

export default App;
