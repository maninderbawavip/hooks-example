import logo from './logo.svg';
import './App.css';
import { Component, useState } from 'react';

// class App extends Component{

//   constructor(props){
//     super(props)

//     this.state = {
//       count: 0,

//     }
//   }

//   increaseCount = () => {
//     this.setState({ count: this.state.count + 1 })
//   }

//   render() {
//     return(
//       <div className="App App-header">
//         {this.state.count}
//         <button onClick={this.increaseCount}> Increase Count</button>
//       </div>
//     )
//   }
// }



function App() {

  const [age, changeAge] = useState(20)
  const [name, changeName] = useState({ firstName: "maninder", lastName: "Bawa", middleName: "Singh" })


  let { firstName, lastName } = name;

  return (
    <div className="App">
      <header className="App-header">
        <input type="text"
          value={firstName}
          placeholder="first name"
          onChange={(e) => {
            let newName = { ...name, firstName: e.target.value }
            changeName(newName)
          }}
        />

        <input 
          type="text" 
          value={lastName} 
          placeholder="last name" 
          onChange={(e) => {
            changeName({ ...name, lastName: e.target.value })
        }}
        />

        <p>firstName is {firstName}</p>
        <p>lastName is {lastName}</p>
        <p>age is {age}</p>

      </header>
    </div>
  );
}

export default App;
