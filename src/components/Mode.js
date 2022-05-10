import React from 'react'

const Mode = (props) => {

  return (
    <div>
      <button type="button-sm " className={`btn border border-1 border-${props.mode === 'dark' ? 'dark' : 'light'} btn-${props.mode === 'dark' ? 'light' : 'dark'}`} >
        <div className={`form-check form-switch text-${props.mode === 'dark' ? 'dark' : 'light'}`}>
          <input className={`form-check-input btn-${props.mode === 'dark' ? 'dark' : 'light'} `} type="checkbox" role="switch" onClick={props.toggel} id="flexSwitchCheckDefault" />
          <label className={`form-check-label btn} `} htmlFor="flexSwitchCheckDefault" style={{ paddingTop: '' }}>{props.mode === 'dark' ? 'DAY .' : 'NIGHT'}</label>
        </div>
      </button>
    </div>
  )
}
export default Mode;