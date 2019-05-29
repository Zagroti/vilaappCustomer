import { SEND_NUMBER } from "../actions/actionTypes";
  
  const initialState = {
    number: null
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case SEND_NUMBER:
        return {
          ...state,
          number: action.number
        };

      
      default:
        return state;
    }
  };
  
  export default reducer;