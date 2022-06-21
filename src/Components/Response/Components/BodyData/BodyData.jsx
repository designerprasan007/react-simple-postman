import React from 'react'

const BodyData = ({bodyData}) => {
  return (
    <div>{
        JSON.stringify(bodyData.data)
    }</div>
  )
}

export default BodyData