import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import LineWeightIcon from '@mui/icons-material/LineWeight';
import ImageIcon from '@mui/icons-material/Image';
import CameraAltIcon from '@mui/icons-material/CameraAlt';

import "./Categories.css"
import { Link,useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/appContext';




const Categories = () => {
  let navigate=useNavigate()

  let {search,switchha}=useAppContext()
  let [state,setState]=React.useState("All")
  let arr=[
   
    {
      icons:<LineWeightIcon/>,
      text:"News"
    },
    {
      icons:<ImageIcon/>,
      text:"Image"
    },
    {
      icons:<CameraAltIcon/>,
      text:"Vedio"
    },
  ]

  function iconsHandler(text){
     setState(text)
  }

  console.log(state)
  return (
    <div className={`category__Main `}>
      <Link to="/">
      <div style={{cursor:"pointer"}} onClick={()=>iconsHandler("All")}   className={`single ${state==="All" ? "active" : ""}`}>
                 <h1 > <SearchIcon/></h1>
                  <p className='p__Cormorant' >All</p>
          </div>
      </Link>
      {
        arr.map((all)=>{
          return (
       <Link to={`/${all.text}`}>
          <div style={{cursor:"pointer"}} onClick={()=>iconsHandler(all.text)}   className={`single ${all.text===state ? "active" : ""}`}>
                 <h1 > {all.icons}</h1>
                  <p className='p__Cormorant' >{all.text}</p>
          </div>
       </Link>
        )
        })
      }
    </div>
  )
}

export default Categories
