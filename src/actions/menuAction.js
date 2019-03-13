import ActionTypes from './action';

const { BASE_URL } = process.env;

const menuAction = () => dispatch => fetch(`${BASE_URL}/menu`, {
  method: 'GET',
  headers: {
    'content-type': 'application/json',
  },
})
  .then(res => res.json())
  .then((data) => {
    if (data.message === 'Menu successfully returned') {
      dispatch({
        type: ActionTypes.GET_MENU_SUCCESS,
        payload: data.Menu
      });
    } else {
      dispatch({
        type: ActionTypes.GET_MENU_NONE,
        payload: data.message
      });
    }
  })
  .catch(err => err);

export default menuAction;
