import './App.css';
import SignUpForm from './components/SignUpForm'
import { useEffect } from "react"
import { useDispatch } from "react-redux"
function App() {

  const dispatch = useDispatch();


  useEffect(() => {
    getWeather();
  }, []);


  const getWeather = async () => {
    const data = await fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=atlanta&appid=ff1cadec65d9f10c3aafc2a01b14612c"
    );
    const json = await data.json()
    dispatch({ type: "WEATHER_DATA", payload: { json } });
    console.log(json)
  };
//   function convertFunction(data) {
//     dispatch({})
//     return data
// }

//   const data = fetch(
//     "https://api.openweathermap.org/data/2.5/weather?q=atlanta&appid=ff1cadec65d9f10c3aafc2a01b14612c"
//   ).then(data => data.json()).then(jsonData => {
//     convertFunction(jsonData)
//   })

  return (
    <div className="App">
      <SignUpForm />
    </div>
  );
}

export default App;
