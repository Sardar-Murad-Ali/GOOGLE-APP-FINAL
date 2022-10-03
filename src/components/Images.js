import React from 'react'
import { useAppContext } from '../context/appContext'
import "./Images.css"
import CircularProgress from '@mui/material/CircularProgress';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const Images= () => {
  let {options,search,enter,switchha}=useAppContext()
  let [loading,setLoading]=React.useState(true)

let [images,setImages]=React.useState([])

React.useEffect(()=>{
const start=async ()=>{
  setLoading(true)
  let data=await fetch(`https://google-search3.p.rapidapi.com/api/v1/image/q=${search}`,options)
  let realData=await data.json()
  setImages(realData.image_results)
  setLoading(false)
}
start()
},[ enter])


if(loading){
  return <CircularProgress/>
}


  return(
    <div className={` ${switchha ?"toogle":null}`}>
        <div className='image__Grid section__padding'>
      {loading?'loading..':
        images.map((all)=>{
          return(

          //   <div className='single__All'>
          //   <img src={all?.image?.src} style={{height:"150px",width:"150px"}}/>
          //   <p className='p__Sans links'><a href={all?.link?.href} target="__blank">{all?.link?.href.slice(0,50)}...</a></p>
          //   <p className='p__Sans' style={{fontSize:"13px"}}>{all?.link?.title}</p>
          // </div>
          <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={all?.image?.src}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h7" component="div">
        <a href={all?.link?.href} target="__blank" style={{color:"white",textDecoration:"none"}}>{all?.link?.href.slice(0,50)}...</a>
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {all?.link?.title}
        </Typography>
      </CardContent>
    </Card>
            )
        })
      }
    </div>
    </div>
  )
}

export default Images
