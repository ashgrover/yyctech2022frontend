import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FavoriteBorderTwoToneIcon from '@mui/icons-material/FavoriteBorderTwoTone';
import { styled } from '@mui/system';


const FlexStart = styled('div')({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
});
function EventCard() {
    return (
        <Card sx={{ maxWidth: 200, margin:"20px 20px 20px 0"}}>
            <CardMedia
                component="img"
                height="140"
                image="/images/1.jpg"
                alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Music Festival
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Lit Music Festival is happening right now..
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Start Date: 2022/02/02
                </Typography>
                <FlexStart>
                    <FavoriteBorderTwoToneIcon />
                    <Typography variant="body2" color="text.secondary">
                        22 Likes
                    </Typography>
                </FlexStart>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}
export default EventCard; 