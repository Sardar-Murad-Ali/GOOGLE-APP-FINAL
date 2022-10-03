import React from 'react'
import { useAppContext } from '../context/appContext'
import "./News.css"
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
// import CircularProgress from '@mui/material/CircularProgress';
const News = () => {
  let {options,search,switchha, enterePressed,enter}=useAppContext()
  let [loading,setLoading]=React.useState(true)

let [news,setNews]=React.useState([])

React.useEffect(()=>{

setLoading(true)
const start=async ()=>{
  setLoading(true)
  let data=await fetch(`https://google-search3.p.rapidapi.com/api/v1/news/q=${search}`,options)
  let realData=await data.json()
  setNews(realData.entries)
  setLoading(false)
}
start()
},[ enter])


if(loading){
  return <CircularProgress/>
}
  return(
    <div >
      
       
         {loading? <CircularProgress />: 
       <div className='news__Grid section__padding'>
       { news.map((all)=>{
          return(

            <div className='single__All'>
            <Typography variant='h5' className='h__Cormorant title' >{all?.title}</Typography>
            <Typography variant='h7' className='p__Sans links'><a href={all?.link} target="__blank">{all.link.slice(0,50)}...</a></Typography>
          </div>
            )
        })
      }
    </div>
         }
    </div>
  )
}

export default News
