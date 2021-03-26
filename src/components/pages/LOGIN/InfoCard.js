import React from 'react'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export const InfoCard = ({data}) => {
    return (
        <Card variant="outlined" >
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {data.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {data.subtitle}
                </Typography>
                </CardContent>
          
            <CardActions>
                <Button size="small" color="primary">
                Ver Más
                </Button>
            </CardActions>
        </Card>
    )
}
