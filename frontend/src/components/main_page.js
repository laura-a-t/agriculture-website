import React from 'react';
import Container from '@material-ui/core/Container';
import { MuiThemeProvider } from '@material-ui/core';
import {theme} from '../css/themes.js'
import './main_page.css';
import NavTabs from './nav_tabs.js';
import {Banner} from './banner.js';


const MainPage = () => (
            <Container maxWidth="md">
                <MuiThemeProvider theme={theme}>
                    <Banner/>
                    <NavTabs/>
                </MuiThemeProvider>
            </Container>
        );

export { MainPage };