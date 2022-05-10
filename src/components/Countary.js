import React from 'react'
import { Link } from 'react-router-dom';
const Countary = (props) => {
  const { setcountry } = props

  return (
    <>

      <div className="dropdown">
        <button className={`btn btn-${props.mode === 'dark' ? 'light' : 'dark'} border border-1 border-${props.mode === 'dark' ? 'dark' : 'light'} dropdown-toggle`} type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
          Country
        </button>
        <ul className={`dropdown-menu bg-${props.mode === 'dark' ? 'light' : 'dark'}`} aria-labelledby="dropdownMenuButton1">

          <li ><Link className={`dropdown-item bg-${props.mode === 'dark' ? 'light' : 'dark'} text-${props.mode === 'dark' ? 'dark' : 'light'}`} onClick={() => setcountry(100)} to="/india">India</Link></li>
          <li ><Link className={`dropdown-item bg-${props.mode === 'dark' ? 'light' : 'dark'} text-${props.mode === 'dark' ? 'dark' : 'light'}`} onClick={() => setcountry(101)} to="/america">America</Link></li>
          <li ><Link className={`dropdown-item bg-${props.mode === 'dark' ? 'light' : 'dark'}  text-${props.mode === 'dark' ? 'dark' : 'light'}`} onClick={() => setcountry(102)} to="/russia">Russia</Link>
          </li>
          <li ><Link className={`dropdown-item bg-${props.mode === 'dark' ? 'light' : 'dark'} text-${props.mode === 'dark' ? 'dark' : 'light'}`} onClick={() => setcountry(103)} to="/canada">Canada</Link>
          </li>
          <li ><Link className={`dropdown-item bg-${props.mode === 'dark' ? 'light' : 'dark'} text-${props.mode === 'dark' ? 'dark' : 'light'}`} onClick={() => setcountry(104)} to="/japan">Japan</Link>
          </li>
          <li ><Link className={`dropdown-item bg-${props.mode === 'dark' ? 'light' : 'dark'} text-${props.mode === 'dark' ? 'dark' : 'light'}`} onClick={() => setcountry(105)} to="/emirates">UAE</Link>
          </li>
          <li ><Link className={`dropdown-item bg-${props.mode === 'dark' ? 'light' : 'dark'} text-${props.mode === 'dark' ? 'dark' : 'light'}`} onClick={() => setcountry(106)} to="/australia">Australia</Link>
          </li>
          <li ><Link className={`dropdown-item bg-${props.mode === 'dark' ? 'light' : 'dark'} text-${props.mode === 'dark' ? 'dark' : 'light'}`} onClick={() => setcountry(107)} to="/bulgaria">Bulgaria</Link>
          </li>

        </ul>
      </div>
    </>
  )
}
export default Countary;