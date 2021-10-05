import './App.css';
import Dealership from './components/dealership/Dealership';
import Neighborhood from './components/neighborhood/Neighborhood';
import "./App.css"

function App() {
  const mustang = "1967 Mustang BOSS 302"
  const fordGt ="2021 Ford GT"
  return (
    <div className="box">
      <h1>Props Drilling</h1>
      <Neighborhood mustang={mustang} />
      <Dealership mustang={mustang} fordGt={fordGt} />
    </div>
  );
}

export default App;
