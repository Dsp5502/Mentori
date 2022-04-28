import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  where,
} from 'firebase/firestore';
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

//* Delete Monitor

export const DeleteMonitorSync = (monitor) => {
  return {
    type: typesMonitor.deleteMonitor,
    payload: monitor,
  };
};

export const deleteMonitorAsync = (cedula) => {
  console.log('entre');
  return async (dispatch) => {
    const collectionTraer = collection(db, 'monitores');
    const q = query(collectionTraer, where('cedula', '==', cedula));
    const traerDatosQ = await getDocs(q);
    traerDatosQ.forEach((docum) => {
      deleteDoc(doc(db, 'monitores', docum.id));
    });
    console.log(traerDatosQ);
    dispatch(DeleteMonitorSync(cedula));
    dispatch(listMonitorAsync());
  };
};
