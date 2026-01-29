import "./App.css";
import Counter from "./components/Counter";
import Greetings from "./components/Greetings";
import Clzname from "./components/Clzname";
import { useState } from "react";


const Monoapp =()=> {
  const [count, setCount] = useState(0);
  const clzname = "ABC College";
  return (
    <>
      <Counter count={count} setCount={setCount} />
      <br />
      <Greetings />
      <br />
      <p>Hello,{count}</p>
      <Clzname clz={clzname} />

    </>
  );
}

export default Monoapp;