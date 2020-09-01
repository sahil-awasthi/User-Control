
import React, { Component } from 'react';
import { connect } from 'react-redux';
import User from '../User/User'
import { Grid, IconButton, TextField } from '@material-ui/core';
import { Save, Add } from '@material-ui/icons';
import { handleAddUser, handleUpdateUser } from '../../redux/actions/user.actions';
import { withRouter } from "react-router";


class UpdateUser extends Component {
    state = {
        name: '',
        email: '',
        id:''
    }

    onAddUser = () => {
        const { name, email } = this.state;

        this.props.dispatch(handleAddUser({ name, email }));

        this.setState({ name: '', email: '' });
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


        this.setState({ name: '', email: '' })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        const {name, id, email } = this.state;
        console.log('this is the state',this.state);
        console.log('the information in user', this.props);




        return (
            <Grid container item xs={12} p={5} direction="row" justify="center" alignItems="center">
                <Grid container item xs={12} md={4} direction="row" justify="center" alignItems="center">
                    <TextField id="outlined-basic" variant="outlined" name="name" label="name" value={this.props.user.first_name} size="small" onChange={this.handleChange} />
                </Grid>
                <Grid container item xs={12} md={4} direction="row" justify="center" alignItems="center" >
                    <TextField id="outlined-basic" variant="outlined" name="email" label="email" value={this.props.user.email} size="small" onChange={this.handleChange} />
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
                <User />
            </Grid>
        );
    }
}

const mapStateToProps = (state, props) => {
    const id = props.match.params.id;
    console.log("mapstate to props", state.users);
    return {
        user: state.users.find(user => user.id == id) || {}
        
    };
}

export default withRouter(connect(mapStateToProps)(UpdateUser)) 