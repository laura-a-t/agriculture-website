import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import {ENGLISH, ROMANIAN} from '../state/constants.js';


export const LanguageSelect = ({handleChange}) =>
(
      <ButtonGroup variant="text">
        <Button onclick={handleChange}><b>{ENGLISH}</b></Button>
        <Button onclick={handleChange}><b>{ROMANIAN}</b></Button>
      </ButtonGroup>
  );
