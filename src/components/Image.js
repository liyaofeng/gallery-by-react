require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

class Image extends React.Component {
    render() {
        return (
            <div className="figure" style={this.props.center}>
      		    <img className="figureImg"
                    src={this.props.value.imageURL}
                    alt={this.props.value.desc}
                />
                <h2 className="figureTitle">{this.props.value.title}</h2>
            </div>
        );
    }
}

Image.defaultProps = {
};

export default Image;
