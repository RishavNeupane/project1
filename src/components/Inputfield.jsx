import { useState } from "react";

const Inputfield = () => {
    const [name, setName] = useState("");
    const age=10;

  return (
    <>

    <div>
      <h2> Name </h2>
      <input value = {name}  onChange = {(event) => setName(event.target.value)} placeholder = "Type Here"/>
    </div>

    <div>

    <h2>You Entered: {name}</h2>
    <h2>Your age is {age}</h2>

    </div>

    </>
  )
}

export default Inputfield