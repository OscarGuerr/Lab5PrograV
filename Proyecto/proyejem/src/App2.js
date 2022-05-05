import {BrowserRouter as Router} from 'react-router-dom';
import './App2.css'
function App2() {
    return (
      <Router>
        
        <div className="App2">
          <h2 className="games-title"> Reviews</h2>
        </div>

        <li className='metac'><img className='imgm' src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Metacritic_logo_original.svg/1200px-Metacritic_logo_original.svg.png"></img>Metacritic Score: 96</li>
        <br/>
        <li className='openc'> <img className='imgo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/OpenCritic_Logo.svg/2560px-OpenCritic_Logo.svg.png"></img>Opencritic Score: 95</li>

        
  
        
        
      </Router>
    );
  }
  
  export default App2;