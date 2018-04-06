const TOGGLE_SIDEBAR = 'toggleSidebar';
const ON_TILE_CLICK = 'onTileClicked';
const CAN_WE_TALK = 'canWeTalk';
const WHO_CAN_TALK = 'whoCanTalk';

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
        whoCanTalk: () => {
            dispatch({type: WHO_CAN_TALK});
        }
    };
};

export {
    appActions,
    ON_TILE_CLICK,
    CAN_WE_TALK,
    WHO_CAN_TALK,
    TOGGLE_SIDEBAR
};
