import React from 'react'

const Child = (Props) => {
   console.log(props.username);
  return (
    <div>Child
        <h1>{props.username}</h1>
    </div>
  )
}

export default Child