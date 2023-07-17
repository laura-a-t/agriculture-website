import React from 'react';
import LanguageSelect from './language_buttons.js';
import './header.css';

export const Header = ({handleChange}) => (
     <div className="banner-container">
      <img src={require('../../images/wheat_field.jpg')} alt="Banner" className="banner-image" />
      <LanguageSelect/>
    </div>
)