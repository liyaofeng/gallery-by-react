require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

var imageDatas = () => {
    var imgArr = [];
    var imgDataArr = require('../data/imageDatas.json');
    for (var img in imgDataArr) {
        var singleImageData = img;
        singleImageData.imageURL = require('../images/' + singleImageData.fileName);
        imgArr.push(singleImageData);
    }
    return imgArr;
};


class AppComponent extends React.Component {
  render() {
    return (
    	<div className="stage">
    		<div className="imgContainer">
    			
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
