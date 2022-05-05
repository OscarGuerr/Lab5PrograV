import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';



import Navbar2 from './shared/components/Navigation/NavBar/NavBar.js';
import Users from './users/pages/Users.js';
import App2 from './App2.js';
import { Route } from 'react-router-dom';
import App3 from './App3.js';


function App() {
  return (
    <Router>
      <Navbar2/>
      <div className="App">
        <h2 className="games-title"> Reviews</h2>
      </div>
      <Users/>
      
      <Route path="/App2.js"><App2/></Route>
      <Route path="/App3.js"><App3/></Route>
      
      
    </Router>
  );
}

export default App;
