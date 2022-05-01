import {
  typesLogin,
  typesMonitor,
  typesMonitoria,
} from '../../../Redux/Types/types';

describe('Verificar types de redux', () => {
  test('Comparar Objetos de Login', () => {
    expect(typesLogin).toEqual({
      login: '[Login] Login',
      logout: '[Logout] Logout',
    });
  });
  test('Comparar Objetos typesMonitor', () => {
    expect(typesMonitor).toEqual({
      addMonitor: '[Monitor] AddMonitor',
      listMonitor: '[Monitor] ListMonitor',
      deleteMonitor: '[Monitor] deleteMonitor',
      updateMonitor: '[Monitor] updateMonitor',
      findMonitor: '[Monitor] findMonitor',
    });
  });

  test('Comparar Objetos typesMonitoria', () => {
    expect(typesMonitoria).toEqual({
      addMonitoria: '[Monitoria] AddMonitoria',
      listMonitoria: '[Monitoria] ListMonitoria',
      deleteMonitoria: '[Monitoria] deleteMonitoria',
      updateMonitoria: '[Monitoria] updateMonitoria',
      filterMonitoria: '[Monitoria] filterMonitoria',
    });
  });
});
