import React from 'react';
import Input from './Input';

var Modal = React.createClass({
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
						placeholder="email" />
					<Input
						id="password"
						type="password"
						placeholder="password" />
					<button>
						Log in <i className="fa fa-fw fa-chevron-right"></i>
					</button>
				</form>
			</div>
		);
	}
});

export default Modal;