import React from 'react';
import Container from '@material-ui/core/Container';
import './main_page.css';
import NavTabs from './nav_tabs.js';


const MainPage = () => (
            <Container maxWidth="md">
            <img src={require('../images/wheat_field.jpg')} alt="" className="banner"/>
            <NavTabs/>
            </Container>
        );

export { MainPage };