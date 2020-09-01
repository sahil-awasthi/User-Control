import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import User from './Components/User/User'
import Header from './Components/Header/Header'
import UpdateUserList from './Components/UpdateUser/UpdateUserList'
import { Grid } from '@material-ui/core';

class App extends Component {
  render() {
    return (
      <Grid container direction="row" justify="center" alignItems="center" >
        <Header />
        <Grid container item xs={12} sm={6} md={6} lg={6}>
          <Switch>
            <Route path="/UpdateUserList/:id?" component={UpdateUserList} />
            <Route path="/" component={User} />
          </Switch>
        </Grid>
      </Grid>
    );
  }
}

export default App;
