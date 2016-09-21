import React from 'react';
import './Input.css';

var Input = React.createClass({

	propTypes: {
		placeholder: 	React.PropTypes.string.isRequired,
		type: 			React.PropTypes.string.isRequired,
		id: 			React.PropTypes.string.isRequired
	},

	render: function() {
		return (
			<div className="Input">
				<input 
					id={this.props.name}
					autoComplete="false"
					required
					type={this.props.type}
					placeholder={this.props.placeholder}
				/>	
				<label htmlFor={this.props.name}></label>
			</div>
		);
	}
});

export default Input;