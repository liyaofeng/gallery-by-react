require('normalize.css/normalize.css');
require('styles/Image.css');

import React from 'react';
import ClassNames from 'classnames';

class Image extends React.Component {
    constructor(props) {
        console.log('constructor');
        super(props);
        
    }

    componentDidMount() {
        console.log('image ' + this.props.index + ' componentDidMount');

        this.setState({isCenter: this.props.position.isCenter});
    }

    render() {
        console.log('render'); 
        return (
            <div className="flip-container" style={this.props.position.style} onClick={this.props.position.isCenter ? null : this.click.bind(this)}>
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

    click() {
        console.log('click' + this.props.index);

        this.props.click(this.props.index);
    }
}

Image.defaultProps = {
};

export default Image;
