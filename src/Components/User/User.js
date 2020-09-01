import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, IconButton, List, ListItem, Divider, ListItemText, ListItemAvatar, Avatar, Typography } from '@material-ui/core';
import { Delete, UpdateRounded } from '@material-ui/icons';
import { handleFetchUsers, handleDeleteUser } from './../../redux/actions/user.actions';
import {withRouter} from 'react-router'



class User extends Component {
    state = {
        name: '',
        email: ''
    }

    componentDidMount() {
        const { dispatch } = this.props;

        dispatch(handleFetchUsers());
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    onUpdateUser = (first_name, last_name, id) => {
        this.props.history.push('/UpdateUserList/'+id)
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

        return (
            <Grid container item xs={12} spacing={4}>
                {users.map(user => (
                    <Grid item xs={12} >
                        <Grid container xs={12} direction="row" justify="center" alignItems="center" {...user}
                            key={user.id} >
                            <List >
                                <Grid list>
                                    <ListItem alignItems="flex-start">
                                        <ListItemAvatar>
                                            <Avatar alt={user.first_name} src={user.avatar} />
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary={user.first_name}
                                            secondary={
                                                <React.Fragment>
                                                    <Typography
                                                        component="span"
                                                        variant="body2"
                                                        color="textPrimary">
                                                        My fullname is {user.first_name} {user.last_name}<br />
                                                    </Typography>
                                                    {` — feel free to mail me at: ${user.email}`}
                                                </React.Fragment>} />
                                    </ListItem>
                                </Grid>
                                <Divider variant="inset" component="li" />
                                <Grid container xs={12} direction="row" justify="flex-end" alignItems="flex-end">
                                    <Grid container xs={1} direction="row" justify="center" alignItems="flex-end">
                                        <IconButton color="secondary" onClick={() => this.onDeleteUser(user.id)}>
                                            <Delete />
                                        </IconButton>
                                    </Grid>
                                    <Grid container xs={1} direction="row" justify="center" alignItems="flex-end">
                                        <IconButton color="primary" onClick={() => this.onUpdateUser(user.first_name, user.last_name, user.id)}>
                                            <UpdateRounded />
                                        </IconButton>
                                    </Grid>
                                </Grid>
                            </List>
                        </Grid>
                    </Grid>
                ))}
            </Grid>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.users
    };
}



export default withRouter(connect(mapStateToProps)(User))