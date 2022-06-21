import React, {useState} from 'react'
import BodyData from './Components/BodyData/BodyData'
import HeadersData from './Components/HeadersData/HeadersData'
import PrettyBytes from 'react-pretty-bytes';

const Response = ({responseData}) => {
    const [currentPan, setCurrentPan] = useState("Body")
    console.log(responseData)
    const handleActivePan = (event) =>{
        setCurrentPan(event.target.innerHTML)
    }
  return (
    <div className='p-2 border'>
        <div className='d-flex pt-2'>
            <p className='mx-2'>status: {responseData.status}</p>
            <p className='mx-2'>Time: {responseData.config.spentTime}ms</p>
            <p className='mx-2'>Size:</p> <PrettyBytes  bytes={responseData.config.totalSize} />
        </div>
        <div className='d-flex'>
            <div onClick={(event) => handleActivePan(event)} className={currentPan === 'Body' ? 'box p-3 text-primary border border-bottom-0' : 'box mx-3 p-3'}>
                Body
            </div>
            <div onClick={(event) => handleActivePan(event)} className={currentPan === 'Headers' ? 'box p-3 text-primary border border-bottom-0' : 'box mx-3 p-3'}>
                Headers
            </div>
        </div>
        {currentPan === 'Body' ? <BodyData bodyData={responseData} /> : <HeadersData headerData = {responseData.headers} />}
    </div>
  )
}

export default Response