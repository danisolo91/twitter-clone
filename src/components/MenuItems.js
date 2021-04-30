import { Link as RouterLink } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';

const MenuItems = () => {
    return (
        <div>
            <ListItem button component={RouterLink} to="/home">
                <ListItemIcon>
                    <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary="Home" />
            </ListItem>
            <ListItem button component={RouterLink} to="/explore">
                <ListItemIcon>
                    <ShoppingCartIcon />
                </ListItemIcon>
                <ListItemText primary="Explore" />
            </ListItem>
            <ListItem button>
                <ListItemIcon>
                    <PeopleIcon />
                </ListItemIcon>
                <ListItemText primary="Notifications" />
            </ListItem>
            <ListItem button>
                <ListItemIcon>
                    <BarChartIcon />
                </ListItemIcon>
                <ListItemText primary="Messages" />
            </ListItem>
            <ListItem button component={RouterLink} to="/profile">
                <ListItemIcon>
                    <LayersIcon />
                </ListItemIcon>
                <ListItemText primary="Profile" />
            </ListItem>
        </div>
    )
};

export default MenuItems;