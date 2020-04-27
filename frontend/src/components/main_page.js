import React from 'react';
import Container from '@material-ui/core/Container';
import { MuiThemeProvider } from '@material-ui/core';
import {theme} from '../css/themes.js'
import NavTabs from './nav_tabs.js';
import {Banner} from './banner.js';
import {LanguageSelect} from './language_buttons.js'


const MainPage = () => (
            <MuiThemeProvider theme={theme}>
                <Container maxWidth="md">
                    <Banner/>
                    <NavTabs/>
                </Container>
                <LanguageSelect/>
            </MuiThemeProvider>
        );

export { MainPage };