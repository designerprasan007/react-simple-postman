import React from 'react'

const Headers = ({headersData, handleHeaderChange, handleAddRow, removeHeaderValue}) => {
    return (
    <div>
        {headersData.map((header, index) =>{
            return(
                <div className='row' key={index}>
                    <div className='col-5'>
                        <input className='form-control' name='key' onChange={(event) => handleHeaderChange(event, index)} type="text" value={header.key} />
                    </div>
                    <div className='col-5'>
                        <input className='form-control' name='value' onChange={(event) => handleHeaderChange(event, index)} type="text" value={header.value} />
                    </div>
                    <div className='col-2'>
                        <button className='btn btn-danger' onClick={() => removeHeaderValue(index)}>X</button>
                    </div>
                </div>
            )
        })}
        <button className='btn btn-success' onClick={handleAddRow}>+</button>
    </div>
  )
}

export default Headers