import React, {useState} from "react";

function Toggle() {
  const [isToggled, setToggled] = useState(false);

  function clickState() {
    setToggled(!isToggled)
  }
  
  const color = isToggled ? "red" : "white"

  console.log(`click: ${isToggled}`)

  return (
    <button style={{ background: color }} onClick={clickState}>
      { isToggled ? "ON" : "OFF" }
    </button>
  )
}

export default Toggle;
