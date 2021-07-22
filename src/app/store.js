import {configureStore} from '@reduxjs/toolkit';
import counterReducer from '../features/counter/employeeSlice';

export default configureStore({
  reducer: {
    counteraaaa: counterReducer
  }
});
