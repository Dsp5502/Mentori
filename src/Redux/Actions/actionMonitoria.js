import { addDoc, collection, getDocs } from 'firebase/firestore';
import { db } from '../../Firebase/FirebaseConfig';
import { typesMonitoria } from '../Types/types';
//* add monitorias

export const addMonitoriaSync = (monitoria) => {
  return {
    type: typesMonitoria.addMonitoria,
    payload: monitoria,
  };
};

export const addMonitoriaAsync = (monitoria) => {
  return (dispatch) => {
    addDoc(collection(db, 'monitorias'), monitoria)
      .then((res) => {
        console.log(res);
        dispatch(addMonitoriaSync(monitoria));
      })
      .catch((err) => {
        console.warn(err);
      });
  };
};

//*list Monitorias

export const listMonitoriaSync = (monitorias) => {
  return {
    type: typesMonitoria.listMonitoria,
    payload: monitorias,
  };
};

export const listMonitoriaAsync = () => {
  return async (dispatch) => {
    const collectionTraer = await getDocs(collection(db, 'monitorias'));
    const monitorias = [];
    collectionTraer.forEach((doc) => {
      monitorias.push({ ...doc.data() });
    });
    dispatch(listMonitoriaSync(monitorias));
  };
};
