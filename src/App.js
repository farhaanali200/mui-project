import {Button, styled, Typography} from "@mui/material";
import {Settings,Add} from '@mui/icons-material';

function App() {

    const BlueButton = styled(Button) (({theme}) =>({
        backgroundColor: theme.palette.otherColor.main,
        color: "white",
        margin: 5,
        "&:hover": {
            backgroundColor: "red"
        },
        "&:disabled": {
            backgroundColor: "yellow"
        }
    }));

  return (
    <div>
        <Button startIcon={<Settings/>} color="secondary" size="small">Settings</Button>
        <Button startIcon={<Add/>} variant="contained" color="success" size="small">
            Add new post
        </Button>
        <Typography variant="h1" component="p">
            It uses h1 style but its a p tag
        </Typography>;
        <Button variant="contained"
        sx ={{
            backgroundColor: "blue",
            color: "white",
            margin: 5,
            "&:hover": {
                backgroundColor: "red"
            },
            "&:disabled": {
                backgroundColor: "yellow"
            }
        }}
        >My unique Button</Button>
        <BlueButton>Another Button</BlueButton>
    </div>
  );
}

export default App;
