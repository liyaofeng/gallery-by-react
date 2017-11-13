require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

class Image extends React.Component {
    render() {
        return (
            <div className={"figure": true, "filpFigure": true} style={this.props.center}>
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
        );
    }
}

Image.defaultProps = {
};

export default Image;
