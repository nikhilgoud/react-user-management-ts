import {FC, useState} from 'react';
import './App.css';
import {Footer, User_component} from './components/UserDetails';
import {ReduxUserList, UserList, User_list} from './components/UserList';
import UserEdit from './components/UserEdit';
import {View} from './components/View';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Header_a from './components/Header';
import {useSelector} from 'react-redux';
import {selectEmployee} from './features/counter/counterSlice';

const App: FC = () => {
  const [empid, SetEmpId] = useState('1');
  const empidredux = useSelector(selectEmployee);
  function handleChange(event) {
    SetEmpId(event);
  }
  return (
    <div className="App">
      <Router>
        <div>
          <Header_a></Header_a>
          <hr />

          <Switch>
            <Route exact path="/">
              Using State
              <div className="row col-sm-12">
                <div className="col-sm-8">
                  <User_list emp_id={empid} onChange={handleChange}></User_list>
                </div>
                <div className="col-sm-4">
                  <User_component emp_id={empid}></User_component>
                </div>
              </div>
            </Route>
            <Route path="/view">
              Using Route
              <View></View>
            </Route>
            <Route path="/add">
              <div className="row col-sm-12">
                <div className="col-sm-8">
                  <ReduxUserList></ReduxUserList>
                </div>
                <div className="col-sm-4">
                  <User_component emp_id={empidredux}></User_component>
                </div>
              </div>
            </Route>
          </Switch>
        </div>
      </Router>

      <Footer company="Techigai"></Footer>
    </div>
  );
};

export default App;
