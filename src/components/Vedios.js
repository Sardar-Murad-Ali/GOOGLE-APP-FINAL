import React from 'react'
import { useAppContext } from '../context/appContext'
import "./Vedios.css"
import CircularProgress from '@mui/material/CircularProgress';
// import ReactPlayer from 'react-player'

import { ReactVideoPlayer } from 'video-player-for-react'


const Vedios= () => {
  let {options,search,enter,switchha}=useAppContext()
  let [loading,setLoading]=React.useState(true)

let [vedios,setVedios]=React.useState([])

React.useEffect(()=>{
const start=async ()=>{
  setLoading(true)
  let data=await fetch(`https://google-search3.p.rapidapi.com/api/v1/video/q=${search}`,options)
  let realData=await data.json()
  setVedios(realData.results)
  setLoading(false)
}
start()
},[ enter])
if(loading){
  return <CircularProgress/>
}
  return(
    <div className={` ${switchha ?"toogle":null}`}>
        <div className='vedio__Grid section__padding'>
      {loading?'loading..':
        vedios.map((all)=>{
          console.log(all.link)
          return(

            <div className='single__All'>
             
              <video controls={true}>
                 <source src={all?.link} type="video/mp4"/>
          </video>
      


            <p className='p__Sans' style={{fontSize:"13px"}}>{all?.title.slice(0,30)}</p>
          </div>
            )
        })
      }
    </div>
    </div>
  )
}

export default Vedios
