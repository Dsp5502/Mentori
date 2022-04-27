import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
// import { auth } from '../../Firebase/FirebaseConfig';
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
    const auth = getAuth();
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
    const auth = getAuth();
    signOut(auth)
      .then((user) => {
        dispatch(logoutSync());
      })
      .catch((error) => {
        console.error(error.message);
      });
  };
};
