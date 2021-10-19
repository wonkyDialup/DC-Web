import './App.css';
import { useState } from "react";
import StudentContainer from './components/StudentContainer';
import Students from './components/Students';




function App() {

  const [counter, setCounter] = useState(0);
  // const [students, setStudent] = useState(data)


  return (
    <div className="App">
      <h1>App.js</h1>
      <h3>Data starts here</h3>
      <StudentContainer />
    </div>
  );
}

export default App;
