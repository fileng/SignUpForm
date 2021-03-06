import React from 'react'
import './App.css'
import Modal from './Modal'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import 'font-awesome/css/font-awesome.css'

var App = React.createClass({

  getInitialState: function () {
    return { mounted: false }
  },

  componentDidMount: function () {
    this.setState({ mounted: true })
  },

  handleSubmit: function (e) {
    this.setState({ mounted: false })
    e.preventDefault()
  },

  render: function () {
    var child

    if (this.state.mounted) {
      child = (<Modal onSubmit={this.handleSubmit} />)
    }

    return (
      <div className='App'>
        <ReactCSSTransitionGroup
          transitionName='example'
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
          {child}
        </ReactCSSTransitionGroup>
      </div>
    )
  }
})

export default App
