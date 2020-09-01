import React from 'react';
import LogoMateify from './../../Assets/Images/LogoMateifyBlanco.png';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const NavBar = () => {
    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
            display:'flex',
            justifyContent:'center',
            fontFamily: 'Righteous',
            fontSize:'25px',
        },
    }));
    
        const classes = useStyles();
        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar className="Login__AppBar-toolbar">
                        <img src={LogoMateify} alt="LogoMatea"/>
                        <Typography variant="h6" className={classes.title}>
                            Mateify
                    </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }

    export default NavBar;