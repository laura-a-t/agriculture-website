import React from 'react';
import { connect } from 'react-redux';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

import './products_page.css';
import {productsData} from './products_page_data.js';



class Products extends React.Component {
    render () {
    return (
    <React.Fragment>
      <GridList cellHeight={300} cols={7} className="cardContainer">
        {productsData.map((product, index) => {
        const name = product.name[this.props.language];
        return (
          <GridListTile cols={2} key={index} className="card">
            <img src={product.src} alt={name} className="cardImage"/>
            <GridListTileBar title={name}/>
          </GridListTile>
        )
        })}
      </GridList>
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