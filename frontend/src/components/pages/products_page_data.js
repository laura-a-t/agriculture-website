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
        [ENGLISH]: 'rapeseed',
        [ROMANIAN]: 'rapita',
     },
   },
   {
     src: require('../../images/shutterstock_soy_500x500.jpg'),
     name: {
        [ENGLISH]: 'soy',
        [ROMANIAN]: 'soia',
     },
   },
   {
     src: require('../../images/shutterstock_sunflower_500x500.jpg'),
     name: {
        [ENGLISH]: 'sunflower',
        [ROMANIAN]: 'floarea soarelui',
     },
   },
   {
     src: require('../../images/shutterstock_wheat_500x500.jpg'),
     name: {
        [ENGLISH]: 'wheat',
        [ROMANIAN]: 'grau',
     },
   }
 ];