import React from 'react'

function CoustomInput(props) {
  return (
    <>
    <input type={props.type} placeholder={props.placeholder} className={props.className} />
    </>
  )
}

export default CoustomInput