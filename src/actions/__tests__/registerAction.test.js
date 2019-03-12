import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import registerAction from '../registerAction';
import ActionTypes from '../action';


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const { BASE_URL } = process.env;
const registerUrl = `${BASE_URL}/auth/signup`;

describe('sign up actions', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('handles REGISTER_SUCCESS action', () => {
    fetchMock.postOnce(registerUrl, {
      body: { message: 'New user added' },
      headers: { 'content-type': 'application/json' },
    });

    const expectedAction = [{
      type: ActionTypes.REGISTER_SUCCESS,
      payload: 'New user added',
    }];

    const validData = {
      email: 'user@user.com',
      username: 'newuser',
      password: 'N0vember',
      admin: false
    };

    const store = mockStore();

    return store.dispatch(registerAction(validData)).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });

  it('handles REGISTER_FAIL action', () => {
    fetchMock.postOnce(registerUrl, {
      body: { message: '' },
      headers: { 'content-type': 'application/json' },
    });

    const expectedAction = [{
      type: ActionTypes.REGISTER_FAIL,
      payload: '',
    }];

    const validData = {
      email: 'user@user.com',
      username: 'newuser',
      password: 'N0v',
      admin: false
    };

    const store = mockStore();

    return store.dispatch(registerAction(validData)).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });

  it('catches error instances', () => {
    fetchMock.postOnce(registerUrl, {
      body: undefined,
      headers: { 'content-type': 'application/json' },
    });

    const expectedAction = [];

    const validData = {};

    const store = mockStore();

    return store.dispatch(registerAction(validData)).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
});
