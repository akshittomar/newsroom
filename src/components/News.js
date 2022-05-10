import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import Countary from './Countary';
import Mode from './Mode';

const News = (props) => {
  const [articles, setarticles] = useState([]);
  const [loading, setloading] = useState(false);
  const [page, setpage] = useState(1);
  const [totalResults, settotalResults] = useState(0);


  document.title = `${props.category.charAt(0).toUpperCase() + props.category.slice(1)} -NewsRoom`

  const change = async (move) => {
    let url = `https:newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=${props.apikey}&page=${page + (move)}&pageSize=${props.pageSize}`;

    setloading(true);
    let data = await fetch(url);
    let parseData = await data.json();

    setarticles(parseData.articles);
    setloading(false);
    settotalResults(parseData.totalResults);

  }
  useEffect(() => {
    
    change(0);
    
    // eslint-disable-next-line
  }, [])


  const handelNext = async () => {

    change(1);
    setpage(page + 1);


  }
  const handelPrevious = async () => {

    change(-1);
    setpage(page - 1);

  }



  return (
    <>

      <div className={`container  bg-${props.mode === 'dark' ? 'light' : 'dark'}`} id="pagehead" style={{ maxWidth: '2000px' }} >

        <hr></hr>
        <h1 className={`text-allign text-${props.mode}`} style={{ paddingTop: '60px', paddingLeft: '130px', }}>NEWS-ROOM Top {props.category.charAt(0).toUpperCase() + props.category.slice(1)} Headlines</h1>

        <div className='text-center'>
          {loading && <Spinner />}

        </div>
        <div className={`position-fixed text-${props.mode}`} >
          <hr></hr>
          {!loading && <Countary mode={props.mode} setcountry={props.countrySetter} />}
          <hr></hr>
          {!loading && <Mode mode={props.mode} toggel={props.onClic} />}

          <hr></hr>
        </div>



        <div className="row " style={{ paddingLeft: '130px' }}>
          {!loading && articles.map((element) => {
            return <div className="col-md-4" key={element.url !== null ? element.url : element.title}>
              <NewsItem mode={props.mode} title={element.title !== null ? element.title : "THE BREAKING NEWS IS JUST HERE"} description={element.description !== null ? element.description : ""}
                imgUrl={element.urlToImage !== null ? element.urlToImage : "https://th.bing.com/th/id/R.8de5643b121efcc3f1c6a38cdea894d6?rik=8FUvV5BBB%2bJYrg&riu=http%3a%2f%2fblog.thempowergroup.com%2fwp-content%2fuploads%2f2016%2f08%2fphotodune-3778250-exciting-news-xs.jpg&ehk=d4JsWNfZZI0q9E52CX1LAgGEOUE7EjnN3L3pWPcM%2btE%3d&risl=&pid=ImgRaw&r=0"}
                newsUrl={element.url !== null ? element.url : "/"} target={element.url !== null ? '_blank' : '_self'} author={element.author !== null ? element.author : 'Uknown Author'}
                date={element.publishedAt !== null ? element.publishedAt.slice(0, 10) + ' at ' + element.publishedAt.slice(11, 19) + 'GMT' : ''} sources={element.source.name !== null ? element.source.name : 'Unkown Sources'} />
            </div>
          })}


        </div>

        {!loading &&
          <div className='container d-flex justify-content-between'>

            <button type="button" disabled={page <= 1} onClick={handelPrevious} className={`btn border border-1 border-${props.mode === 'dark' ? 'dark' : 'light'} btn-${props.mode === 'dark' ? 'light' : 'dark'}`}>  &larr;Previous</button>
            <button type="button" disabled={page + 1 > Math.ceil(totalResults / props.pageSize)} onClick={handelNext} >Next &rarr;</button>

          </div>
        }

      </div>
    </>

  )

}

export default News