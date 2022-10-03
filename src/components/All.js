// import { CircularProgress } from '@mui/material'

import CircularProgress from '@mui/material/CircularProgress';
import { responsiveProperty } from '@mui/material/styles/cssUtils';
import React from 'react'
import { useAppContext } from '../context/appContext'
import "./News.css"
import Typography from '@mui/material/Typography';

const All = () => {
  
    let {options,search, enterePressed,enter}=useAppContext()
    let [loading,setLoading]=React.useState(true)

  let [news,setNews]=React.useState([])

  React.useEffect(()=>{
    setLoading(true)
  const start=async ()=>{
    setLoading(true)
    let data=await fetch(`https://google-search3.p.rapidapi.com/api/v1/search/q=${search}`,options)
    let realData=await data.json()
    setNews(realData.results)
    setLoading(false)
  }
  start()
  },[ enter])
  console.log(news)

  if(loading){
    return <CircularProgress/>
  }
  return (
    <div className='news__Grid section__padding'>
      {loading?'loading..':
        news.map((all)=>{
          return(

            <div className='single__All'>
            {/* <h2 className='h__Cormorant title' >{all?.title}</h2> */}
            <Typography variant='h5'>{all?.title}</Typography>
            <Typography variant='h7' className='p__Sans links'><a href={all?.link} target="__blank">{all.link.slice(0,50)}...</a></Typography>
          </div>
            )
        })
      }
    </div>
  )
  
}

export default All
