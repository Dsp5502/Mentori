import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../Firebase/FirebaseConfig';
import { typesMonitor } from '../Types/types';

//* Add Monitor
export const addMonitorSync = (monitor) => {
  return {
    type: typesMonitor.addMonitor,
    payload: monitor,
  };
};

export const addMonitorAsync = (monitor) => {
  return (dispatch) => {
    addDoc(collection(db, 'monitores'), monitor)
      .then((res) => {
        console.log(res);
        dispatch(addMonitorSync(monitor));
      })
      .catch((err) => {
        console.warn(err);
      });
  };
};
