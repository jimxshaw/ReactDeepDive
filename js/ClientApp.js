import React from 'react';
import ReactDOM from 'react-dom';
import MyTitle from './MyTitle';

var div = React.DOM.div;

var MyTitleFactory = React.createFactory(MyTitle);

var MyFirstComponent = React.createClass({
  render: function () {
    return (
            div(null,
                MyTitleFactory({title: 'props are awesome', color: 'lavender'}),
                MyTitleFactory({title: 'hello world', color: 'maroon'}),
                MyTitleFactory({title: 'learning react', color: 'rebeccapurple'}),
                MyTitleFactory({title: 'this is a test', color: 'limegreen'})
            )
    );
  }
});

ReactDOM.render(React.createElement(MyFirstComponent), document.getElementById('app'));
