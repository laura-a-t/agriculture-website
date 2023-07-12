import React from 'react';
import { connect } from 'react-redux';
import { TextField, Button, Select, MenuItem } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import {ENGLISH, ROMANIAN} from '../../state/constants.js';
import {theme} from '../../themes/index.js'


function Contact(props) {
    const state = {
    fullName: {
        [ENGLISH]: 'Full Name',
        [ROMANIAN]: 'Nume'
        },
    email: {
        [ENGLISH]: 'E-mail',
        [ROMANIAN]: 'E-mail'
        },
    subject: {
        label: {
            [ENGLISH]: 'Subject',
            [ROMANIAN]: 'Subiect'
            },
        buy: {
            [ENGLISH]: 'Grain acquisition',
            [ROMANIAN]: 'Cumpărare cereale'
            },
        consult: {
            [ENGLISH]: 'Advisory services',
            [ROMANIAN]: 'Consultanță'
            },
        other: {
            [ENGLISH]: 'Other',
            [ROMANIAN]: 'Alt subiect'
            }
        },
    message: {
        [ENGLISH]: 'Message',
        [ROMANIAN]: 'Mesaj'
        },
    sendText: {
        [ENGLISH]: "Send",
        [ROMANIAN]: "Trimite"
    }
    }

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <ThemeProvider theme={theme}>
        <form autoComplete="off">
          <TextField
            id="name"
            //onChange={}
            //onBlur={}
            label={state.fullName[props.language]}
            // error={errors[inputFieldValue.name]}
            fullWidth
            autoComplete="none"
            required="true"
            variant="standard"
          />
          <TextField
            id="email"
            //onChange={}
            //onBlur={}
            label={state.email[props.language]}
            // error={errors[inputFieldValue.name]}
            fullWidth
            autoComplete="none"
            required="true"
            variant="standard"
          />
          <Select
            id="subject"
            label={state.subject.label[props.language]}
            variant="standard"
            fullWidth
            //onChange={handleChange}
          >
            <MenuItem value={10}>{state.subject.buy[props.language]}</MenuItem>
            <MenuItem value={20}>{state.subject.consult[props.language]}</MenuItem>
            <MenuItem value={30}>{state.subject.other[props.language]}</MenuItem>
          </Select>
          <TextField
            id="message"
            //onChange={}
            //onBlur={}
            label={state.message[props.language]}
            // error={errors[inputFieldValue.name]}
            fullWidth
            autoComplete="none"
            required="true"
            variant="filled"
            multiline="true"
          />
          <Button
            variant="contained"
            type="submit"
            color="secondary"
            fullWidth
            //disabled={!formIsValid()}
          >
            {state.sendText[props.language]}
          </Button>
        </form>
    </ThemeProvider>
    )
};

const mapStateToProps = (state) => ({
  language: state.language
})

export default connect(
  mapStateToProps,
  null
)(Contact)