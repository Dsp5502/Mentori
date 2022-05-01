import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import { addMonitorSync } from '../../Redux/Actions/actionMonitor';
import { typesMonitor } from '../../Redux/Types/types';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initialState = {
  login: {
    isLoggedIn: true,
  },
};

let store = mockStore(initialState);

describe('actionMonitor', () => {
  beforeEach(() => {
    store = mockStore(initialState);
  });
  test('Debe agregar un monitor', async () => {
    await store.dispatch(
      addMonitorSync({
        nombres: 'Juan',
        apellidos: 'Perez',
        email: 'correo@gmail.com',
        celular: '123456789',
        cedula: '123456789',
        semestre: '1',
        programaAcademico: 'Ingenieria de sistemas',
      })
    );
    const actions = store.getActions();
    console.log(actions);
    expect(actions[0]).toEqual({
      type: typesMonitor.addMonitor,
      payload: {
        nombres: 'Juan',
        apellidos: 'Perez',
        email: 'correo@gmail.com',
        celular: '123456789',
        cedula: '123456789',
        semestre: '1',
        programaAcademico: 'Ingenieria de sistemas',
      },
    });
  });
});
