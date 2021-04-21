import { useEffect, useState } from 'react';
import { database } from '../firebase';
import { makeStyles } from '@material-ui/core/styles';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 275,
    },
});

const App = () => {

    const classes = useStyles();

    const [person, setPerson] = useState(null);

    useEffect(() => {
        database.example.get().then(results => {
            setPerson(database.formatDoc(results.docs[0]));
        })
    }, []);

    return (
        <>
            Hello {person ? person.name : <>...</>}!
            <FavoriteBorderIcon fontSize="small" />
            <br/><br/>
            <Card className={classes.root}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Lizard
                    </Typography>
                    Hello Daniel!<br/>
                </CardContent>
                <CardActions>
                    <Button 
                        size="small" 
                        variant="contained" 
                        color="primary"
                        disableElevation
                    >Learn More</Button>
                </CardActions>
            </Card>
        </>
    );
};

export default App;