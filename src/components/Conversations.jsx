import React from 'react';
import {Avatar, List, ListItem, ListItemAvatar, ListItemText, Typography} from "@mui/material";

const Conversations = () => {
    return (
        <List sx={{ width: '100%', maxWidth: 360, backgroundColor: 'background.paper' }}>
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src="https://e0.365dm.com/21/04/1600x900/skysports-phil-foden-manchester-city_5343992.jpg?20210416100939" />
                </ListItemAvatar>
                <ListItemText
                    primary="Football this weekend?"
                    secondary={
                        <React.Fragment>
                            <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                Farhaan
                            </Typography>
                            {" — I'll be in your neighborhood doing errands this…"}
                        </React.Fragment>
                    }
                />
            </ListItem>
        </List>
    );
};

export default Conversations;