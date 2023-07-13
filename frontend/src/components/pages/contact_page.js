import React, { Component }  from 'react';
import { connect } from 'react-redux';
import { TextField, Button, MenuItem, FormControl } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import {ENGLISH, ROMANIAN} from '../../state/constants.js';
import {theme} from '../../themes/index.js'


class Contact extends Component {
    render () {

    this.state = {
        name: "",
        email: "",
        subject: "",
        message: "",
        sent: false,
        buttonText: "Send Message",
        emailError: false,
      };

    const inputs = {
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

  return (
    <ThemeProvider theme={theme}>
        <FormControl
        autoComplete="off"
        fullWidth
        >
          <TextField
            id="name"
            value={this.state.name}
            onChange={(e) => this.setState({ name: e.target.value })}
            onBlur={(e) => this.setState({ name: e.target.value })}
            label={inputs.fullName[this.props.language]}
            // error={errors[inputFieldValue.name]}
            fullWidth
            autoComplete="none"
            required="true"
            variant="standard"
            InputProps={{ style: { paddingLeft: 10} }}
            InputLabelProps={{ style: { paddingLeft: 12} }}
          />
          <TextField
            id="email"
            //onChange={}
            //onBlur={}
            label={inputs.email[this.props.language]}
            // error={errors[inputFieldValue.name]}
            fullWidth
            autoComplete="none"
            required="true"
            variant="standard"
            InputProps={{ style: { paddingLeft: 10, paddingTop: 10} }}
            InputLabelProps={{ style: { paddingLeft: 12, paddingTop: 10} }}
          />
          <TextField
            key="subject"
            id="subject"
            select
            variant="filled"
            label={inputs.subject.label[this.props.language]}
            placeholder={inputs.subject.label[this.props.language]}
            fullWidth
          >
            <MenuItem value={10}>{inputs.subject.buy[this.props.language]}</MenuItem>
            <MenuItem value={20}>{inputs.subject.consult[this.props.language]}</MenuItem>
            <MenuItem value={30}>{inputs.subject.other[this.props.language]}</MenuItem>
          </TextField>
          <TextField
            id="message"
            value={this.state.message}
            onChange={(e) => this.setState({ message: e.target.value })}
            onBlur={(e) => this.setState({ message: e.target.value })}
            label={inputs.message[this.props.language]}
            // error={errors[inputFieldValue.name]}
            fullWidth
            autoComplete="none"
            required="true"
            variant="filled"
            multiline="true"
            rows="5"
          />
          <Button
            variant="contained"
            type="submit"
            color="secondary"
            fullWidth
            //disabled={!formIsValid()}
          >
            {inputs.sendText[this.props.language]}
          </Button>
        </FormControl>
    </ThemeProvider>
    )
    }
};

const mapStateToProps = (state) => ({
  language: state.language
})

export default connect(
  mapStateToProps,
  null
)(Contact)