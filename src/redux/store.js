import { createStore } from 'redux';

// Используем редюсер-болванку
const reducer = (state = {}, action) => {
  console.log(action);
  return state;
};

const store = createStore(reducer);

export default store;
