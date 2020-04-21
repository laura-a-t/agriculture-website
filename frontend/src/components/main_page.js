import React from 'react';
import Container from '@material-ui/core/Container';
import { MuiThemeProvider } from '@material-ui/core';
import {theme} from '../css/themes.js'
import './main_page.css';
import NavTabs from './nav_tabs.js';


const MainPage = () => (
            <Container maxWidth="md">
            <MuiThemeProvider theme={theme}>
            <img src={require('../images/wheat_field.jpg')} alt="" className="banner"/>
            <NavTabs/>
            </MuiThemeProvider>
            </Container>
        );

export { MainPage };