import React from "react"

function BasicCallbackChild({ state2, changeState2 }) {
  console.log("Child Rendered")
  return <button onClick={changeState2}>Set state 2</button>
}

export default BasicCallbackChild
