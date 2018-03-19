import {
    TOGGLE_SIDEBAR,
    ON_INPUT_FIELD_CHANGE
} from '../actions/app';

const initialState = {
    showSidebar: true,
    imageUrl: "https://www.w3schools.com/images/w3schools_green.jpg",
    text: ''
};

/**
 * Assigns side-bar state to application's state store.
 *
 * @param state
 * @param action
 * @returns {*}
 */

export default function (state = initialState, action = {}) {
    switch (action.type) {
        case TOGGLE_SIDEBAR:
            return Object.assign({}, state, {
                showSidebar: !state.showSidebar
            });
        case ON_INPUT_FIELD_CHANGE:
            return Object.assign({}, state, {
                text: action.payload.value
            });
        default:
            return state;
    }
}
