import React from 'react';
import Container from '@mui/material/Container';
import { ThemeProvider } from '@mui/material/styles';
import {theme} from '../themes/index.js'
import NavTabs from './navigation/nav_tabs.js';
import {Banner} from './navigation/banner.js';
import {Header} from './navigation/header.js';


const MainPage = () => (
            <ThemeProvider theme={theme}>
                <Container maxWidth="md">
                    <Header/>
                    <Banner/>
                    <NavTabs/>
                </Container>
            </ThemeProvider>
        );

export { MainPage };