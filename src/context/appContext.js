import React, { useReducer, useContext } from 'react'

import reducer from './reducer'

import {
   CHANGE__FUNCTION,
   DELETE_SEARCH,
   ENTER_PRESSED,
   HANDLE_SWITCH
} from './actions'
import { type } from '@testing-library/user-event/dist/type'
import { Dialpad } from '@mui/icons-material'

const token = localStorage.getItem('token')
const user = localStorage.getItem('user')

let searchLocalStorage=localStorage.getItem("search")
const initialState = {
     search:searchLocalStorage?searchLocalStorage:"",
     
     options:{
      method: 'GET',
      headers: {
        'X-User-Agent': 'desktop',
        'X-Proxy-Location': 'EU',
        'X-RapidAPI-Key': '81e03cfb2amsh9eb407bfb2869bbp143034jsncdc76b7f77bf',
        'X-RapidAPI-Host': 'google-search3.p.rapidapi.com'
      }
    },

    enter:false,

    switchha :true
}

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  function handleChangeContext({value,name}){
    dispatch({type:CHANGE__FUNCTION,payload:{value,name}})
  }

  function del(){
    dispatch({type:DELETE_SEARCH})
  }

  function keyDown(){
    localStorage.setItem("search",state.search)
  }


  function deleteFromLocalStorage(){
    localStorage.removeItem("search")
  }

  function enterePressed(){
    dispatch({type:ENTER_PRESSED})
  }

  function switchfun(){
    dispatch({type:HANDLE_SWITCH})
  }


  

  return (
    <AppContext.Provider
      value={{
        ...state,
        handleChangeContext,
        del,
        keyDown,
        deleteFromLocalStorage,
        enterePressed,
        switchfun
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

const useAppContext = () => {
  return useContext(AppContext)
}

export { AppProvider, initialState, useAppContext }
