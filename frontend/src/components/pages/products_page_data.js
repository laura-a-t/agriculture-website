import {ENGLISH, ROMANIAN} from '../../state/constants.js';

export const productsData = [
   {
     src: require('../../images/shutterstock_corn_500x500.jpg'),
     name: {
        [ENGLISH]: 'CORN',
        [ROMANIAN]: 'PORUMB',
     },
   },
   {
     src: require('../../images/shutterstock_rapeseed_500x500.jpg'),
     name: {
        [ENGLISH]: 'RAPESEED',
        [ROMANIAN]: 'RAPITA',
     },
   },
   {
     src: require('../../images/shutterstock_soy_500x500.jpg'),
     name: {
        [ENGLISH]: 'SOY',
        [ROMANIAN]: 'SOIA',
     },
   },
   {
     src: require('../../images/shutterstock_sunflower_500x500.jpg'),
     name: {
        [ENGLISH]: 'SUNFLOWER',
        [ROMANIAN]: 'FLOAREA SOARELUI',
     },
   },
   {
     src: require('../../images/shutterstock_wheat_500x500.jpg'),
     name: {
        [ENGLISH]: 'WHEAT',
        [ROMANIAN]: 'GRAU',
     },
   }
 ];