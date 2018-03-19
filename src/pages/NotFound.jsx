import React from 'react';
import {Panel} from 'cisco-ui-components';


/**
 * NotFound: View to be displayed for any unmatched route
 */
export default class NotFound extends React.Component {
    render(){
        return(
            <Panel raised={Panel.RAISED.SMALL}>
                Sorry, no view for current route path
            </Panel>
        );
    }
}


