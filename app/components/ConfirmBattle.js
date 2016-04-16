var React = require('react');
var PropTypes = React.PropTypes;


function ConfirmBattle(props) {
	return props.isLoading === true
		? <p> LOADING! </p>
		: <p> CONFIRM BATTLE </p>

}


ConfirmBattle.propTypes = {

};


module.exports = ConfirmBattle;
