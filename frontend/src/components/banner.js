import React from 'react';
import {LanguageSelect} from './language_buttons.js'


export const Banner = () => (
    <React.Fragment className="container">
    <img src={require('../images/wheat_field.jpg')} alt="" className="banner"/>
    <LanguageSelect  className="languageSelect"/>
    </React.Fragment>
)