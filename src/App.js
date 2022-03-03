
import './App.css';

import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from './Components/NavBar';
import NavBarCanvas from './Components/NavBarCanvas';
import Grid from './Components/Grid';


function App() {
  return (
    <div className="content">
      <NavBar />
      <NavBarCanvas />
      <Grid />
    </div>
  );
}

export default App;