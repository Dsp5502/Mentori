import { addDoc, collection, getDocs } from 'firebase/firestore';
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

//* List Monitor
export const listMonitorSync = (monitors) => {
  return {
    type: typesMonitor.listMonitor,
    payload: monitors,
  };
};

export const listMonitorAsync = () => {
  return async (dispatch) => {
    const collectionTraer = await getDocs(collection(db, 'monitores'));
    const monitors = [];
    collectionTraer.forEach((doc) => {
      monitors.push({ ...doc.data() });
    });
    dispatch(listMonitorSync(monitors));
  };
};
