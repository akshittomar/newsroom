import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = (props) => {

  return (

    <div>
      <nav className={`navbar fixed-top navbar-expand-lg border border-5 border-${props.mode === 'dark' ? 'dark' : 'secondary'} navbar-${props.mode === 'dark' ? 'light' : 'dark'}  bg-${props.mode === 'dark' ? 'light' : 'dark'}`} >
        <div className="container-fluid ">
          <Link className={`navbar-brand text-light border border-3 border-${props.mode === 'dark' ? 'dark' : 'light'} `} to="/" style={{ backgroundColor: 'blue' }}><strong>NEWS-ROOM</strong></Link>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>




          {<div className="collapse navbar-collapse" id="navbarSupportedContent">

            <ul className="navbar-nav me-auto mb-2 mb-lg-0">


              <li ><Link className="nav-link active" aria-current="page" to={`/${props.country}/business`}>Business</Link></li>
              <li ><Link className="nav-link active" aria-current="page" to={`/${props.country}/entertainment`}>Entertainment</Link></li>
              <li ><Link className="nav-link active" aria-current="page" to={`/${props.country}/general`}>General</Link></li>
              <li ><Link className="nav-link active" aria-current="page" to={`/${props.country}/health`}>Health</Link></li>
              <li ><Link className="nav-link active" aria-current="page" to={`/${props.country}/science`}>Science</Link></li>
              <li ><Link className="nav-link active" aria-current="page" to={`/${props.country}/sports`}>Sports</Link></li>
              <li ><Link className="nav-link active" aria-current="page" to={`/${props.country}/technology`}>Technology</Link></li>
            </ul>
          </div>}


        </div>
      </nav>

    </div>
  )
}

export default Navbar
