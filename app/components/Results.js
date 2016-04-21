var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../styles');
var Link = require('react-router').Link;
var UserDetails = require('./UserDetails');
var UserDetailsWrapper = require('./UserDetailsWrapper');
var MainContainer = require('./MainContainer');

function StartOver() {
	return <div className="col-sm-12" style={styles.space}>
		<Link to="playerOne">
			<button className="btn btn-lg btn-danger">Start Over</button>
		</Link>
	</div>
}

function Results(props) {

	if(props.isLoading) return <p>
		LOADING...
	</p>

	if(props.scores[0] === props.scores[1]) {
		return <MainContainer>
			<h1>It is a tie!</h1>
			<StartOver />
		</MainContainer>
	}

	var win = props.scores[0] > props.scores[1] ? 0 : 1;
	var lose = win === 0 ? 1 : 0;

	return <MainContainer>
			<h1>Results</h1>
			<div className="col-sm-8 col-sm-offset-2">

				<UserDetailsWrapper header="Winner">
					<h3>Score: {props.scores[win]}</h3>
					<UserDetails info={props.playersInfo[win]} />
				</UserDetailsWrapper>
				<UserDetailsWrapper header="Loser">
					<h3>Score: {props.scores[lose]}</h3>
					<UserDetails info={props.playersInfo[lose]} />
				</UserDetailsWrapper>

			</div>

			<div className="col-sm-8 col-sm-offset-2">
				<StartOver />
			</div>
		</MainContainer>
}


Results.propTypes = {
	isLoading: PropTypes.bool.isRequired,
	playersInfo: PropTypes.array.isRequired,
	scores: PropTypes.array.isRequired,
};


module.exports = Results;
