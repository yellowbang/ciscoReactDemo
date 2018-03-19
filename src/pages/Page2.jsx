import React from 'react';
import Page from './Page';
import LABELS from '../strings';

import './Pages.scss';
import Loaders from './Loaders';


/**
 * Page2: Page to be displayed for route /page2
 */
export default class Page2 extends React.Component {
    render() {
        return (
            <Page pageId="page2" headerLabel={LABELS.page2Header} >
                <Loaders />
            </Page>
        );
    }
}

