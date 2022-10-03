import "./Headers.css"
import React from 'react'
import GoogleIcon from '@mui/icons-material/Google';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import TextField from '@mui/material/TextField'
import ClearIcon from '@mui/icons-material/Clear';
import Switch from '@mui/material/Switch';
import { useAppContext } from "../context/appContext";
const label = { inputProps: { 'aria-label': 'Switch demo' } };




const Headers = () => {

    let {handleChangeContext,del,search, keyDown,deleteFromLocalStorage,switchha, enterePressed, switchfun}=useAppContext()
    function handleSwitch(e){
        // console.log(e.target.checked)
        switchfun()
    }
    
    function handleChange(event){
       handleChangeContext({value:event.target.value,name:event.target.name})
    }

    function deletefun(){
        del()
        deleteFromLocalStorage()
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Enter') {
        keyDown();
        enterePressed()
      }
    }
  return (
    // <div className='headers__Main'>
    <div className={`headers__Main `}>
      <div className='headers__Wrapper1'>
        <div  className="icons">

        <GoogleIcon className="google"/>
        <SearchIcon className='search'/>
  
        </div>

        <TextField id="standard-basic" value={search} label="Search" variant="standard" name="search"  onKeyDown={handleKeyDown} onChange={handleChange}/>    
        <ClearIcon className="close" onClick={deletefun}/>
 

       </div>
       <div className='headers__Wrapper2 ' style={{display:"flex"}}>
        {/* <p className="p__Sans" style={{marginTop:"20px"}}>Toogle</p> */}
       {/* <Switch className="switch" {...label} defaultChecked onChange={handleSwitch}/> */}

       </div>

       
    </div>
  )
}

export default Headers
