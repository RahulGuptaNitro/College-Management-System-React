import React,{useState, useEffect} from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Link, useNavigate, useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser} from '@fortawesome/free-solid-svg-icons'

export default function Sthome() {

    const [userData, setuserData] = useState([])
    const [useruiData, setuseruiData] = useState(<h4>Welcome Student</h4>)
    const location= useLocation()
    const [student, setstudent] = useState({})

    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/users")
      .then(res=>res.json())
      .then(res=>setuserData(res))
      .then(getStudent())
      .then(getui())
    },[])

    function getStudent(){
      userData.map((val)=>{ 
        if (location.state.id==val.id){
            setstudent(val)
        }
      })
    }

    function getui(){
        //console.log(student)
      setuseruiData(
        <div className='row'>
        <h4><center><u>Student Data</u></center></h4>
        <br></br>
        {
            <div className='card my-3 mx-3' style={{width: "1080px",hover: {transform: "scale(1.2)"}}}>
            <br></br>
            <center>
                <FontAwesomeIcon icon={faCircleUser} size="5x"/><br></br>
                <br></br>
                {"ID:"}  {student.id} <br></br>
                {"Name:"}  {student.name} <br></br> 
                {"Email:"}  {student.email} <br></br>
            </center>
            </div>
        }
        </div>
      )
    }

    return (
        <>
          <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={'/sthome'}>
              <b>College Management System</b>
            </Link>
            <div className="collapse navbar-collapse nav-left" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
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
            {useruiData}
          </div>
        }
      </>
      )
}
