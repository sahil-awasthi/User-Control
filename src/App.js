import React, { Component } from 'react';
import { connect } from 'react-redux';
import User from './User'

import { handleFetchUsers, handleAddUser, handleDeleteUser, handleUpdateUser } from './redux/actions/user.actions';
import { Grid, IconButton, TextField } from '@material-ui/core';
import { Add, Save } from '@material-ui/icons';
import { createStyles, makeStyles } from '@material-ui/core/styles';



class App extends Component {
  state = {
    name: '',
    job: ''
  }

  useStyles = makeStyles((Theme) =>
    createStyles({
      root: {
        '& > *': {
          margin: Theme.spacing(1),
        },
      },
    }),
  );

  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(handleFetchUsers());
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onAddUser = () => {
    const { name, job } = this.state;

    this.props.dispatch(handleAddUser({ name, job }));

    this.setState({ name: '', job: '' });
  }

  onUpdateUserHandler = () => {
    const { name, id } = this.state;
    const [first_name = '', last_name = ''] = name.split(' ')

    this.props.dispatch(handleUpdateUser(first_name, last_name, id));

    setTimeout(() => {
      this.setState({
        first_name,
        last_name,
        name: `${first_name} ${last_name}`
      })
    }, 1500)


    this.setState({ name: '', job: '' })
  }

  onUpdateUser = (first_name, last_name, id) => {
    this.setState({
      name: `${first_name} ${last_name}`,
      id
    })
  }

  onDeleteUser = (id) => {
    this.props.dispatch(handleDeleteUser(id));
  }

  render() {
    const { users } = this.props;
    const { name, id } = this.state;


    return (
      <Grid container direction="row" justify="center" alignItems="center" spacing={5}>
        <Grid container item xs={12} sm={6} md={6} lg={6}>
          <Grid container item xs={12} p={5} direction="row" justify="center" alignItems="center">
            <Grid container item xs={12} md={4} direction="row" justify="center" alignItems="center">
              <TextField id="outlined-basic" variant="outlined" name="name" label="name" value={name} size="small" onChange={this.handleChange} />
            </Grid>
            <Grid container item xs={12} md={4} direction="row" justify="center" alignItems="center" >
              <TextField id="outlined-basic" variant="outlined" name="job" label="job" size="small" onChange={this.handleChange} />
            </Grid>
            <Grid container item xs={6} md={1} direction="row" justify="center" alignItems="center">
              <IconButton pt={5} onClick={this.onAddUser} >
                <Add pt={5} />
              </IconButton>
            </Grid>
            <Grid container item xs={6} md={1} direction="row" justify="center" alignItems="center">
              <IconButton onClick={() => this.onUpdateUserHandler(name, id)} onChange={this.handleChange}>
                <Save />
              </IconButton>
            </Grid>
          </Grid>

          <Grid container item xs={12} spacing={4}>
            {users.map(user => (
              <Grid item xs={12} >
                <User
                  {...user}
                  key={user.id}
                  onUpdateUser={this.onUpdateUser}
                  onDeleteUser={this.onDeleteUser} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users
  };
}

export default connect(mapStateToProps)(App);
