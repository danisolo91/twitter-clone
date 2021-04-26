import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';

const Copyright = () => {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" component={RouterLink} to="/">
                Twitty
            </Link>
            {' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export default Copyright;