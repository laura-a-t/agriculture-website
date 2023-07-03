import React from 'react';
import { connect } from 'react-redux';
import {ENGLISH, ROMANIAN} from '../../state/constants.js';

const AboutEnglish = () => (
    <React.Fragment>
      <p>
        My name is Gelu Țurcanu and I am the manager of Geterra, a family company from Măxineni, Brăila county, focused
        on growing grains.
      </p>
      <p>
        I graduated from the Ion Ionescu de la Brad, Iasi university with a degree in agriculture and I work for over 30
        years in this field. I have worked as a consultant in cultivating grains, and also as a manager of my own
        company, Geterra.
      </p>
      <p>
        If you are interested to buy grains in bulk straight from the producer, please contact me via the form in the
        Contact section. Delivery is possible only during the harvest season, as we do not have storage facilities.
      </p>
      <p>
        For consultancy services in cultivating grain crops, please use the same form for contact.
      </p>
    </React.Fragment>
);

const AboutRomanian = () => (
    <React.Fragment>
      <p>
        Mă numesc Gelu Țurcanu și sunt managerul Geterra, o companie de familie din Măxineni, județul Brăila,
        producătoare de cereale.
       </p>
       <p>
        Am absolvit facultatea Ion Ionescu de la Brad din Iași ca inginer agronom, și lucrez în agricultură de peste 30
        de ani. Am lucrat drept consultant în producerea cerealelor, dar și ca manager al propriei companii, Geterra.
      </p>
      <p>
        Dacă doriți să cumpărați cereale en gros direct de la producător, vă rog să mă contactați via formularul din
        secțiunea Contact. Livrarea este posibilă doar în perioada recoltei, deoarece nu avem servicii de stocare a
        cerealelor.
      </p>
      <p>
        Pentru consultanță în domeniul agricol (creșterea cerealelor), vă rog folosiți același formular pentru contact.
      </p>
    </React.Fragment>
);


class About extends React.Component {
    constructor(props) {
    super();
    this.state = {
        text: {
            [ENGLISH]: <AboutEnglish/>,
            [ROMANIAN]: <AboutRomanian/>
        }
    }
    }

    render () {
    return (
    <React.Fragment>
      {this.state.text[this.props.language]}
    </React.Fragment>
    )
    }
};

const mapStateToProps = (state) => ({
  language: state.language
})

export default connect(
  mapStateToProps,
  null
)(About)