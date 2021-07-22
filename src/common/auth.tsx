import {useSelector} from 'react-redux';
import {selectEmployee, isAuth} from '../features/counter/employeeSlice';

export default function IsAuth() {
  return useSelector(isAuth);
}
