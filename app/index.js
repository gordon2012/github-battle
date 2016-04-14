// var app = document.getElementById('app');
// app.innerHTML = 'Hello World';

var React = require('react');
var ReactDOM = require('react-dom');

var HelloWorld = React.createClass({
	render: function() {
		return (
			<div>
				<h1 className="jumbotron">GitHub Battle</h1>
				<h3>Hello, React World!</h3>
			</div>
		);
	}
});

ReactDOM.render(
	<HelloWorld />,
	document.getElementById('app')
);
