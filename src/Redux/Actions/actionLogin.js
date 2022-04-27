import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { facebook, google } from '../../Firebase/FirebaseConfig';
import { auth } from '../../Firebase/FirebaseConfig';
import { typesLogin } from '../Types/types';

//* Login Sincronico

export const loginSync = (email, password) => {
  return {
    type: typesLogin.login,
    payload: {
      email,
      password,
    },
  };
};

//* Logout Sincronico

export const loginAsync = (email, password) => {
  console.log(email, password);
  return async (dispatch) => {
    // const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
        console.log(user);
        dispatch(loginSync(email, password));
      })
      .catch((error) => {
        console.error(error.message);
      });
  };
};

//* Logout Sincronico

export const logoutSync = () => {
  return {
    type: typesLogin.logout,
  };
};

//* Logout Asincronico

export const logoutAsync = () => {
  return async (dispatch) => {
    // const auth = getAuth();
    await signOut(auth)
      .then(() => {
        dispatch(logoutSync());
      })
      .catch((error) => {
        console.error(error.message);
      });
  };
};

//* login Google

export const loginGoogle = () => {
  return async (dispatch) => {
    signInWithPopup(auth, google)
      .then((user) => {
        console.log(user);
        dispatch(loginSync(user.email, user.displayName));
      })
      .catch((error) => {
        console.error(error.message);
      });
  };
};

export const loginFacebook = () => {
  return async (dispatch) => {
    signInWithPopup(auth, facebook)
      .then((user) => {
        console.log(user);
        dispatch(loginSync(user.email, user.displayName));
      })
      .catch((error) => {
        console.error(error.message);
      });
  };
};
