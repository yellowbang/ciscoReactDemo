import React from 'react';
import {Button} from 'cisco-ui-components';
import Page from './Page';
import LABELS from '../strings';
import Gauges from './Gauges';

import './Pages.scss';


/**
 * Page1: Page to be displayed for route /page1
 */
export default class Page1 extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <Page pageId="page1" headerLabel={LABELS.page1Header}>
                <Gauges />
            </Page>
        );
    }
}
