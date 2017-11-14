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
            <div className="pc-flip-container" onClick={this.props.isSelected ? null : this.click.bind(this)} >
                {(this.props.isSelected == false ? 
                    <div className="pc-front"><span className="titleStyle">{this.props.index + 1}</span></div> : 
                    <div className="pc-back"><span className="titleStyle">{this.props.index + 1}</span></div>)}
            </div>
        );
    }

    click() {
        console.log('click' + this.props.index);

        this.props.click(this.props.index);
    }
}

PageControl.defaultProps = {
};

export default PageControl;