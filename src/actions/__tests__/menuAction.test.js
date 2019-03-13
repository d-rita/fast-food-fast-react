import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import ActionTypes from '../action';
import menuAction from '../menuAction';


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const { BASE_URL } = process.env;
const menuUrl = `${BASE_URL}/menu`;

describe('menu actions', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('handles GET_MENU_SUCCESS action', () => {
    fetchMock.getOnce(menuUrl, {
      body: {
        message: 'Menu successfully returned',
        Menu: []
      },
      headers: { 'content-type': 'application/json' },
    });

    const expectedAction = [{
      type: ActionTypes.GET_MENU_SUCCESS,
      payload: [],
    }];

    const store = mockStore();

    return store.dispatch(menuAction()).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });

  it('handles GET_MENU_NONE action', () => {
    fetchMock.getOnce(menuUrl, {
      body: {
        message: 'There is no menu',
      },
      headers: { 'content-type': 'application/json' },
    });

    const expectedAction = [{
      type: ActionTypes.GET_MENU_NONE,
      payload: 'There is no menu',
    }];

    const store = mockStore();

    return store.dispatch(menuAction()).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });

  it('catches error instances', () => {
    fetchMock.getOnce(menuUrl, {
      body: undefined,
      headers: { 'content-type': 'application/json' },
    });

    const expectedAction = [];

    const store = mockStore();

    return store.dispatch(menuAction()).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
});
