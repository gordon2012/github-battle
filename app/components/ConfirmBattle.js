var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../styles');
var Link = require('react-router').Link;
var UserDetails = require('./UserDetails');
var UserDetailsWrapper = require('./UserDetailsWrapper');
var MainContainer = require('./MainContainer');


function ConfirmBattle(props) {
	if(props.isLoading === true) {
		return <p>
			LOADING...
		</p>
	}

	return <MainContainer>
		<h1>Confirm Players</h1>
		<div className="col-sm-8 col-sm-offset-2">

			<UserDetailsWrapper header="Player One">
				<UserDetails info={props.playersInfo[0]} />
			</UserDetailsWrapper>

			<UserDetailsWrapper header="Player Two">
				<UserDetails info={props.playersInfo[1]} />
			</UserDetailsWrapper>

		</div>
		<div className="col-sm-8 col-sm-offset-2">
			<div className="col-sm-12" style={styles.space}>
				<button className="btn btn-lg btn-success" onClick={props.onInitiateBattle}>
					Initiate Battle!
				</button>
			</div>
			<div className="col-sm-12" style={styles.space}>
				<Link to="playerOne">
				<button className="btn btn-lg btn-danger" onClick={props.onInitiateBattle}>Reselect Player</button>
				</Link>
			</div>
		</div>
	</MainContainer>
}


ConfirmBattle.propTypes = {
	isLoading: PropTypes.bool.isRequired,
	onInitiateBattle: PropTypes.func.required,
	playersInfo: PropTypes.array.isRequired
};


module.exports = ConfirmBattle;
