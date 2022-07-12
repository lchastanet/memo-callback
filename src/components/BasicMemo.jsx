import React, { useState } from "react"

function BasicMemo() {
  const [state1, setState1] = useState(false)
  const [state2, setState2] = useState(false)

  const treatment = doSomethingHeavy(state2)

  return (
    <>
      <p>{treatment}</p>
      <button onClick={() => setState1(!state1)}>Set state 1</button>
      <button onClick={() => setState2(!state2)}>Set state 2</button>
    </>
  )
}

const doSomethingHeavy = (value) => {
  console.log("Do something Heavy")
  return `New value: ${!value}`
}

export default BasicMemo
