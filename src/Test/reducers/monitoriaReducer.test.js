import { monitoriaReducer } from '../../Redux/Reducers/monitoriaReducer';
import { typesMonitoria } from '../../Redux/Types/types';

describe('Pruebas en Monitorias Reducer', () => {
  test('debe retornar la nueva monitoria', () => {
    const initialState = {
      monitorias: [],
    };
    const monitoria = {
      id: 1,
      materia: 'Matematicas',
      salon: 'A',
      fecha: '2020-05-05',
      hora: '10:00',
      monitornombre: 'Juan',
    };
    const action = {
      type: typesMonitoria.addMonitoria,
      payload: monitoria,
    };

    const newState = monitoriaReducer(initialState, action);
    expect(newState).toEqual({
      monitorias: [monitoria],
    });
  });
  test('debe retornar la lista de monitorias', () => {
    const initialState = {
      monitorias: [],
    };
    const monitorias = [
      {
        id: 1,
        materia: 'Matematicas',
        salon: 'A',
        fecha: '2020-05-05',
        hora: '10:00',
        monitornombre: 'Juan',
      },
      {
        id: 2,
        materia: 'Fisica',
        salon: 'B',
        fecha: '2020-05-05',
        hora: '10:00',
        monitornombre: 'Juan',
      },
    ];
    const action = {
      type: typesMonitoria.listMonitoria,
      payload: monitorias,
    };

    const newState = monitoriaReducer(initialState, action);
    console.log(newState);
    expect(newState).toEqual({
      monitorias: monitorias,
    });
  });
  test('debe retornar la monitoria  sin la eliminada', () => {
    const initialState = {
      monitorias: [
        {
          id: 1,
          materia: 'Matematicas',
          salon: 'A',
          fecha: '2020-05-05',
          hora: '10:00',
          monitornombre: 'Juan',
        },
        {
          id: 2,
          materia: 'Fisica',
          salon: 'B',
          fecha: '2020-05-05',
          hora: '10:00',
          monitornombre: 'Juan',
        },
      ],
    };
    const action = {
      type: typesMonitoria.deleteMonitoria,
      payload: 1,
    };

    const newState = monitoriaReducer(initialState, action);
    console.log(newState);
    expect(newState).toEqual({
      monitorias: [
        {
          id: 2,
          materia: 'Fisica',
          salon: 'B',
          fecha: '2020-05-05',
          hora: '10:00',
          monitornombre: 'Juan',
        },
      ],
    });
  });
  test('debe retornar la monitoria actualizada', () => {
    const initialState = {
      monitorias: [
        {
          id: 1,
          materia: 'Matematicas',
          salon: 'A',
          fecha: '2020-05-05',
          hora: '10:00',
          monitornombre: 'Juan',
        },
        {
          id: 2,
          materia: 'Fisica',
          salon: 'B',
          fecha: '2020-05-05',
          hora: '10:00',
          monitornombre: 'Juan',
        },
      ],
    };
    const action = {
      type: typesMonitoria.updateMonitoria,
      payload: {
        id: 1,
        materia: 'Sociales',
        salon: 'A',
        fecha: '2020-05-05',
        hora: '10:00',
        monitornombre: 'Juan',
      },
    };

    const newState = monitoriaReducer(initialState, action);
    console.log(newState);
    expect(newState).toEqual({
      monitorias: [
        {
          id: 1,
          materia: 'Sociales',
          salon: 'A',
          fecha: '2020-05-05',
          hora: '10:00',
          monitornombre: 'Juan',
        },
        {
          id: 2,
          materia: 'Fisica',
          salon: 'B',
          fecha: '2020-05-05',
          hora: '10:00',
          monitornombre: 'Juan',
        },
      ],
    });
  });
  test('debe retornar  lo monitoria buscada', () => {
    const initialState = {
      monitorias: [
        {
          id: 1,
          materia: 'Matematicas',
          salon: 'A',
          fecha: '2020-05-05',
          hora: '10:00',
          monitornombre: 'Juan',
        },
        {
          id: 2,
          materia: 'Fisica',
          salon: 'B',
          fecha: '2020-05-05',
          hora: '10:00',
          monitornombre: 'Juan',
        },
      ],
    };
    const action = {
      type: typesMonitoria.filterMonitoria,
      payload: 'Fisica',
    };

    const newState = monitoriaReducer(initialState, action);
    console.log(newState);
    expect(newState).toEqual({
      monitorias: [
        {
          id: 2,
          materia: 'Fisica',
          salon: 'B',
          fecha: '2020-05-05',
          hora: '10:00',
          monitornombre: 'Juan',
        },
      ],
    });
  });
});
