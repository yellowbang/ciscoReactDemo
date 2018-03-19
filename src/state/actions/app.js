const TOGGLE_SIDEBAR = 'toggleSidebar';

let appActions = function(dispatch) {
    return {
        toggleSidebar: () => {
            dispatch({type: TOGGLE_SIDEBAR});
        }
    };
};

export {appActions, TOGGLE_SIDEBAR};
