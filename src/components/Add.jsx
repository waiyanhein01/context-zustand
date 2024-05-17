import React, { useContext } from 'react'
import useCountStore from '../store/CountStore'

const Add = () => {
  const {increment} = useCountStore();
  return (
    <div>
      <button onClick={increment}>Add</button>
    </div>
  )
}

export default Add
