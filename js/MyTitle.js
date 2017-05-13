import React from 'react';

var div = React.DOM.div;
var h1 = React.DOM.h1;

var MyTitle = React.createClass({
    // Every react component must contain a render method and
    // that method must return markup.
    render: function () {
        return (
            div(null,
                h1({style: {color: this.props.color, fontWeight: 'bold'}}, this.props.title)
            )
        );
    }
});

export default MyTitle;