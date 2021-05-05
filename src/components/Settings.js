import { Button, Divider, Grid, makeStyles, Paper, TextField, Typography } from "@material-ui/core";
import { useState } from "react";
import useAuth from "../hooks/useAuth";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Alert from "@material-ui/lab/Alert";
import ChangePassword from "./ChangePassword";

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
    },
    titleContainer: {
        display: 'flex',
        alignItems: 'center'
    },
    marginTopBottom: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(2),
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    alert: {
        marginBottom: theme.spacing(2),
    },
    marginRight: {
        marginRight: theme.spacing(1),
    }
}));

const Settings = () => {
    const classes = useStyles();
    const { currentUser } = useAuth();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [input, setInput] = useState({
        displayName: currentUser.displayName,
    });

    const handleInput = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try{
            setError(null);
            await currentUser.updateProfile({
                displayName: input.displayName,
            });
        } catch {
            setError('Failed to update profile name');
        }
        setLoading(false);
    }

    return (
        <>
            <Grid item xs={12} md={9}>
                <Paper className={classes.paper}>
                    <div className={classes.titleContainer}>
                        <AccountCircleIcon fontSize="large" className={classes.marginRight} />
                        <Typography component="h5" variant="h5">Profile</Typography>
                    </div>
                    <Divider className={classes.marginTopBottom}/>
                    <Typography component="p" variant="body2">
                        The following data will be shown as your profile name.
                    </Typography>
                    <form className={classes.form} onSubmit={handleSubmit} autoComplete="off">
                        {error && <Alert severity="error" className={classes.alert}>{error}</Alert>}
                        <fieldset disabled={loading}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        name="displayName"
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="displayName"
                                        label="Profile name"
                                        value={input.displayName}
                                        onChange={handleInput}
                                    />
                                </Grid>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit}
                                >
                                    Save
                                </Button>
                            </Grid>
                        </fieldset>
                    </form>
                </Paper>
            </Grid>
            <Grid item xs={12} md={9}>
                <ChangePassword />
            </Grid>
        </>
    );
}

export default Settings;