import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import {ENGLISH, ROMANIAN} from '../state/constants.js';


export const LanguageSelect = () =>
(
      <ButtonGroup variant="text">
        <Button><b>{ENGLISH}</b></Button>
        <Button><b>{ROMANIAN}</b></Button>
      </ButtonGroup>
  );
