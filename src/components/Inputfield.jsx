import { useState } from "react";

const Inputfield = () => {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");

  return (
    <>

    <div>
      <h2> Add Note </h2>
      <input value = {name}  onChange = {(event) => setName(event.target.value)} placeholder = "Type Here"/>
      <h2>Age</h2>
      <input type="number" value = {age} onChange={(event) => setAge(event.target.value)} placeholder = "Type Here"/>
    </div>

    <div>

    <h2>You Entered: {name} </h2>
    <h2>Your Age: {age} </h2>

    </div>

    </>
  )
}

export default Inputfield