import ActionTypes from './action';

const { BASE_URL } = process.env;

const registerAction = userdata => dispatch => fetch(`${BASE_URL}/auth/signup`, {
  method: 'POST',
  headers: {
    'content-type': 'application/json',
  },
  body: JSON.stringify(userdata)
})
  .then(response => response.json())
  .then((data) => {
    if (data.message === 'New user added') {
      dispatch({
        type: ActionTypes.REGISTER_SUCCESS,
        payload: data.message
      });
    } else {
      dispatch({
        type: ActionTypes.REGISTER_FAIL,
        payload: data.message
      });
    }
  })
  .catch(err => err);

export default registerAction;
