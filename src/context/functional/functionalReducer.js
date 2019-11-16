import{
PRINT_CONSOLE
} from '../types.js'

export default (state, action) =>{
  switch (action.type){
    case PRINT_CONSOLE:
      return {
        ...state,
        placeholder:null
      };
      default:
        return state;
  }
}