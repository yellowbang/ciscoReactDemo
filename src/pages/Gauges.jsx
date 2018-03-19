import React from 'react';


/**
 * Example use of CUI's Gauges
 */
export default class CUIGauges extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div className="cuiGaugesEx">
                <div className="gauge-container">
                    <div className="gauge gauge--alt gauge--info" data-percentage="25">
                        <div className="gauge__circle">
                            <div className="mask full">
                                <div className="fill"></div>
                            </div>
                            <div className="mask half">
                                <div className="fill"></div>
                                <div className="fill fix"></div>
                            </div>
                        </div>
                        <div className="gauge__inset">
                            <div className="gauge__percentage">25</div>
                        </div>
                    </div>
                    <div className="gauge__label">Routers</div>
                </div>
                <div className="gauge-container">
                    <div className="gauge gauge--alt gauge--success" data-percentage="50">
                        <div className="gauge__circle">
                            <div className="mask full">
                                <div className="fill"></div>
                            </div>
                            <div className="mask half">
                                <div className="fill"></div>
                                <div className="fill fix"></div>
                            </div>
                        </div>
                        <div className="gauge__inset">
                            <div className="gauge__percentage">50</div>
                        </div>
                    </div>
                    <div className="gauge__label">Switches</div>
                </div>
                <div className="gauge-container">
                    <div className="gauge gauge--alt gauge--warning" data-percentage="75">
                        <div className="gauge__circle">
                            <div className="mask full">
                                <div className="fill"></div>
                            </div>
                            <div className="mask half">
                                <div className="fill"></div>
                                <div className="fill fix"></div>
                            </div>
                        </div>
                        <div className="gauge__inset">
                            <div className="gauge__percentage">75</div>
                        </div>
                    </div>
                    <div className="gauge__label">Firewalls</div>
                </div>
                <div className="gauge-container">
                    <div className="gauge gauge--alt gauge--danger" data-percentage="100">
                        <div className="gauge__circle">
                            <div className="mask full">
                                <div className="fill"></div>
                            </div>
                            <div className="mask half">
                                <div className="fill"></div>
                                <div className="fill fix"></div>
                            </div>
                        </div>
                        <div className="gauge__inset">
                            <div className="gauge__percentage">100</div>
                        </div>
                    </div>
                    <div className="gauge__label">Wireless Access Points</div>
                </div>
            </div>
        );
    }
}
