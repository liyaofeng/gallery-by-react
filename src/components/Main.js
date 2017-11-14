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

var stageW = 0;
var stageH = 0;
var figureW = 320;
var figureH = 380;

class AppComponent extends React.Component {

    constructor(props) {
        console.log('constructor');
        super(props);

        this.state={
            figureStyle: (function() {
                let arr = [];
                imageDatas.forEach(() => {
                    arr.push({
                        style: {
                            left: '500px',
                            top: '250px',
                            transform: 'rotate(0)deg)',
                        },
                        isCenter: false,
                    });
                });
                return arr;
            })(),
            centerIndex: 0,
        };
    }

    componentDidMount() {
        console.log('componentDidMount');

        let stageDom = this.refs.stage;
        stageW = Math.ceil(stageDom.scrollWidth);
        stageH = Math.ceil(stageDom.scrollHeight);

        this.setState({figureStyle: this.resetPosition()});
    }

    render() {
        console.log('render'); 

        var figureArr = [];
        imageDatas.forEach((img, index) => {
            figureArr.push(<ImgFigure key={index} position={this.state.figureStyle[index]} click={this.handleTouchImage} value={img} ref={"figure"+index} />);
        });

        return (
            <div className="stage" ref="stage">
                <div className="imgContainer">
                    {figureArr}
                </div>
                <div className="pageControl">
        			
                </div>
            </div>
        );
    }

    handleTouchImage(index) {
        this.setState({
            centerIndex: index,
            figureStyle: this.resetPosition(),
        });
    }

    resetPosition() {
        let positionArr = [];
        imageDatas.forEach((imageData, index, arr) => {
            var center = {};
            if (index == this.state.centerIndex) {
                center = this.positionForType(2);
            }
            else if (index == (this.state.centerIndex + 1) % arr.length) {
                center = this.positionForType(3);
            }
            else if (index < arr.length / 2) {
                center = this.positionForType(0);
            }
            else {
                center = this.positionForType(1);
            }
            console.log(center);
            positionArr.push(center);
        });
        return positionArr;
    }

    /*
        type: 随机位置的类型，0为左边，1为右边，2为中间，其他为上边
    */
    positionForType(type) {
        console.log('positionForType');
        var left, top, rotate;
        var isCenter = false;
        if (type == 0) {
            left = Math.ceil(Math.random() * (stageW / 2 - figureW) - figureW / 2);
            top = Math.ceil(Math.random() * stageH - figureH / 2);
        }
        else if (type == 1) {
            left = Math.ceil(Math.random() * (stageW / 2 - figureW) + stageW / 2 + figureW / 2);
            top = Math.ceil(Math.random() * stageH - figureH / 2);
        }
        else if (type == 2) {
            left = Math.ceil(stageW / 2 - figureW / 2);
            top = Math.ceil(stageH / 2 - figureH / 2);
        }
        else {
            left = Math.ceil(Math.random() * figureW + stageW / 2 - figureW);
            top = Math.ceil(Math.random() * (stageH / 2 - figureH) - figureH / 2);
        }

        if (type == 2) {
            rotate = 0;
            isCenter = true;
        }
        else {
            rotate = Math.ceil(Math.random() * 60 - 30)
        }

        return {
            style: {
                left: left + 'px',
                top: top + 'px',
                transform: 'rotate(' + rotate + 'deg)',
            },
            isCenter: isCenter,
        }
    }

}

AppComponent.defaultProps = {
};

export default AppComponent;
