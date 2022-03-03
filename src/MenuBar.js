import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import {createTheme, Slide, styled, ThemeProvider, useScrollTrigger} from "@mui/material";
import PropTypes from 'prop-types';

const Offset = styled('div')(({theme}) => theme.mixins.toolbar);

const menuButtonTheme = createTheme({
    typography: {
        button: {
            fontSize: "1.1rem",
            textTransform: "none"
        }
    }
});

const pages = ['Home', 'Resume', 'Skills', 'Books', 'Courses', 'Projects', 'Blog', 'Contact'];

function HideOnScroll(props) {
    const {children} = props;
    return (
        <Slide appear={false} direction="down" in={!useScrollTrigger()}>
            {children}
        </Slide>
    );
}

HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
};


const MenuBar = () => {

    return (
        <React.Fragment>
            <HideOnScroll>
                <AppBar>
                    <Container maxWidth="xl">
                        <Toolbar disableGutters
                                 sx={{justifyContent: "space-between"}}>
                            <ThemeProvider theme={menuButtonTheme}>
                                <Button
                                    key="Lukas Woodtli"
                                    sx={{color: 'white'}}
                                >
                                    Lukas Woodtli
                                </Button>
                                <div/>
                                <Box>
                                    {pages.map((page) => (
                                        <Button
                                            key={page}
                                            sx={{color: 'white'}}
                                        >
                                            {page}
                                        </Button>
                                    ))}
                                </Box>
                            </ThemeProvider>
                        </Toolbar>
                    </Container>
                </AppBar>
            </HideOnScroll>
            <Offset/>
        </React.Fragment>
    );
};
export default MenuBar;
