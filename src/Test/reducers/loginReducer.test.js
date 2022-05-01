import { loginReducer } from '../../Redux/Reducers/loginReducer';
import { typesLogin } from '../../Redux/Types/types';

describe('Verificar Reducers de Login', () => {
  test('debe retornar el usuario logueado', () => {
    const initialState = {};
    const user = {
      email: 'prueba@prueba.com',
      password: '123456',
    };
    const action = {
      type: typesLogin.login,
      payload: user,
    };

    const newState = loginReducer(initialState, action);
    expect(newState).toEqual(user);
  });
  test('debe retornar el usuario deslogueado', () => {
    const initialState = {
      email: 'prueba@prueba.com',
      password: '123456',
    };
    const action = {
      type: typesLogin.logout,
    };

    const newState = loginReducer(initialState, action);
    expect(newState).toEqual({});
  });
});
