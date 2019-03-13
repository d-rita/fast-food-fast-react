import ActionTypes from './action';

const { BASE_URL } = process.env;

const loginAction = logindata => dispatch => fetch(`${BASE_URL}/auth/login`, {
  method: 'POST',
  headers: {
    'content-type': 'application/json',
  },
  body: JSON.stringify(logindata)
})
  .then(res => res.json())
  .then((data) => {
    if (data.token) {
      dispatch({
        type: ActionTypes.LOGIN_SUCCESS,
        payload: data
      });
    } else {
      dispatch({
        type: ActionTypes.LOGIN_FAIL,
        payload: data.message
      });
    }
  })
  .catch(err => err);

export default loginAction;
