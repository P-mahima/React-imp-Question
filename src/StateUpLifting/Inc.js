import React from 'react'

const Inc = (props) => {
  return (
    <div>
      <h2>{props.value.data}</h2>
      <button onClick={()=> props.value.setData(props.value.data + 1)}>Click+</button>
    </div>
  )
}

export default Inc