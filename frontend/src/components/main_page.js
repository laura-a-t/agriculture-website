import React from 'react';
import Container from '@material-ui/core/Container';
import './main_page.css';


const MainPage = () => (
            <Container maxWidth="md">
            <img src={require('../images/wheat_field.jpg')} alt="" className="banner"/>
            </Container>
        );

export { MainPage };