import { createContext, useMemo, useState } from "react"

export const MemoContext = createContext(null)

function MemoContextProvider({ children }) {
  const [state1, setState1] = useState(false)

  const value = {
    state1,
    changeValue: () => setState1(!state1),
  }

  return <MemoContext.Provider value={value}>{children}</MemoContext.Provider>
}

export default MemoContextProvider
