import React, { useCallback, useState } from "react"
import BasicCallbackChild from "./BasicCallbackChild"

function BasicCallback() {
  const [state1, setState1] = useState(false)
  const [state2, setState2] = useState(false)

  const changeState1 = () => setState1(!state1)
  const changeState2 = useCallback(() => setState2(!state2), [state2])

  return (
    <>
      <p>
        State 1: {JSON.stringify(state1)} - State 2: {JSON.stringify(state2)}
      </p>
      <button onClick={changeState1}>Set state 1</button>
      <BasicCallbackChild state2={state2} changeState2={changeState2} />
    </>
  )
}

export default BasicCallback
