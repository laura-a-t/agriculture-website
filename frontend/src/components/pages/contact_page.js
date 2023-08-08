import React, { useState }  from 'react';
import { connect } from 'react-redux';
import { TextField, Button, MenuItem, FormControl, Box } from '@mui/material';
import {ENGLISH, ROMANIAN} from '../../state/constants.js';

import styles from './contact_page.css';


const mapEmbedCode = `
    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1400.6124588554214!2d27.622072860201218!3d45.40480387421459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snl!4v1689253274560!5m2!1sen!2snl"
    width="200"
    height="150"
    style="border:0;"
    allowfullscreen=""
    loading="lazy"
    referrerpolicy="no-referrer-when-downgrade"></iframe>
  `;


const inputs = {
    fullName: {
        [ENGLISH]: 'Full Name',
        [ROMANIAN]: 'Nume'
        },
    errorName: {
        [ENGLISH]: 'Name missing',
        [ROMANIAN]: 'Lipsește numele'
        },
    email: {
        [ENGLISH]: 'E-mail',
        [ROMANIAN]: 'E-mail'
        },
    errorEmail: {
        [ENGLISH]: 'Invalid email',
        [ROMANIAN]: 'E-mail nevalabil'
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
    errorSubject: {
        [ENGLISH]: 'Please select a subject',
        [ROMANIAN]: 'Vă rog selectați un subiect'
    },
    message: {
        [ENGLISH]: 'Message',
        [ROMANIAN]: 'Mesaj'
        },
    errorMessage: {
        [ENGLISH]: 'Message cannot be empty',
        [ROMANIAN]: 'Mesajul nu poate fi gol'
    },
    sendText: {
        [ENGLISH]: "Send",
        [ROMANIAN]: "Trimite"
        }
    }


function Contact(props) {

    const [name, setName] = useState('');
    const [nameHasError, setNameHasError] = useState(false);
    const [email, setEmail] = useState('');
    const [emailHasError, setEmailHasError] = useState(false);
    const [subject, setSubject] = useState('');
    const [subjectHasError, setSubjectHasError] = useState(false);
    const [message, setMessage] = useState('');
    const [messageHasError, setMessageHasError] = useState(false);
    const [isFormValid, setIsFormValid] = useState(false);
    const [isSent, setIsSent] = useState(false);
    const [isSentError, setIsSentError] = useState(false);

    const [sentFeedback, setSentFeedback] = useState({
        [ENGLISH]: '',
        [ROMANIAN]: ''
    });

    const validateEmail = (email) => {
    // Simple email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
    };

    const updateIsFormValid = () => {
      setIsFormValid(!emailHasError && email !== '' && name !== '' && subject !== '' && message !== '');
    }

    const handleEmailChange = (e) => {
      setEmail(e.target.value);
      const hasError = !validateEmail(e.target.value);
      setEmailHasError(hasError);
      updateIsFormValid();
    };

    const handleNameChange = (e) => {
      setName(e.target.value);
      const hasError = e.target.value === '';
      setNameHasError(hasError);
      updateIsFormValid();
    };

    const handleSubjectChange = (e) => {
      setSubject(e.target.value);
      const hasError = e.target.value === '';
      setSubjectHasError(hasError);
      updateIsFormValid();
    };

    const handleMessageChange = (e) => {
      setMessage(e.target.value);
      const hasError = e.target.value === '';
      setMessageHasError(hasError);
      updateIsFormValid();
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        let res = await fetch("https://geterra.ro/backend/send_email/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json; charset=utf-8",
          },
          body: JSON.stringify({
            name: name,
            email: email,
            subject: subject,
            message: message
          }),
          mode: "cors"
        });
        let resJson = await res.json();
        setIsSent(true);
        if (res.status === 200) {
          setSentFeedback({
            [ENGLISH]: 'Message successfully sent!',
            [ROMANIAN]: 'Mesajul a fost trimis!'
          });
          setIsSentError(false);
        } else {
          console.log(resJson.message);
          setSentFeedback({
            [ENGLISH]: 'Message failed to send. Try again later',
            [ROMANIAN]: 'Mesajul nu a putut fi trimis. Încercați mai târziu'
          });
          setIsSentError(true);
        }
      } catch (err) {
        setIsSent(true);
        console.log(err);
        setSentFeedback({
            [ENGLISH]: 'Message failed to send. Try again later',
            [ROMANIAN]: 'Mesajul nu a putut fi trimis. Încercați mai târziu'
          });
        setIsSentError(true);
      }
    };

  return (
    <div className="contactContainer">
        {isSent ? <Box>{sentFeedback[props.language]}</Box> :
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
            error={nameHasError}
            helperText={nameHasError ? inputs.errorName[props.language] : ''}
            fullWidth
            autoComplete="none"
            required={true}
            variant="standard"
            InputProps={{ style: { paddingLeft: 10} }}
            InputLabelProps={{ style: { paddingLeft: 12} }}
          />
          <TextField
            id="email"
            onChange={handleEmailChange}
            onBlur={handleEmailChange}
            label={inputs.email[props.language]}
            error={emailHasError}
            helperText={emailHasError ? inputs.errorEmail[props.language] : ''}
            fullWidth
            autoComplete="none"
            required={true}
            variant="standard"
            InputProps={{ style: { paddingLeft: 10, paddingTop: 10} }}
            InputLabelProps={{ style: { paddingLeft: 12, paddingTop: 10} }}
          />
          <TextField
            key="subject"
            id="subject"
            onChange={handleSubjectChange}
            onBlur={handleSubjectChange}
            error={subjectHasError}
            helperText={subjectHasError ? inputs.errorSubject[props.language] : ''}
            select
            defaultValue=""
            variant="filled"
            label={inputs.subject.label[props.language]}
            placeholder={inputs.subject.label[props.language]}
            fullWidth
          >
            <MenuItem value={inputs.subject.buy[props.language]}>{inputs.subject.buy[props.language]}</MenuItem>
            <MenuItem value={inputs.subject.consult[props.language]}>{inputs.subject.consult[props.language]}</MenuItem>
            <MenuItem value={inputs.subject.other[props.language]}>{inputs.subject.other[props.language]}</MenuItem>
          </TextField>
          <TextField
            id="message"
            value={message}
            onChange={handleMessageChange}
            onBlur={handleMessageChange}
            label={inputs.message[props.language]}
            error={messageHasError}
            helperText={messageHasError ? inputs.errorMessage[props.language] : ''}
            fullWidth
            autoComplete="none"
            required={true}
            variant="filled"
            multiline={true}
            rows="3"
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
        </FormControl>}
        <div className="mapAddressContainer">
            <div dangerouslySetInnerHTML={{ __html: mapEmbedCode }} className="mapContainer"/>
            <p style={{whiteSpace: 'pre-wrap'}}>Strada Matei Basarab 103 bis{"\n"}
            Măxineni, Brăila{"\n"}
            România</p>
      </div>
    </div>
    )
};

const mapStateToProps = (state) => ({
  language: state.language
})

export default connect(
  mapStateToProps,
  null
)(Contact)