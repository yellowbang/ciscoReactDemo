const TOGGLE_SIDEBAR = 'toggleSidebar';
const ON_TILE_CLICK = 'onTileClicked';
const CAN_WE_TALK = 'canWeTalk';
const OPEN_TALK_PAGE = 'openTalkPage';
const CLOSE_TALK_PAGE = 'closeTalkPage';

let appActions = function(dispatch) {

    function fakeCheckCanTalk (selectedTiles) {
        return (selectedTiles[0].name !== selectedTiles[1].name) ? 'yes' : 'no';
    }

    return {
        toggleSidebar: () => {
            dispatch({type: TOGGLE_SIDEBAR});
        },
        onTileClicked: (tileData) => {
            dispatch({
                type: ON_TILE_CLICK,
                payload: {tileData}
            });
        },
        canWeTalk: (selectedTiles) => {
            dispatch({
                type: CAN_WE_TALK,
                payload: {canTalkStatus: fakeCheckCanTalk(selectedTiles)}
            });
        },
        openTalkPage: () => {
            dispatch({type: OPEN_TALK_PAGE});
        },
        closeTalkPage: () => {
            dispatch({type: CLOSE_TALK_PAGE});
        }
    };
};

export {
    appActions,
    ON_TILE_CLICK,
    CAN_WE_TALK,
    OPEN_TALK_PAGE,
    CLOSE_TALK_PAGE,
    TOGGLE_SIDEBAR
};
