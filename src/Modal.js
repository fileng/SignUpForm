import React from 'react';
import Input from './Input';
import './Modal.css';

var Modal = React.createClass({

	getInitialState: function () {
		return { email: '' }
	},

	handleChange: function (e) {
		this.setState({
			email: e.target.value
		})
		console.log('bajs');
	},

	render: function() {
		return (
			<div className="Modal">
				<form 
					onSubmit={this.props.onSubmit}
					className="ModalForm">
					<Input
						id="name"
						type="text"
						placeholder="name" />
					<Input
						id="username"
						type="email"
						placeholder="email"
						onChange={this.handleChange} />
					<Input
						id="password"
						type="password"
						placeholder="password" />
					<button>
						<p>Log in</p> 
					</button>
				</form>
			</div>
		);
	}
});

export default Modal;