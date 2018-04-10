import constants from '../../constants';

import {
    TOGGLE_SIDEBAR,
    CAN_WE_TALK,
    ON_TILE_CLICK,
    OPEN_TALK_PAGE,
    CLOSE_TALK_PAGE
} from '../actions/app';

const initialState = {
    showTalkPage: true,
    canTalkStatus: 'hidden',
    showSidebar: true,
    // selectedTiles: [],
    selectedTiles: constants.FAKE_SELECTED_TILES,
    tiles: constants.FAKE_TILE_DATA
};

/**
 * Assigns side-bar state to application's state store.
 *
 * @param state
 * @param action
 * @returns {*}
 */
export default function(state = initialState, action = {}) {
    let index, selectedTiles;

    switch (action.type) {
        case TOGGLE_SIDEBAR:
            return Object.assign({}, state, {
                showSidebar: !state.showSidebar
            });
        case ON_TILE_CLICK:
            selectedTiles = state.selectedTiles.slice(0);
            index = selectedTiles.indexOf(action.payload.tileData);
            if (index === -1) {
                selectedTiles.push(action.payload.tileData);
            } else {
                selectedTiles.splice(index, 1);
            }
            return Object.assign({}, state, {
                canTalkStatus: 'hidden',
                selectedTiles: selectedTiles
            });
        case CAN_WE_TALK:
            return Object.assign({}, state, {
                canTalkStatus: action.payload.canTalkStatus
            });
        case OPEN_TALK_PAGE:
            return Object.assign({}, state, {
                showTalkPage: true
            });
        case CLOSE_TALK_PAGE:
            return Object.assign({}, state, {
                selectedTiles: [],
                canTalkStatus: 'hidden',
                showTalkPage: false
            });
        default:
            return state;
    }
}
