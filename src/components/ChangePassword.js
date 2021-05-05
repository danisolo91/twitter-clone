import { Button, Divider, Grid, makeStyles, Paper, TextField, Typography } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import { useState } from "react";
import useAuth from "../hooks/useAuth";
import LockIcon from '@material-ui/icons/Lock';

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

const ChangePassword = () => {
    const classes = useStyles();
    const { updatePassword } = useAuth();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [input, setInput] = useState({
        password: '',
        passwordConfirm: '',
    });

    const handleInput = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(input.password !== input.passwordConfirm) {
            return setError('Passwords do not match');
        }

        setLoading(true);
        try{
            setError(null);
            await updatePassword(input.password);
            setLoading(false);
        } catch {
            setError('Failed to update password');
        }
        setInput({
            password: '',
            passwordConfirm: '',
        });
        setLoading(false);
    }

    return (
        <Paper className={classes.paper}>
            <div className={classes.titleContainer}>
                <LockIcon fontSize="large" className={classes.marginRight} />
                <Typography component="h5" variant="h5">Password</Typography>
            </div>
            <Divider className={classes.marginTopBottom}/>
            <Typography component="p" variant="body2">
                Use the following form to change your password.
            </Typography>
            <form className={classes.form} onSubmit={handleSubmit} autoComplete="off">
                {error && <Alert severity="error" className={classes.alert}>{error}</Alert>}
                <fieldset disabled={loading}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                value={input.password}
                                onChange={handleInput}
                                inputProps={{ minLength: 6 }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="passwordConfirm"
                                label="Password confirm"
                                type="password"
                                id="passwordConfirm"
                                value={input.passwordConfirm}
                                onChange={handleInput}
                                inputProps={{ minLength: 6 }}
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
    );
}

export default ChangePassword;