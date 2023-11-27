import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import './MediaCard.css'

const MediaCard = (props) => {

    const {brand, dir, description, link} = props

    return(
        <div>
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    height="155"
                    image={dir}
                    alt=""
                />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {brand}
                        </Typography>
                        
                        <Typography variant="body2" color="text.secondary">
                            {description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                
                <CardActions>
                    <a href={link}>
                        <Button size="small" color="primary">
                            Ver produtos
                        </Button>
                    </a>
                </CardActions>
            </Card>
        </div>
    )
}

export default MediaCard;
