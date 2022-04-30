import { typesMonitoria } from '../Types/types';

const initialState = {
  monitorias: [],
};

export const monitoriaReducer = (state = initialState, action) => {
  switch (action.type) {
    case typesMonitoria.addMonitoria:
      return {
        monitorias: [action.payload],
      };
    case typesMonitoria.listMonitoria:
      return {
        monitorias: action.payload,
      };
    case typesMonitoria.deleteMonitoria:
      return {
        monitorias: state.monitorias.filter(
          (monitoria) => monitoria.id !== action.payload
        ),
      };
    case typesMonitoria.updateMonitoria:
      return {
        monitorias: state.monitorias.map((monitoria) =>
          monitoria.id === action.payload.id
            ? (monitoria = action.payload)
            : monitoria
        ),
      };
    case typesMonitoria.filterMonitoria:
      return {
        monitorias: state.monitorias.filter(
          (monitoria) =>
            monitoria.materia
              .toLowerCase()
              .includes(action.payload.toLowerCase()) ||
            monitoria.salon
              .toLowerCase()
              .includes(action.payload.toLowerCase()) ||
            monitoria.fecha
              .toLowerCase()
              .includes(action.payload.toLowerCase()) ||
            monitoria.hora.toLowerCase().includes(action.payload.toLowerCase())
        ),
      };
    default:
      return state;
  }
};
