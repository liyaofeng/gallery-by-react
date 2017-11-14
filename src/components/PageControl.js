require('normalize.css/normalize.css');
require('styles/PageControl.css');

import React from 'react';
import ClassNames from 'classnames';

class Image extends React.Component {
    constructor(props) {
        console.log('constructor');
        super(props);
    }

    render() {
        console.log('render'); 
        return (
            <div className="flip-container" style={this.props.position.style} onClick={}>
                <div className={ClassNames({"flipper": this.props.position.isCenter})}>
                    <div className="front">
                        <img className="figureImg"
                            src={this.props.value.imageURL}
                            alt={this.props.value.desc}
                        />
                        <h2 className="figureTitle">{this.props.value.title}</h2>
                    </div>
                    <div className="back">
                        <h2 className="figureTitle">{this.props.value.title}</h2>
                        <p>{this.props.value.desc}</p>
                    </div>
                </div>
            </div>
        );
    }
}

Image.defaultProps = {
};

export default Image;