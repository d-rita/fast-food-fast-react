import ActionTypes from '../actions/action';


const initialState = {
  menu: [],
  message: ''
};

const menuReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_MENU_SUCCESS:
      return {
        ...state,
        menu: action.payload
      };
    case ActionTypes.GET_MENU_NONE:
      return {
        ...state,
        message: action.payload
      };
    default:
      return state;
  }
};

export default menuReducer;
