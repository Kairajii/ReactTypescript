import React,{useContext} from 'react'

import { UserContext } from '../useContextHook'

const Contact = () => {
  const data = useContext(UserContext)
  return (
    <>
          <h4>{data.name}</h4>
          <h1>{data.age}</h1>
     </>
  )
}

export default Contact