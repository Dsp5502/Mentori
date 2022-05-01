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
        dispatch(addMonitorSync(monitor));
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

export const deleteMonitorAsync = (id) => {
  return async (dispatch) => {
    const collectionTraer = collection(db, 'monitores');
    const q = query(collectionTraer, where('id', '==', id));
    const traerDatosQ = await getDocs(q);
    traerDatosQ.forEach((docum) => {
      deleteDoc(doc(db, 'monitores', docum.id));
    });
    dispatch(DeleteMonitorSync(id));
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
    dispatch(listMonitorAsync());
  };
};

//* Update Monitor
export const updateMonitorSync = (monitor) => {
  return {
    type: typesMonitor.updateMonitor,
    payload: monitor,
  };
};

export const updateMonitorAsync = (monitor) => {
  return async (dispatch) => {
    const collectionTraer = collection(db, 'monitores');
    const q = query(collectionTraer, where('id', '==', monitor.id));
    const traerDatosQ = await getDocs(q);
    let idQuery;
    traerDatosQ.forEach((docum) => {
      idQuery = docum.id;
    });
    const documRef = doc(db, 'monitores', idQuery);
    await updateDoc(documRef, monitor)
      .then((res) => {
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

        dispatch(updateMonitorSync(monitor));
      })
      .catch((err) => {
        console.warn(err);
      });
    dispatch(listMonitorAsync());
  };
};

//* Find Monitor

export const findMonitorSync = (monitorSearch) => {
  return {
    type: typesMonitor.findMonitor,
    payload: monitorSearch,
  };
};
