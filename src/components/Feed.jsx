import React, {useState} from 'react';
import {Box} from "@mui/material";
import Post from "./Post";

const Feed = () => {
    return (
        <Box flex={4} p={2}>
            <Post initial="F" user="Farhaan" link="https://static.dw.com/image/54705687_401.jpg"/>
            <Post initial="D" user="Dembele" link="https://static.timesofisrael.com/www/uploads/2022/08/Untitled-16.jpg"/>
            <Post initial="J" user="John" link="https://images.indianexpress.com/2022/09/haaland-1.png"/>
        </Box>
    );
};

export default Feed;