import React,{useState, useEffect} from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser, faBook } from '@fortawesome/free-solid-svg-icons'
import Stdetails from './stdetails.component'
import Crdetails from './crdetails.component'


export default function Home() {
  
  const location = useLocation()
  const navigate = useNavigate();
  const [userData, setuserData] = useState([])
  const [useruiData, setuseruiData] = useState(
      <h4>Welcome {(location.state && location.state.name) || " admin"}</h4>)
  const [courseData, setcourseData] = useState([])

  useEffect(() => {
    if(!location.state){
      navigate("/sign-in")
    }

    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res=>res.json())
    .then(res=>setuserData(res))
    
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res=>res.json())
    .then(res=>setcourseData(res))
  },[])

  function studentFetch(){
    setuseruiData(<div className='row'>
      <h4><center><u>Student Data</u></center></h4>
      <br></br>
      {userData.map(x=>
        <div className='card my-3 mx-3 cardm' style={{width: "335px"}} key={x.id}
          onClick={()=>setuseruiData(<Stdetails det={x} method={"PUT"}/>)}>
          <br></br>
          <center>
            <FontAwesomeIcon icon={faCircleUser} size="5x"/><br></br>
            <br></br>
            {"ID:"}  {x.id} <br></br>
            {"Name:"}  {x.name} <br></br> 
            {"Email:"}  {x.email} <br></br>
          </center>
        </div>
      )}
    </div>)
  }

  function courseFetch(){
    setuseruiData(<div className='row'>
      <h4><center><u>Course Data</u></center></h4>
      <br></br>
      {courseData.map(x=>
        <div className='card my-3 mx-3 cardm' style={{width: "335px"}} key={x.id}
          onClick={()=>setuseruiData(<Crdetails det={x} method={"PUT"}/>)}>
          <br></br>
          <center>
            <FontAwesomeIcon icon={faBook} size="5x"/><br></br><br></br>
            {"Degree:"}  {"B.Tech"} <br></br>
            {"HOD Name:"}  {x.name} <br></br> 
            {"Seats:"}  {x.id} <br></br>
          </center>
        </div>
      )}
    </div>)
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
      <div className="container">
        <Link className="navbar-brand" to={'/admhome'}>
          <b>College Management System</b>
        </Link>
        <div className="collapse navbar-collapse nav-left" id="navbarTogglerDemo02">
          <ul className="navbar-nav ml-auto">
          <li className="nav-item mx-2">
              <button className="btn btn-light" onClick={()=>setuseruiData(<Stdetails det={{}} method={"POST"}/>)}>
                Add Student
              </button>
            </li>
            <li className="nav-item mx-2">
              <button className="btn btn-light" onClick={studentFetch}>
                Student Details
              </button>
            </li>
            <li className="nav-item mx-2">
              <button className="btn btn-light" onClick={courseFetch}>
                Course Details
              </button>
            </li>
            <li className="nav-item mx-3">
            <Link to={'/sign-in'}>
              <button className="btn btn-secondary">
                Logout
              </button>
            </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <br></br>
    {useruiData && <div className="auth-inner" style={{width:"1200px",marginTop:"75px"}}>
        {useruiData }
      </div>
    }
  </>
  )
}