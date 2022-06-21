import React from 'react'

const FormData = ({handleFormData, jsonData}) => {
  return (
    <div>
         <textarea className="form-control" onChange={(event) => handleFormData(event)} value={jsonData} placeholder='{key:"key", value:"value"}'  rows="10"></textarea>
    </div>
  )
}

export default FormData