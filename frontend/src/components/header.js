import React from 'react';
import LanguageSelect from './language_buttons.js';
import './header.css';

export const Header = ({handleChange}) => (
    <div className="headerWrapper">
        <LanguageSelect handleChange={handleChange}/>
    </div>
)