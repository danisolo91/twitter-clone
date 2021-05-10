import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import PersonIcon from '@material-ui/icons/Person';
import DateRangeIcon from '@material-ui/icons/DateRange';
import { Avatar, Button, Link, Tab, Tabs, Typography } from '@material-ui/core';
import useAuth from '../hooks/useAuth';
import { useEffect, useState } from 'react';
import TabPanel from './TabPanel';

const useStyles = makeStyles((theme) => ({
    paper: {
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    large: {
        width: theme.spacing(15),
        height: theme.spacing(15),
    },
    headerContainer: {
        padding: theme.spacing(2),
        background: 'radial-gradient(#e3f2fd, #bbdefb)',
    },
    headerTop: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        '& > :first-child': {
            marginRight: theme.spacing(2),
        },
    },
    marginTop: {
        marginTop: theme.spacing(1),
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
    profileStats: {
        display: 'flex',
        justifyContent: 'space-around',
        marginTop: theme.spacing(1),
    },
}));

const Profile = () => {
    const classes = useStyles();
    const { currentUser } = useAuth();
    const [joinDate, setJoinDate] = useState(null);
    const [tab, setTab] = useState(0);

    const handleTabChange = (e, newTab) => {
        // newTab: default to the index of the child
        setTab(newTab);
    }

    useEffect(() => {
        let date = new Date(currentUser.metadata.creationTime);
        date = 'Joined ' + date.toLocaleString('en', { month: 'long' }) + ' ' + date.getFullYear();
        setJoinDate(date);
    }, [currentUser, setJoinDate]);

    return (
        <Grid item xs={12} sm={11} md={8}>
            <Paper className={classes.paper}>
                <div className={classes.headerContainer}>
                    <div className={classes.headerTop}>
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
                            <Button
                                variant="outlined"
                                color="primary"
                                size="small"
                                className={classes.marginTop}
                            >
                                Follow
                            </Button>
                        </div>
                    </div>
                    <Typography className={classes.profileStats} variant="body2">
                        <Link href="#"><b>466</b> following</Link>
                        <Link href="#"><b>1.5M</b> followers</Link>
                    </Typography>
                </div>
                <Paper square>
                    <Tabs
                        value={tab}
                        indicatorColor="primary"
                        textColor="primary"
                        variant="fullWidth"
                        onChange={handleTabChange}
                        aria-label="profile tabs"
                    >
                        <Tab label="Tweets" id="full-width-tab-0" aria-controls="full-width-tabpanel-0" />
                        <Tab label="Replies" id="full-width-tab-1" aria-controls="full-width-tabpanel-1" />
                        <Tab label="Likes" id="full-width-tab-2" aria-controls="full-width-tabpanel-2" />
                    </Tabs>
                </Paper>
                <TabPanel value={tab} index={0}>
                    Tweets
                </TabPanel>
                <TabPanel value={tab} index={1}>
                    Replies
                </TabPanel>
                <TabPanel value={tab} index={2}>
                    Likes
                </TabPanel>
            </Paper>
        </Grid>
    );
};

export default Profile;