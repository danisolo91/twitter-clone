import { Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, makeStyles, Typography } from "@material-ui/core";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import Avatar from "./Avatar";

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      borderBottom: '1px solid #ddd',
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
  }));

const Tweet = (props) => {
    const classes = useStyles();
    const { media } = props;

    return (
        <Card className={classes.root} variant="elevation" square>
            <CardHeader
                avatar={
                    <Avatar />
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title="Shrimp and Chorizo Paella"
                subheader="September 14, 2016"
            />
            {media &&
                <CardMedia
                    className={classes.media}
                    image="https://source.unsplash.com/random"
                    title="Random media"
                />
            }
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    This impressive paella is a perfect party dish and a fun meal to cook together with your
                    guests. Add 1 cup of frozen peas along with the mussels, if you like.
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
            </CardActions>
        </Card>
    );
}

export default Tweet;