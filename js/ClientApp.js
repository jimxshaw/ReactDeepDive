import React from 'react';
import ReactDOM from 'react-dom';
import MyTitle from './MyTitle';

var MyFirstComponent = React.createClass({
  render: function () {
    return (
        <div>
            <MyTitle title='props are cool' color='red'/>
            <MyTitle title='this is a test' color='teal'/>
            <MyTitle title='hello react!' color='royalblue'/>
            <MyTitle title='what a world' color='brown'/>
        </div>
    );
  }
});

ReactDOM.render(React.createElement(MyFirstComponent), document.getElementById('app'));
