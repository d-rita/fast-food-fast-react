import ActionTypes from '../../actions/action';
import menuReducer from '../menuReducer';

describe('menuReducer', () => {
  const initialState = {
    menu: [],
    message: ''
  };

  it('should handle GET_MENU_SUCCESS', () => {
    const successAction = {
      type: ActionTypes.GET_MENU_SUCCESS,
      payload: [{
        food_name: 'liver',
        food_price: 15000,
        menu_id: 1
      }],
    };

    const successState = {
      menu: [{
        food_name: 'liver',
        food_price: 15000,
        menu_id: 1
      }],
      message: ''
    };

    expect(menuReducer(initialState, successAction)).toEqual(successState);
  });

  it('should handle GET_MENU_NONE', () => {
    const successAction = {
      type: ActionTypes.GET_MENU_NONE,
      payload: 'There is no menu',
    };

    const successState = {
      menu: [],
      message: 'There is no menu'
    };

    expect(menuReducer(initialState, successAction)).toEqual(successState);
  });

  it('should return the initial state', () => {
    const undefinedAction = {
      type: '',
      payload: {},
    };

    expect(menuReducer(initialState, undefinedAction)).toEqual(initialState);
  });
});
