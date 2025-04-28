import React from 'react'

function CoustomButton(props) {
  return (
    <button type={props.type} className={props.className}>{props.name}</button>
  )
}

export default CoustomButton