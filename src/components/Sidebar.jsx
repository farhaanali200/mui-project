import React from 'react';
import {Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch} from "@mui/material";
import {AccountBox, Article, Group, Home, ModeNight, Person, Settings, Storefront} from "@mui/icons-material";


const Sidebar = ({smode,mode}) => {
    return (
        <Box
            sx={{
                // backgroundColor: "skyblue",
                display: {xs: "none", sm: "block"}
            }}
            flex={1}
            p={2}
        >
            <Box position="fixed">
            <List>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="#home">
                        <ListItemIcon>
                            <Home />
                        </ListItemIcon>
                        <ListItemText primary="Homepage" />
                    </ListItemButton>
                </ListItem>
            </List>

            <List>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="#home">
                        <ListItemIcon>
                            <Article />
                        </ListItemIcon>
                        <ListItemText primary="Article" />
                    </ListItemButton>
                </ListItem>
            </List>

            <List>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="#home">
                        <ListItemIcon>
                            <Group />
                        </ListItemIcon>
                        <ListItemText primary="Group" />
                    </ListItemButton>
                </ListItem>
            </List>

            <List>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="#home">
                        <ListItemIcon>
                            <Person />
                        </ListItemIcon>
                        <ListItemText primary="Friends" />
                    </ListItemButton>
                </ListItem>
            </List>

            <List>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="#home">
                        <ListItemIcon>
                            <Storefront />
                        </ListItemIcon>
                        <ListItemText primary="Market" />
                    </ListItemButton>
                </ListItem>
            </List>

            <List>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="#home">
                        <ListItemIcon>
                            <Settings />
                        </ListItemIcon>
                        <ListItemText primary="Settings" />
                    </ListItemButton>
                </ListItem>
            </List>

            <List>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="#home">
                        <ListItemIcon>
                            <AccountBox />
                        </ListItemIcon>
                        <ListItemText primary="Profile" />
                    </ListItemButton>
                </ListItem>
            </List>

            <List>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="#home">
                        <ListItemIcon>
                            <ModeNight/>
                        </ListItemIcon>
                        <Switch onChange={e=>smode(mode === "light"? "dark":"light")}> </Switch>
                    </ListItemButton>
                </ListItem>
            </List>
            </Box>
        </Box>
    );
};

export default Sidebar;
