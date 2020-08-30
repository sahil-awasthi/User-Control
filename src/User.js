import React from 'react';
import { Grid, IconButton, List, ListItem, Divider, ListItemText, ListItemAvatar, Avatar, Typography } from '@material-ui/core';
import { Delete, UpdateRounded } from '@material-ui/icons';



const User = (props) => {
    const { first_name, last_name, id, email, onUpdateUser, onDeleteUser, avatar } = props;

    return (
        <Grid container xs={12} direction="row" justify="center" alignItems="center">
            <List >
                <Grid list>
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt={first_name} src={avatar} />
                        </ListItemAvatar>
                        <ListItemText
                            primary={first_name}
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        component="span"
                                        variant="body2"
                                        color="textPrimary">
                                        My fullname is {first_name} {last_name}<br />
                                    </Typography>
                                    {` — feel free to mail me at: ${email}`}
                                </React.Fragment>} />
                    </ListItem>
                </Grid>
                <Divider variant="inset" component="li" />
                <Grid container xs={12} direction="row" justify="flex-end" alignItems="flex-end">
                    <Grid container xs={1} direction="row" justify="center" alignItems="flex-end">
                        <IconButton color="secondary" onClick={() => onDeleteUser(id)}>
                            <Delete />
                        </IconButton>
                    </Grid>
                    <Grid container xs={1} direction="row" justify="center" alignItems="flex-end">
                        <IconButton color="primary" onClick={() => onUpdateUser(first_name, last_name, id)}>
                            <UpdateRounded />
                        </IconButton>
                    </Grid>
                </Grid>

            </List>
        </Grid>
    );
}

export default User;