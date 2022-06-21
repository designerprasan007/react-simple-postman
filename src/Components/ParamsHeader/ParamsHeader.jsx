import React, {useState} from 'react'
import Headers from './Components/Headers/Headers'
import FormData from './Components/FormData/FormData'
const ParamsHeader = ({headersData, handleHeaderChange, handleAddRow, removeHeaderValue, handleFormData, jsonData}) => {
    const [currentPan, setCurrentPan] = useState("Headers")
    const handleCurrentPan = (event) =>{
        setCurrentPan(event.target.innerHTML)
    }
  return (
    <div className='p-3'>
        <div className='d-flex border'>
            <h3 onClick={(event) => handleCurrentPan(event)} className={currentPan === 'Headers' ? 'p-3 mx-2 border-end text-primary' : 'p-3 mx-2 border-end'}>Headers</h3>
            <h3 onClick={(event) => handleCurrentPan(event)} className={currentPan === 'JSON' ? 'p-3 mx-2 border-end text-primary' : 'p-3 mx-2 border-end'}>JSON</h3>
        </div>
        {
            currentPan === 'Headers' ? 
                <Headers  headersData={headersData}
                    handleHeaderChange={handleHeaderChange}
                    handleAddRow={handleAddRow}
                    removeHeaderValue={removeHeaderValue} /> : 
                <FormData handleFormData={handleFormData} jsonData={jsonData} />  
        }
    </div>
  )
}

export default ParamsHeader