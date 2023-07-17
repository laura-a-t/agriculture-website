import React, { useState }  from 'react';
import { connect } from 'react-redux';
import { TextField, Button, MenuItem, FormControl } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import {ENGLISH, ROMANIAN} from '../../state/constants.js';
import {theme} from '../../themes/index.js'


const mapEmbedCode = `
    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1400.6124588554214!2d27.622072860201218!3d45.40480387421459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snl!4v1689253274560!5m2!1sen!2snl"
    width="200"
    height="150"
    style="border:0;"
    allowfullscreen=""
    loading="lazy"
    referrerpolicy="no-referrer-when-downgrade"></iframe>
  `;


function Contact(props) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isFormValid, setIsFormValid] = useState(false);

    const validateEmail = (email) => {
    // Simple email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

    const handleEmailChange = (e) => {
      const newEmail = e.target.value;
      setEmail(newEmail);
      setIsFormValid(validateEmail(newEmail) && newEmail !== '' && message !== '' && name !== '');
    };

    const handleNameChange = (e) => {
      setName(e.target.value);
      setIsFormValid(validateEmail(email) && email !== '' && message !== '' && name !== '');
    };

    const handleMessageChange = (e) => {
      setMessage(e.target.value);
      setIsFormValid(validateEmail(email) && email !== '' && message !== '' && name !== '');
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission logic here
      // You can send the form data to a server or perform any other actions
      console.log('Form submitted:', { name, email, message });
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
        sx={{ width: '50%' }}
        component="form"
        onSubmit={handleSubmit}
        >
          <TextField
            id="name"
            value={name}
            onChange={handleNameChange}
            onBlur={handleNameChange}
            label={inputs.fullName[props.language]}
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
            onChange={handleEmailChange}
            onBlur={handleEmailChange}
            label={inputs.email[props.language]}
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
            label={inputs.subject.label[props.language]}
            placeholder={inputs.subject.label[props.language]}
            fullWidth
          >
            <MenuItem value={10}>{inputs.subject.buy[props.language]}</MenuItem>
            <MenuItem value={20}>{inputs.subject.consult[props.language]}</MenuItem>
            <MenuItem value={30}>{inputs.subject.other[props.language]}</MenuItem>
          </TextField>
          <TextField
            id="message"
            value={message}
            onChange={handleMessageChange}
            onBlur={handleMessageChange}
            label={inputs.message[props.language]}
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
            disabled={!isFormValid}
          >
            {inputs.sendText[props.language]}
          </Button>
        </FormControl>
        <div>
            <div dangerouslySetInnerHTML={{ __html: mapEmbedCode }} />
            <p style={{whiteSpace: 'pre-wrap'}}>Strada Matei Basarab 103 bis{"\n"}
            Măxineni, Brăila{"\n"}
            România</p>
      </div>
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