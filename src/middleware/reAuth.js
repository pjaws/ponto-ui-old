import app from '../feathers';
import { push } from 'connected-react-router';
import { SERVICES_AUTHENTICATE_AUTHENTICATION_FULFILLED } from '../constants/ActionTypes';

const reAuth = store => next => action => {
  const state = store.getState();

  // if they refreshed the page and cleared this info out of the store, but are still authenticated
  if (
    state.auth.accessToken &&
    (!state.auth.isAuthenticated || !state.auth.user)
  ) {
    app
      .reAuthenticate()
      .then(result => {
        console.log(`ReAuthenticate`, result);
        store.dispatch({
          type: SERVICES_AUTHENTICATE_AUTHENTICATION_FULFILLED,
          payload: {
            user: result.user,
            accessToken: result.accessToken,
          },
        });
        next(action);
      })
      .catch(err => {
        console.log(`Error ReAuthenticating`, err);
        store.dispatch(push('/'));
      });
  }
};

export default reAuth;
