import './App.css';
import Dealership from './components/dealership/Dealership';
import Neighborhood from './components/neighborhood/Neighborhood';
import "./App.css"

function App() {
  return (
    <div className="box">
      <h1>Props Drilling</h1>
      <Neighborhood />
      <Dealership />
    </div>
  );
}

export default App;
