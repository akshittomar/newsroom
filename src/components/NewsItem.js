import React from 'react'

const NewsItem = (props) => {

  return (
    <div className={`container my-2 border border-1 bg-${props.mode === 'dark' ? 'light' : 'dark'}`} >
      <div className={`card bg-${props.mode === 'dark' ? 'light' : 'dark'} text-${props.mode}`}  >
        <div className="card-header ">
          <strong>{props.sources}</strong>
        </div>
        <img className="card-img-top" src={props.imgUrl} alt='' />
        <div className="card-body" >
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text"><small className=" text-muted">By: {props.author} on {props.date}</small></p>
          <p className="card-text"><em>{props.description}</em></p>

          <a href={props.newsUrl} target={props.target} className={`btn btn-sm rounded-pill btn-${props.mode}`}>READ MORE</a>
        </div>
      </div>
    </div>
  )

}

export default NewsItem