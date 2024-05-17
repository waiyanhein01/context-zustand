// initial State

import { useSyncExternalStore } from "react"
import { create } from "zustand"

const initialState = {
    count : 0,
}

// Store
const useCountStore = create((set) => {
    return {
        ...initialState,
        increment : () => set((oldState) => {
            return {
                count : oldState.count + 1,
            }
        }),
        decrement : () => set((oldState) => {
            return {
                count : oldState.count - 1,
            }
        })
    }
})

export default useCountStore;