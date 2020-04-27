import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import {ENGLISH, ROMANIAN} from '../state/constants.js';


export const LanguageSelect = () =>
(
      <ButtonGroup color="primary" aria-label="outlined primary button group">
        <Button>{ENGLISH}</Button>
        <Button>{ROMANIAN}</Button>
      </ButtonGroup>
  );
