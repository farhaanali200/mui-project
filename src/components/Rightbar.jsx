import React from 'react';
import {
    Avatar,
    AvatarGroup,
    Box,
    ImageList,
    ImageListItem,
    List,
    ListItem,
    ListItemAvatar, ListItemText,
    Typography
} from "@mui/material";
import Conversations from "./Conversations";

const Rightbar = () => {
    return (
        <Box flex={2} p={2} sx={{display: {xs: "none", sm: "block"}}}>
            <Box position="fixed" width={500}>
            <Typography variant="h6" fontWeight="100">Online Friends</Typography>
                <AvatarGroup max={4}>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                    <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                    <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
                    <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
                </AvatarGroup>
                <Typography variant="h6" fontWeight="100" mt={2} mb={2}>Latest Photos</Typography>
                <ImageList  cols={4} rowHeight={100}>
                    <ImageListItem>
                        <img
                            src="https://pbs.twimg.com/card_img/1567640929908965379/PnrwwXRB?format=jpg&name=large"
                            loading="lazy"
                        />
                    </ImageListItem>
                    <ImageListItem>

                        <img
                            src="https://resources.premierleague.com/photos/2022/09/05/2634ca52-2db3-4492-9353-08a076006d2e/GettyImages-1242846023.jpg?width=933&height=620"
                            loading="lazy"
                        />
                    </ImageListItem>
                    <ImageListItem>
                        <img
                            src="https://imgresizer.eurosport.com/unsafe/1200x0/filters:format(jpeg):focal(840x256:842x254)/origin-imgresizer.eurosport.com/2022/02/06/3306898-67618228-2560-1440.jpg"
                            loading="lazy"
                        />
                    </ImageListItem>
                    <ImageListItem>
                        <img
                            src="https://icdn.psgtalk.com/wp-content/uploads/2022/03/fbl-fra-ligue1-monaco-psg-6.jpg"
                            loading="lazy"
                        />
                    </ImageListItem>
                </ImageList>

                <Typography variant="h6" fontWeight={100} mt={2} mb={2}>Latest Conversations</Typography>

                <Conversations/>
                <Conversations/>
            </Box>
        </Box>
    );
};

export default Rightbar;