import React from 'react';
import { connect } from 'react-redux';
import {ENGLISH, ROMANIAN} from '../../state/constants.js';

const AboutEnglish = () => (
    <React.Fragment>
      <p>
        We are a family company from Braila county, Romania, focused on growing cereals.
       </p>
       <p>
        Gelu Turcanu has graduated with an Agriculture degree from the Ion Ionescu de la Brad University in Iasi.
        He has been working in this field for over 30 years, for the past 10 years as a consultant and running this
        bussiness as well.
        As a small company we are looking for bussinesses that want to work directly with us.
      </p>
    </React.Fragment>
);

const AboutRomanian = () => (
    <React.Fragment>
      <p>
        Suntem on companie de familie  din Maxineni, judetul Braila, producatoare de cereale.
       </p>
       <p>
        Gelu Turcanu a absolvit facultatea Ion Ionescu de la Brad din Iasi ca inginer agronom.
        Lucreaza in agricultura de peste 30 de ani, iar in ultimii 10 ani a lucrat drept consultant, si ca manager al
        acestei companii.
        Suntem interesati sa lucram direct cu companii care vor sa cumpere direct de la producator.
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