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
    default:
      return state;
  }
};
