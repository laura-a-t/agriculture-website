import React from 'react';
import Container from '@material-ui/core/Container';
import { MuiThemeProvider } from '@material-ui/core';
import {theme} from '../themes/index.js'
import NavTabs from './navigation/nav_tabs.js';
import {Banner} from './navigation/banner.js';
import {Header} from './navigation/header.js';


const MainPage = () => (
            <MuiThemeProvider theme={theme}>
                <Container maxWidth="md">
                    <Header/>
                    <Banner/>
                    <NavTabs/>
                </Container>
            </MuiThemeProvider>
        );

export { MainPage };