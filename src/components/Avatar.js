import { makeStyles } from "@material-ui/core";
import { Avatar as MuiAvatar } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';

const useStyles = makeStyles(theme => ({
    large: {
        width: theme.spacing(15),
        height: theme.spacing(15),
    }
}));

const Avatar = ({ large }) => {
    const classes = useStyles();

    return (
        <MuiAvatar src="https://source.unsplash.com/random" className={large && classes.large}>
            <PersonIcon />
        </MuiAvatar>
    );
}

export default Avatar;