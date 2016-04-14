var USER_DATA = {
	name: 'Gordon Doskas',
	username: 'gordon2012',
	image: 'https://avatars2.githubusercontent.com/u/9071982?v=3&u=d62e11320f5831d572a0f62a7ad68a5acc980cee&s=140'
}


var React = require('react');
var ReactDOM = require('react-dom');

var ProfilePic = React.createClass({
	render: function() {
		return <img src={this.props.imageUrl} style={{height: 100, width: 100}} />
	}
});

var ProfileLink = React.createClass({
	render: function() {
		return (
			<a href={'https://www.github.com/' + this.props.username}>
				{this.props.username}
			</a>
		);
	}
});

var ProfileName = React.createClass({
	render: function() {
		return (
			<div>
				{this.props.name}
			</div>
		);
	}
});

var Avatar = React.createClass({
	render: function() {
		return (
			<div>
				<ProfilePic imageUrl={this.props.user.image} />
				<ProfileName name={this.props.user.name} />
				<ProfileLink username={this.props.user.username} />
			</div>
		);
	}
});


ReactDOM.render(
	<Avatar user={USER_DATA} />,
	document.getElementById('app')
);
