import React, { useContext } from "react"

import { MemoContext } from "../contexts/MemoContext"

function ContextMemoChild() {
  const { changeValue } = useContext(MemoContext)

  console.log("Child updated")

  return <button onClick={changeValue}>Update Context</button>
}

export default ContextMemoChild
