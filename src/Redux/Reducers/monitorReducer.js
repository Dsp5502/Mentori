import { typesMonitor } from '../Types/types';

const initialState = {
  monitors: [],
};

export const monitorReducer = (state = initialState, action) => {
  switch (action.type) {
    case typesMonitor.addMonitor:
      return {
        monitors: [action.payload],
      };
    case typesMonitor.listMonitor:
      return {
        monitors: [...action.payload],
      };
    case typesMonitor.deleteMonitor:
      return {
        monitors: state.monitors.filter(
          (monitor) => monitor.id !== action.payload
        ),
      };
    case typesMonitor.updateMonitor:
      return {
        monitors: state.monitors.map((monitor) =>
          monitor.id === action.payload.id
            ? (monitor = action.payload)
            : monitor
        ),
      };
    case typesMonitor.findMonitor:
      return {
        monitors: state.monitors.filter(
          (monitor) =>
            monitor.nombres
              .toLowerCase()
              .includes(action.payload.toLowerCase()) ||
            monitor.apellidos
              .toLowerCase()
              .includes(action.payload.toLowerCase()) ||
            monitor.programaAcademico
              .toLowerCase()
              .includes(action.payload.toLowerCase()) ||
            monitor.email
              .toLowerCase()
              .includes(action.payload.toLowerCase()) ||
            monitor.celular
              .toLowerCase()
              .includes(action.payload.toLowerCase()) ||
            monitor.cedula
              .toLowerCase()
              .includes(action.payload.toLowerCase()) ||
            monitor.semestre
              .toLowerCase()
              .includes(action.payload.toLowerCase())
        ),
      };
    default:
      return state;
  }
};
