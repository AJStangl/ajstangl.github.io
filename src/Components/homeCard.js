import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    card: {
        minWidth: 275,
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export default function HomeCard() {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardContent>
                <Typography className={classes.title} color="textPrimary" gutterBottom>
                    AJ Stangl
                </Typography>
                <Typography className={classes.pos} color="textPrimary" gutterBottom>
                    Software Developer specialized in improving patient outcomes through design
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="medium">Learn More</Button>
            </CardActions>
        </Card>
    );
}