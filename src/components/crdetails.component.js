import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import Addcard from './Addcard'

export default function Crdetails(props) {

  const {det,method}=props

  return (
    <>
      <div className='row'>
        <h4><center><u>Course Details</u></center></h4>
        <br></br>
        <div className='my-3'>
        <Addcard id={det.id} 
            name={det.name} 
            branch={det.email} 
            gender={det.studentGender} 
            year={det.studentYear}
            method={method}/>
        </div>
      </div>
    </>
  )
}
