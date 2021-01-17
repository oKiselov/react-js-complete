import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'

class App extends Component {
  // state = {
  //   persons: [
  //     {name: 'Max', age: 28},
  //     {name: 'Lopu', age: 12},
  //     {name: 'Ivan', age: 29}
  //   ]
  // }

  // switсhNameHandler = () =>{
  //   this.setState({
  //     persons: [
  //       {name: 'Max', age: 111128},
  //       {name: 'Lopu', age: 11112},
  //       {name: 'Ivan', age: 111129}
  //     ]
  //   });
  // }

  // nameChangedHandler = (event) => {
  //   this.setState({
  //     persons: [
  //       {name: 'Max', age: 288},
  //       {name: event.target.value, age: 122},
  //       {name: 'Ivan', age: 299}
  //     ]
  //   });
  // }


  state = {
    username: "superRRRRRMax!!!"
  }

  inputChangedHandler = (event) => {
    this.setState({
      username:event.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, React)</h1>
         {/* <button onClick={this.switсhNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>Racing</Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} click={this.switсhNameHandler} changed={this.nameChangedHandler}>Racing</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}>Racing</Person>
        <br/>  */}
        <UserInput changed={this.inputChangedHandler} currentName={this.state.username}/>
        <UserOutput userName={this.state.username} />
        <UserOutput userName={this.state.username} />
        <UserOutput userName={this.state.username} />
      </div>
    );
  }
}

export default App;
