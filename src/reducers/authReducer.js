import ActionTypes from '../actions/action';

const initialState = {
  isSuccessful: false,
  error: '',
  token: '',
  message: ''
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.REGISTER_SUCCESS:
      return {
        ...state,
        isSuccessful: true,
        message: action.payload
      };
    case ActionTypes.REGISTER_FAIL:
      return {
        ...state,
        isSuccessful: false,
        error: action.payload
      };
    case ActionTypes.LOGIN_SUCCESS: {
      return {
        ...state,
        isSuccessful: true,
        message: action.payload.message,
        token: action.payload.token
      };
    }
    case ActionTypes.LOGIN_FAIL:
      return {
        ...state,
        isSuccessful: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default authReducer;
