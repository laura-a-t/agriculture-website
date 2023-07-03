import React from 'react';
import { connect } from 'react-redux';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

import './products_page.css';
import {productsData} from './products_page_data.js';



class Products extends React.Component {
    render () {
    return (
    <React.Fragment>
      <ImageList cellHeight={300} cols={7} className="cardContainer">
        {productsData.map((product, index) => {
        const name = product.name[this.props.language];
        return (
          <ImageListItem cols={2} key={index} className="card">
            <img src={product.src} alt={name} className="cardImage"/>
            <ImageListItemBar title={name}/>
          </ImageListItem>
        )
        })}
      </ImageList>
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
)(Products)