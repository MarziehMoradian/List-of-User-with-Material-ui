import React from 'react';
import TablePage from './pages/TablePage';
import NotFound from './pages/NotFound';
import UserPage from './pages/UserPage';
import {Switch,Route,Link} from 'react-router-dom';
function App() {
  return (
    <React.Fragment>
      <Switch>
          <Route path="/" exact component={TablePage}/>
          <Route path="/user/:id" exact component={UserPage}/>
          <Route path="*" exact component={NotFound}/>
      </Switch>
    </React.Fragment>
  )
}

export default App
