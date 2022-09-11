import React, {useState} from 'react';
import {
    Avatar,
    Box,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    IconButton,
    Typography
} from "@mui/material";
import {ExpandMore, Favorite, MoreVert, Share} from "@mui/icons-material";

const Post = (props) => {
    const [fav, setFav] = useState(false);
    return (
        <Box flex={4} p={2}>
            <Card sx={{margin:5}}>
                <CardHeader
                    avatar={
                        <Avatar sx={{ backgroundColor: "red" }} aria-label="recipe">
                            {props.initial}
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVert />
                        </IconButton>
                    }
                    title={props.user}
                    subheader="September 14, 2016"
                />
                <CardMedia
                    component="img"
                    height="20%"
                    image={props.link}
                    alt="Paella dish"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        This impressive paella is a perfect party dish and a fun meal to cook
                        together with your guests. Add 1 cup of frozen peas along with the mussels,
                        if you like.
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <Favorite sx={{color: fav? "red" : "grey"}} onClick={e=>{setFav(!fav)}}/>
                    </IconButton>
                    <IconButton aria-label="share">
                        <Share />
                    </IconButton>
                    <ExpandMore />
                </CardActions>

            </Card>
        </Box>
    );
};

export default Post;