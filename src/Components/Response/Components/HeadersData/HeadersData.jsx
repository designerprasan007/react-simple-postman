import React from 'react'

const HeadersData = ({headerData}) => {
    console.log(headerData)
  return (
    <div>{Object.entries(headerData).map(([keyName, index]) =>{
        return(
            <p key={index}>{keyName}: {headerData[keyName]}</p>
        )
    })

    }</div>
  )
}

export default HeadersData