const TOGGLE_SIDEBAR = 'toggleSidebar';
const CAN_WE_TALK = 'canWeTalk';
const WHO_CAN_TALK = 'whoCanTalk';

let appActions = function(dispatch) {
    return {
        toggleSidebar: () => {
            dispatch({type: TOGGLE_SIDEBAR});
        },
        canWeTalk: () => {
            dispatch({type: CAN_WE_TALK});
        },
        whoCanTalk: () => {
            dispatch({type: WHO_CAN_TALK});
        }
    };
};

export {
    appActions,
    CAN_WE_TALK,
    WHO_CAN_TALK,
    TOGGLE_SIDEBAR
};
