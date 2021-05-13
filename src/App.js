import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios'
import Header from './components/Header'
import PhotoOfTheDay from './components/Photo'
import Explanation from './components/Explanation'
import { MainDiv } from './components/styledComponents'

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=9uyzCUM1kALA3Zs4ZbKCP5GdT3QKIZR9DhfuETOU`)
      .then(res => {
        console.log(res);
        setData(res.data);
      })
      .catch(error => {
        console.log('error message:', error);
      })
  }, [])
  if(!data.url) {
    return(
      <h3>Loading...</h3>
    );
  } 
  else {
    return(
      <MainDiv className = 'App'>
        <Header props = {data}/>
        <PhotoOfTheDay props = {data}/>
        <Explanation props = {data}/>
      </MainDiv>
    )
  }
}

export default App;
