import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {ENGLISH, ROMANIAN} from '../../state/constants.js';
import About from '../pages/about_page.js';
import Products from '../pages/products_page.js';
import Contact from '../pages/contact_page.js';

import './nav_tabs.css';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      align="justify"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    'aria-controls': `nav-tabpanel-${index}`,
  };
}

function NavTabs(props) {
    const state = {
        about: {
            [ENGLISH]: 'About',
            [ROMANIAN]: 'Despre'
            },
        products: {
            [ENGLISH]: 'Products',
            [ROMANIAN]: 'Produse'
            },
        contact: {
            [ENGLISH]: 'Contact',
            [ROMANIAN]: 'Contact'
            }
        }

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div position="relative">
      <AppBar position="static">
        <Tabs
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
        >
          <Tab label={state.about[props.language]} {...a11yProps(0)} />
          <Tab label={state.products[props.language]} {...a11yProps(1)} />
          <Tab label={state.contact[props.language]} {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel style={{ background: '#f2fce8' }} value={value} index={0}>
        <About/>
      </TabPanel>
      <TabPanel style={{ background: '#f2fce8' }} value={value} index={1}>
        <Products/>
      </TabPanel>
      <TabPanel style={{ background: '#f2fce8' }} value={value} index={2}>
        <Contact/>
      </TabPanel>
    </div>
  );
}


const mapStateToProps = (state) => ({
  language: state.language
})

export default connect(
  mapStateToProps,
  null
)(NavTabs)