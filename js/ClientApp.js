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