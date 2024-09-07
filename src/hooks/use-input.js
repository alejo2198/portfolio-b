import {useReducer} from 'react'

const initialInputState = {
  value:'',
  isTouched:false
}

const inputStateReducer = (state,action) => {
  if(action.type === 'INPUT'){
    return{
      value:action.value,
      isTouched:state.isTouched
    }

  }if(action.type === 'BLUR'){
    return{
      value:state.value,
      isTouched:true
    }
    
  }if(action.type === 'RESET'){
    return initialInputState
  }
  return initialInputState
}

const useInput = (validateValue) =>{

  const [inputState,dispatchInput] = useReducer(inputStateReducer,initialInputState)
 

  const valueIsValid = validateValue(inputState.value);
  const hasError = !valueIsValid && inputState.isTouched;

  const inputBlurHandler = (event) => {
    dispatchInput({type:'BLUR'})
  }

  const valueChangeHandler = (event) => {
    dispatchInput({type:'INPUT',value:event.target.value})
  }

  const reset = () => {
    dispatchInput({type:'RESET'})
  }

  return {
    value:inputState.value,
    isValid:valueIsValid,
    hasError,
    inputBlurHandler,
    valueChangeHandler,
    reset
  }
}

export default useInput