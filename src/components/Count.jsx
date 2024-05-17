import React, { useContext } from 'react'
import useCountStore from '../store/CountStore'

const Count = () => {
  const {count} = useCountStore()
  return (
    <div>
      {count}
    </div>
  )
}

export default Count
