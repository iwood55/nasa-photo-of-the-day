import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios'
import Header from './components/header'
import PhotoOfTheDay from './components/photo'
import Explanation from './components/explanation'

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=9uyzCUM1kALA3Zs4ZbKCP5GdT3QKIZR9DhfuETOU`)
      .then(function (response) {
        console.log(response.data);
        setData(response.data);
      })
      .catch(function (error) {
        console.log('error message:', error);
      })
  }, [])
  if(!data.url) {
    return(
      <h3>Loading...</h3>
    )
  } 
  else {
    return(
      <div className = 'App'>
        <Header props = {data}/>
        <PhotoOfTheDay props = {data}/>
        <Explanation props = {data}/>
      </div>
    )
  }
  // return (
  //   <div className="App">
  //     <p>
  //       Enjoy your NASA photo of the day!!!<span role="img" aria-label='go!'>🚀</span>!
  //     </p>
  //   </div>
  // );
}

export default App;
