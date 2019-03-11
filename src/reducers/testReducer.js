import { TEST_ACTION } from '../actions/action';

const initialState = {};

const testReducer = (state = initialState, action) => {
  switch (action.type) {
    case TEST_ACTION:
      return state;
    default:
      return state;
  }
};

export default testReducer;
