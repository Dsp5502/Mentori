import {
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import Swal from 'sweetalert2';
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
  return async (dispatch) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
        dispatch(loginSync(email, password));
      })
      .catch((error) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'La Contraseña y Usuario no coinciden !',
        });
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
        dispatch(loginSync(user.email, user.displayName));
      })
      .catch((error) => {
        console.error(error.message);
      });
  };
};
