import React from 'react'
import {Dropdown} from 'react-bootstrap';
import { BrowserRouter as Routes, Route, Link, useNavigate  } from 'react-router-dom'
import { useState, useEffect} from 'react';

export default function Login()  {

  const [userData, setuserData] = useState([])
  const [roleval,setroleval]=useState("Student");
  const navigate = useNavigate("/");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res=>res.json())
    .then(res=>setuserData(res))
  },[])

  window.onpopstate =()=>{
    navigate("/sign-in")
  }

  function sel(event){
      setroleval(event);
  }

  const handleSubmit = (event) => {
      event.preventDefault();
      if (roleval==="Admin" && validateAdmin(event.target[1].value,event.target[2].value)){
        navigate('/admhome', {state:{id:0,name:event.target[1].value,loggedin:true}})
      }
      else if(roleval==="Student" && validateStudent(event.target[1].value,event.target[2].value)){
        navigate('/sthome', {state:{id:event.target[1].value,name:event.target[2].value,loggedin:true}})
      }
      else{
        console.log("Invalid Credentials")
      }
    };      

  function validateAdmin(x,y){
      if (x==="Admin" && y==="admin1234")
        return true
      return false
  }

  function validateStudent(x,y){
    let flag=false
    userData.map((val)=>{
      if (x==val.id && y==val.username){
        flag=true
      }
    })
    return flag
  }

  return (
    
    <div className="auth-wrapper">
    <div className="auth-inner">
    <form onSubmit={handleSubmit} >
      <h3>Sign In</h3>
      <div className="mb-3">
      <Dropdown onSelect={sel}>
        <Dropdown.Toggle className="droprole" id="dropdown-basic">
          {roleval}
        </Dropdown.Toggle>
        <Dropdown.Menu style={{width:"340px"}}>
          <Dropdown.Item eventKey='Student'>Student</Dropdown.Item>
          <Dropdown.Item eventKey='Admin'>Admin</Dropdown.Item>
          <Dropdown.Item eventKey='Faculty'>Faculty</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      </div>
      <div className="mb-3">
        <label>Username</label>
        <input type="text" className="form-control" placeholder="Enter username" required/>
      </div>
      <div className="mb-3">
        <label>Password</label>
        <input type="password" className="form-control" placeholder="Enter password" required/>
      </div>
      <div className="mb-3">
      </div>
      <div className="d-grid">
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </div>
    </form>
    </div>
    </div>
  ) 
}