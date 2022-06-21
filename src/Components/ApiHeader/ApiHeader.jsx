import React from 'react'
import './ApiHeader.css'

const ApiHeader = ({hitApi, handleApiCall, sendRequest}) => {
  return (
    <div className='d-flex'>
        <div className='selectInput'>
            <select className='form-select p-3' onChange={(event) => handleApiCall(event, true)} defaultValue={hitApi.method}>
                <option value="GET">GET</option>
                <option value="POST">POST</option>
                <option value="PUT">PUT</option>
                <option value="PATCH">PATCH</option>
                <option value="DELETE">DELETE</option>
            </select>
        </div>
        <div className='w-100'>
            <input className='form-control p-3' onChange={(event) => handleApiCall(event)} value={hitApi.apiValue} type="text" />
        </div>
        <div>
            <button className='btn btn-success btn-lg p-3' onClick={sendRequest}>Send</button>
        </div>
    </div>
  )
}

export default ApiHeader