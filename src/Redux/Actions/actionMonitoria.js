import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from 'firebase/firestore';
import Swal from 'sweetalert2';
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
        dispatch(addMonitoriaSync(monitoria));
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer);
            toast.addEventListener('mouseleave', Swal.resumeTimer);
          },
        });

        Toast.fire({
          icon: 'success',
          title: 'Agregado Correctamente',
        });
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

//* Delete Monitorias

export const deleteMonitoriaSync = (id) => {
  return {
    type: typesMonitoria.deleteMonitoria,
    payload: id,
  };
};

export const deleteMonitoriaAsync = (id) => {
  return async (dispatch) => {
    const collectionTraer = collection(db, 'monitorias');
    const q = query(collectionTraer, where('idMonitoria', '==', id));
    const traerDatosQ = await getDocs(q);
    traerDatosQ.forEach((docum) => {
      deleteDoc(doc(db, 'monitorias', docum.id));
    });
    dispatch(deleteMonitoriaSync(id));
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: 'success',
      title: 'Eliminado Correctamente',
    });
    dispatch(listMonitoriaAsync());
  };
};

//* update Mentoriations

export const updateMonitoriaSync = (monitoria) => {
  return {
    type: typesMonitoria.updateMonitoria,
    payload: monitoria,
  };
};

export const updateMonitoriaAsync = (monitoria) => {
  return async (dispatch) => {
    const collectionTraer = collection(db, 'monitorias');
    const q = query(collectionTraer, where('idMonitoria', '==', monitoria.id));
    const traerDatosQ = await getDocs(q);
    let idQuery;
    traerDatosQ.forEach((docum) => {
      idQuery = docum.id;
    });
    const documRef = doc(db, 'monitorias', idQuery);
    await updateDoc(documRef, monitoria)
      .then((res) => {
        dispatch(updateMonitoriaSync(monitoria));
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer);
            toast.addEventListener('mouseleave', Swal.resumeTimer);
          },
        });

        Toast.fire({
          icon: 'success',
          title: 'Editado Correctamente',
        });
      })
      .catch((err) => {
        console.warn(err);
      });
    dispatch(listMonitoriaAsync());
  };
};

//* find Monitorias

export const findMonitoriasSync = (busquedaMonitoria) => {
  return {
    type: typesMonitoria.filterMonitoria,
    payload: busquedaMonitoria,
  };
};
