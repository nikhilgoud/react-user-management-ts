import {createSlice} from '@reduxjs/toolkit';

function loadInitialState() {
  if (localStorage.getItem('redux')) {
    return JSON.parse(localStorage.getItem('redux'));
  } else {
    return {
      value: 0,
      empid: -1,
      isAuth: false
    };
  }
}

export const slice = createSlice({
  name: 'counter1',
  initialState: loadInitialState(),
  reducers: {
    changeEmployee: (state, action) => {
      return {
        ...state,
        empid: action.payload
      };
    },
    login: (state) => {
      return {
        ...state,
        isAuth: true
      };
    },
    logout: (state) => {
      return {
        ...state,
        isAuth: false
      };
    }
  }
});

export const {changeEmployee, login, logout} = slice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const incrementAsync = (amount) => (dispatch) => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount));
  }, 1000);
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectCount = (state) => state.counteraaaa.value;
export const selectEmployee = (state) => state.counteraaaa.empid;
export const isAuth = (state) => state.counteraaaa.isAuth;

export default slice.reducer;
