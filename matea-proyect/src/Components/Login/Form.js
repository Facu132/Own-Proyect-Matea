import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import './../../Assets/Css/Login/Form.css';

const Form = () => {
    const useStyles = makeStyles({
        root: {
            minWidth: 275,
            display:'flex',
            justifyContent:'center',
        },
    });

    const classes = useStyles();

    return (
        <div>
            <Card className={classes.root}>
                <CardContent>
                    <div className='Form__circular-div'></div>
                    <Typography>Ingresar</Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default Form;