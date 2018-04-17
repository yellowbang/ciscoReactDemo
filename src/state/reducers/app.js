import constants from '../../constants';

import {
    TOGGLE_SIDEBAR,
    POPULATE_TILES,
    CAN_WE_TALK,
    ON_TILE_CLICKED,
    ON_TILE_NUMBER_CLICKED,
    OPEN_TALK_PAGE,
    CLOSE_TALK_PAGE,
    OPEN_HOW_THEY_TALK_PAGE,
    CLOSE_HOW_THEY_TALK_PAGE
} from '../actions/app';

const initialState = {
    showTalkPage: false,
    howTheyTalkData: undefined,
    canTalkStatus: 'hidden',
    showSidebar: true,
    popupTableData: [],
    selectedTiles: [],
    // selectedTiles: constants.FAKE_SELECTED_TILES,
    chordData: [],
    tiles: []
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
        case POPULATE_TILES:
            return Object.assign({}, state, {
                tiles: action.payload.tiles
            });
        case ON_TILE_NUMBER_CLICKED:
            return Object.assign({}, state, {
                popupTableData: action.payload.data
            });
        case ON_TILE_CLICKED:
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
                chordData: action.payload.data,
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
        case OPEN_HOW_THEY_TALK_PAGE:
            return Object.assign({}, state, {
                howTheyTalkData: action.payload.data
            });
        case CLOSE_HOW_THEY_TALK_PAGE:
            return Object.assign({}, state, {
                howTheyTalkData: undefined
            });
        default:
            return state;
    }
}
