const TOGGLE_SIDEBAR = 'toggleSidebar';
const ON_INPUT_FIELD_CHANGE = 'onInputFieldChange';

let appActions = function(dispatch) {
    return {
        toggleSidebar: () => {
            dispatch({type: TOGGLE_SIDEBAR});
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

export {appActions, TOGGLE_SIDEBAR, ON_INPUT_FIELD_CHANGE};
