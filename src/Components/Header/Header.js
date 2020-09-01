import React from 'react'
import { NavLink } from 'react-router-dom';

import { AppBar, Toolbar, Typography, Button, Grid } from '@material-ui/core';


const Header = () => (
  <Grid container direction="row" justify="flex-end" alignItems="center">
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" >
          User Information
    </Typography>
        <Grid container item direction="row" justify="flex-end" alignItems="center" >
          <Grid item pr={2} mr={1}>
            <NavLink
              to={'/UpdateUserList'}>
              <Button variant="contained">Modify user</Button>
            </NavLink>
          </Grid>
          <NavLink
            to={'/'}>
            <Button variant="contained">Back</Button>
          </NavLink>
        </Grid>
      </Toolbar>
    </AppBar>
  </Grid>
);


export default Header