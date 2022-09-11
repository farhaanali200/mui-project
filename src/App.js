import {Box, Button, createTheme, Stack, styled, ThemeProvider, Typography} from "@mui/material";
import {Settings} from '@mui/icons-material';
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import Navbar from "./components/Navbar";
import Add from "./components/Add"
import {useState} from "react";


function App() {

    const [mode, setMode] = useState("dark")

    const darkTheme = createTheme({
        palette: {
            mode: mode
        }
    })

  return (
      <ThemeProvider theme={darkTheme}>
    <div>
        <Box bgcolor="background.default" color="text.primary">
          <Navbar></Navbar>
            <Stack direction="row" spacing={2} justifyContent="space-between">
                <Sidebar smode={setMode} mode={mode}/>
                <Feed/>
                <Rightbar/>
            </Stack>
            <Add/>
        </Box>
    </div>
      </ThemeProvider>
  );
}

export default App;
