import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import loginAction from '../loginAction';
import ActionTypes from '../action';


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const { BASE_URL } = process.env;
const loginUrl = `${BASE_URL}/auth/login`;

describe('login actions', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('handles LOGIN_SUCCESS action', () => {
    fetchMock.postOnce(loginUrl, {
      body: {
        token: '123456',
        message: ''
      },
      headers: { 'content-type': 'application/json' },
    });

    const expectedAction = [{
      type: ActionTypes.LOGIN_SUCCESS,
      payload: {
        token: '123456',
        message: ''
      },
    }];

    const validData = {
      username: 'newuser',
      password: 'N0vember',
    };

    const store = mockStore();

    return store.dispatch(loginAction(validData)).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });

  it('handles LOGIN_Fail action', () => {
    fetchMock.postOnce(loginUrl, {
      body: {
        message: ''
      },
      headers: { 'content-type': 'application/json' },
    });

    const expectedAction = [{
      type: ActionTypes.LOGIN_FAIL,
      payload: ''
    }];

    const validData = {
      username: 'newuser',
      password: 'N0vember',
    };

    const store = mockStore();

    return store.dispatch(loginAction(validData)).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });

  it('catches error instances', () => {
    fetchMock.postOnce(loginUrl, {
      body: undefined,
      headers: { 'content-type': 'application/json' },
    });

    const expectedAction = [];

    const validData = {};

    const store = mockStore();

    return store.dispatch(loginAction(validData)).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
});
