require('normalize.css/normalize.css');
require('styles/PageControl.css');

import React from 'react';
import ClassNames from 'classnames';

class PageControl extends React.Component {
    constructor(props) {
        console.log('constructor');
        super(props);
    }

    render() {
        return (
            <div className="flip-container" >
                <div className={ClassNames({"flipper": this.props.isSelected})}>
                    <div className="front">
                        <h5>{this.props.index + 1}</h5>
                    </div>
                    <div className="back">
                        <h5>{this.props.index + 1}</h5>
                    </div>
                </div>
            </div>
        );
    }
}

PageControl.defaultProps = {
};

export default PageControl;