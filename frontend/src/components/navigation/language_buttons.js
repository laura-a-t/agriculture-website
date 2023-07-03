import React from 'react';
import { connect } from 'react-redux';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import {ENGLISH, ROMANIAN} from '../../state/constants.js';
import { selectLanguage } from '../../state/actions.js';


class LanguageSelect extends React.Component {
    handleChange(language) {
        this.props.selectLanguage(language);
    }

    render(){
    return (
      <ButtonGroup variant="text">
        <Button onClick={() => (this.handleChange(ENGLISH))}><b>{ENGLISH}</b></Button>
        <Button onClick={() => (this.handleChange(ROMANIAN))}><b>{ROMANIAN}</b></Button>
      </ButtonGroup>
      )
    }
  }



export default connect(
  null,
  {selectLanguage}
)(LanguageSelect)