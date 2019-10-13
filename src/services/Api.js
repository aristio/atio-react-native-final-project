import {setListener, pushData, signup, login} from '../config/Firebase';

export const getMessages = updaterFn => setListener('messages', updaterFn);
export const postMessage = message => {
  if (Boolean(message)) {
    pushData('messages', {
      incoming: false,
      message,
    });
  }
};

export {login, signup};
