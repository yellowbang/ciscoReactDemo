import React from 'react';

/**
 * Example use of CUI's Loaders
 */
export default class CUILoaders extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div className="cuiLoadingEx row">
                <div className="col-md-3">
                    <div className="panel panel--dkgray">
                        <h4 className="text-center">Default</h4>
                        <div className="loading-dots">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="panel panel--bordered">
                        <h4 className="text-center">Muted</h4>
                        <div className="loading-dots loading-dots--muted">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="panel panel--bordered">
                        <h4 className="text-center">Success</h4>
                        <div className="loading-dots loading-dots--success">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="panel panel--bordered">
                        <h4 className="text-center">Info</h4>
                        <div className="loading-dots loading-dots--info">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
