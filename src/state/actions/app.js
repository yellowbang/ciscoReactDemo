const TOGGLE_SIDEBAR = 'toggleSidebar';
const ON_INPUT_FIELD_CHANGE = 'onInputFieldChange';
const ON_CLICK_REFRESH = 'onClickRefresh';

let appActions = function(dispatch) {
    return {
        toggleSidebar: () => {
            dispatch({type: TOGGLE_SIDEBAR});
        },

        onClickRefresh: () => {
            dispatch({type: ON_CLICK_REFRESH});
        },

        onInputFieldChange: (inputField) => {
            let value = inputField.target.value;
            dispatch({type: ON_INPUT_FIELD_CHANGE, payload: {value}});
        }
        // the above is same as:
        // onInputFieldChange: function (inputField) {
        //     let value = inputField.target.value;
        //     dispatch({type: ON_INPUT_FIELD_CHANGE, payload: {value: value}});
        // },

    };
};

export {appActions, TOGGLE_SIDEBAR, ON_INPUT_FIELD_CHANGE, ON_CLICK_REFRESH};
