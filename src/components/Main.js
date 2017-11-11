require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import ImgFigure from './Image.js';


var imageDatas = require('../data/imageDatas.json');
imageDatas = (function genImageURL(imageDatasArr) {
    for (var i = 0, j = imageDatasArr.length; i < j; i++) {
        var singleImageData = imageDatasArr[i];

        singleImageData.imageURL = require('../images/' + singleImageData.fileName);

        imageDatasArr[i] = singleImageData;
    }
    return imageDatasArr;
})(imageDatas);


class AppComponent extends React.Component {
    constructor(props) {
        console.log('constructor');
        super(props);
        this.state={
            figureCenter: (function() {
                let arr = [];
                imageDatas.forEach(() => {
                    arr.push({
                        center: {
                            left: '100px',
                            top: '100px',
                        }});
                });
                return arr;
            })(),
        };
    }

    componentDidMount() {
        console.log('componentDidMount');


    }

    render() {
        console.log('render'); 
        var figureArr = [];
        imageDatas.forEach((img, index) => {
            figureArr.push(<ImgFigure key={index} center={this.state.figureCenter[index].center} value={img} refs={"figure"+index} />);
        });

        return (
            <div className="stage">
                <div className="imgContainer">
                    {figureArr}
                </div>
                <div className="pageControl">
        			
                </div>
            </div>
        );
    }
}

AppComponent.defaultProps = {
};

export default AppComponent;
