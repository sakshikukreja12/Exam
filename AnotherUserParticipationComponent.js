import React from 'react'
import { useState } from 'react'

function AnotherUserParticipationComponent() {
    const initialCount =0
    const [count, setCount] =useState(initialCount)

    const handleClick = ()=>{
    }
  return (
    <div>
         Count:{count}
            <button onClick={()=>setCount(initialCount)}>Reset</button>
        <button type="button" onClick={handleClick}>participate</button>

    </div>

  )
}

export default AnotherUserParticipationComponent