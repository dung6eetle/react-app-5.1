import React from 'react';
import './App.css';
import Joke from './Joke'
import jokesData from './jokesData'

function App() {
  const jokeComponents = jokesData.map(joke => <Joke key={joke.number} body={joke.body} number={joke.number} acter={joke.acter} />)
  return (
    <div className="App">
      {jokeComponents}
    </div>
  );
}

export default App;
