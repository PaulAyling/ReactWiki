import React, { useReducer, useContext } from 'react';
import FunctionalContext from './functionalContext';
import FunctionalReducer from './functionalReducer';


import{
  PRINT_CONSOLE
} 
from '../types'

const FunctionalState = props =>{
  const initialState = {
    name:'bob'
  };
  // bring in contexts here
const [state, dispatch] = useReducer(FunctionalReducer, initialState)
//Get current state
const functionalContext = useContext(FunctionalContext);
const { current  } = functionalContext


  // Functions go here
const printConsole = () =>{
  dispatchEvent({
    type:PRINT_CONSOLE,
    payload:'printconsole'
  })
}

//Output Objects here
return (
  <FunctionalContext.Provider
value={{
  printConsole
}}>
    {props.children}
  </FunctionalContext.Provider>
)
};

export default FunctionalState;
