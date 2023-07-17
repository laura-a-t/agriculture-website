import React from 'react';
import { connect } from 'react-redux';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import {ENGLISH, ROMANIAN} from '../../state/constants.js';
import { selectLanguage } from '../../state/actions.js';

import './language_buttons.css';


class LanguageSelect extends React.Component {
    handleChange(language) {
        this.props.selectLanguage(language);
    }

    render(){
    return (
      <div className="button-overlay">
          <ButtonGroup variant="text" aria-label="button group" style={{ backgroundColor: '#f2fce8' }}>
            <Button onClick={() => (this.handleChange(ENGLISH))}><b>{ENGLISH}</b></Button>
            <Button onClick={() => (this.handleChange(ROMANIAN))}><b>{ROMANIAN}</b></Button>
          </ButtonGroup>
      </div>
      )
    }
  }



export default connect(
  null,
  {selectLanguage}
)(LanguageSelect)