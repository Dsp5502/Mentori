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
        monitors: action.payload,
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
    default:
      return state;
  }
};
