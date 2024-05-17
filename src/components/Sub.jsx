import React, { useContext } from 'react'
import useCountStore from '../store/CountStore'

const Sub = () => {
  const {decrement} = useCountStore()
  return (
    <div>
      <button onClick={decrement}>Sub</button>
    </div>
  )
}

export default Sub
