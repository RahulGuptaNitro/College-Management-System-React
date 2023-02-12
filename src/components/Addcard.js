import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import {Form, Button} from "react-bootstrap"

export default function Addcard(props) {

  let uri="http://192.168.55.91:8080/students/"+props.id
  let btnval=""

  function upd(event){
    if (btnval=="update"){
        const data = new FormData(event.target);
        const value = Object.fromEntries(data.entries());
        fetch(uri,{method:props.method ,headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(value)})
    }
    else{
        console.log(btnval)
        fetch(uri, {method: "DELETE"})
        .then(res=>res.json())
    }
  }

  return (
    <>
    <Form method={props.method} onSubmit={upd}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" name='studentName' placeholder="Enter Name" defaultValue={props.name} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Branch</Form.Label>
        <Form.Control type="text" name="studentBranch" placeholder="Enter Branch"  defaultValue={props.branch}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Gender</Form.Label>
        <Form.Control type="text" name="studentGender" placeholder="Enter Gender"  defaultValue={props.gender}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Year</Form.Label>
        <Form.Control type="text" name="studentYear" placeholder="Enter Year"  defaultValue={props.year}/>
      </Form.Group>
      <br></br>
      <Button variant="primary" type="submit" onClick={()=>{btnval="update"}}>
        Update Details
      </Button>
      <br></br>
      <br></br>
      { props.method=="PUT" &&
        <Button variant="danger" type="submit" onClick={()=>{btnval="delete"}}>
          Delete Details
        </Button> }
    </Form>
    </>
  )
}
