import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import PersonIcon from '@material-ui/icons/Person';
import DateRangeIcon from '@material-ui/icons/DateRange';
import { Avatar, Divider, Typography } from '@material-ui/core';
import useAuth from '../hooks/useAuth';
import { useEffect, useState } from 'react';

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    large: {
        width: theme.spacing(15),
        height: theme.spacing(15),
    },
    headerContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        '& > :first-child': {
            marginRight: theme.spacing(2),
        },
    },
    margin: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
    },
    joinDate: {
        display: 'flex',
        '& > *': {
            alignItems: 'center',
        }
    },
    dateIcon: {
        fontSize: 16,
        marginRight: theme.spacing(0.5),
    },
}));

const Profile = () => {
    const classes = useStyles();
    const { currentUser } = useAuth();
    const [joinDate, setJoinDate] = useState(null);

    useEffect(() => {
        let date = new Date(currentUser.metadata.creationTime);
        date = 'Joined ' + date.toLocaleString('en', { month: 'long' }) + ' ' + date.getFullYear();
        setJoinDate(date);
    }, [currentUser, setJoinDate]);

    return (
        <Grid item xs={12} sm={11} md={8}>
            <Paper className={classes.paper}>
                <div className={classes.headerContainer}>
                    <Avatar src="https://source.unsplash.com/random" className={classes.large}>
                        <PersonIcon />
                    </Avatar>
                    <div>
                        <Typography component="div" variant="h5">
                            {currentUser.displayName}
                        </Typography>
                        <Typography variant="caption" className={classes.joinDate}>
                            <DateRangeIcon className={classes.dateIcon} />{joinDate}
                        </Typography>
                    </div>
                </div>
                <Divider className={classes.margin} />
                adsfadsf<br></br>
            </Paper>
        </Grid>
    );
};

export default Profile;