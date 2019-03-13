import authReducer from '../authReducer';
import ActionTypes from '../../actions/action';

describe('authReducer', () => {
  const initialState = {
    isSuccessful: false,
    token: '',
    error: '',
  };

  it('should handle REGISTER_SUCCESS', () => {
    const successAction = {
      type: ActionTypes.REGISTER_SUCCESS,
      payload: 'New user added',
    };

    const successState = {
      isSuccessful: true,
      token: '',
      error: '',
      message: 'New user added'
    };

    expect(authReducer(initialState, successAction)).toEqual(successState);
  });

  it('should handle REGISTER_FAIL', () => {
    const failAction = {
      type: ActionTypes.REGISTER_FAIL,
      payload: 'Password must be between 6-9 characters',
    };

    const failState = {
      isSuccessful: false,
      token: '',
      error: 'Password must be between 6-9 characters'
    };

    expect(authReducer(initialState, failAction)).toEqual(failState);
  });

  it('should handle LOGIN_SUCCESS', () => {
    const successAction = {
      type: ActionTypes.LOGIN_SUCCESS,
      payload: {
        message: 'Logged in as client',
        token: '123456'
      },
    };

    const successState = {
      isSuccessful: true,
      token: '123456',
      error: '',
      message: 'Logged in as client'
    };

    expect(authReducer(initialState, successAction)).toEqual(successState);
  });

  it('should handle LOGIN_FAIL', () => {
    const successAction = {
      type: ActionTypes.LOGIN_FAIL,
      payload: 'User must sign up before logging in',
    };

    const successState = {
      isSuccessful: false,
      token: '',
      error: 'User must sign up before logging in',
    };

    expect(authReducer(initialState, successAction)).toEqual(successState);
  });

  it('should return the initial state', () => {
    const undefinedAction = {
      type: '',
      payload: {},
    };

    expect(authReducer(initialState, undefinedAction)).toEqual(initialState);
  });
});
