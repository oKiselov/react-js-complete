import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'

const app = props => {
  const [ personsState, setPersonsState] = useState({persons: [
    {name: 'Max', age: 28},
    {name: 'Lopu', age: 12},
    {name: 'Ivan', age: 29}
  ]});

  const swithcNameHandler = () =>{
    setPersonsState({
      persons: [
        {name: 'Max', age: 111128},
        {name: 'Lopu', age: 11112},
        {name: 'Ivan', age: 111129}
      ]
    });
  };
  
  return (
      <div className="App">
        <h1>Hi, React)</h1>
        <button onClick={swithcNameHandler}>Switch Name</button>
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age}>Racing</Person>
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>Racing</Person>
        <Person name={personsState.persons[2].name} age={personsState.persons[2].age}>Racing</Person>
      </div>
    );
}

export default app;

