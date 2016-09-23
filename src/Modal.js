import React from 'react'
import Input from './Input'
import './Modal.css'

var Modal = React.createClass({

  propTypes: {
    onSubmit: React.PropTypes.func
  },
  render: function () {
    return (
      <div className='Modal'>
        <form
          onSubmit={this.props.onSubmit}
          className='ModalForm'>
          <Input
            id='name'
            type='text'
            placeholder='name' />
          <Input
            id='username'
            type='email'
            placeholder='email' />
          <Input
            id='password'
            type='password'
            placeholder='password' />
          <button>
            <p>Log in</p>
            <i className='fa fa-chevron-right' />
          </button>
        </form>
      </div>
    )
  }
})

export default Modal
