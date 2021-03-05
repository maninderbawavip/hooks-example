import './App.css';
import { useEffect, useState } from 'react';
import { Age } from './Age';

function App() {

  const [age] = useState(20)
  const [name, changeName] = useState({ firstName: "maninder", lastName: "Bawa", middleName: "Singh" })


  let { firstName, lastName } = name;
  
  // component did update
  // useEffect(() => {
  //   console.log("component did update")
  // })

  // // componetDidMount
  // useEffect(() => {
  //   // fetch api call
  //   console.log("component did mount")
  //   return () => {
  //     console.log("component unmounted")
  //   }
  // }, [])


  // useEffect(() => {
  //   //logic
  //   console.log(" firstName changed", firstName)
  // }, [firstName] // dependency list of above function 
  // )



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

        { firstName === "Maninder" ? <Age/> : null}
      </header>
    </div>
  );
}

export default App;
