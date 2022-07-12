import React, { useState } from "react"

import MemoContextProvider from "../contexts/MemoContext"
import ContextMemoChild from "./ContextMemoChild"

function ContextMemo() {
  const [state2, setState2] = useState(false)

  console.log("Main updated")

  return (
    <>
      <MemoContextProvider>
        <ContextMemoChild />
      </MemoContextProvider>
      <button onClick={() => setState2(!state2)}>Update Main Component</button>
    </>
  )
}

export default ContextMemo
