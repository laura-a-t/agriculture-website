import {ENGLISH} from './constants.js';
import {SELECT_LANGUAGE} from './actions.js';

const initialState = {
    language: ENGLISH
}


export default function changeLanguage(state = initialState, action) {
    if (action.type === SELECT_LANGUAGE) {
        return {
        ...state,
        language: action.lang
        }
    }
    return state
}