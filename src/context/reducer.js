import { accordionActionsClasses } from '@mui/material'
import { act } from 'react-dom/test-utils'
import {
  CHANGE__FUNCTION,
  DELETE_SEARCH,
  ENTER_PRESSED,
  HANDLE_SWITCH
} from './actions'



const reducer = (state, action) => {

  if(action.type===CHANGE__FUNCTION){
    return{
      ...state,
      [action.payload.name]:action.payload.value
    }
  }
  if(action.type===DELETE_SEARCH){
    return{
      ...state,
      search:""
    }
  }

  if(action.type===ENTER_PRESSED){
    return{
      ...state,
      enter:!state.enter
    }
  }
 
  if(action.type===HANDLE_SWITCH){
    return{
      ...state,
      switchha :!state.switchha 
    }
  }


  throw new Error(`no such action : ${action.type}`)
}

export default reducer
