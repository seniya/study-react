import DisplayNumber from '../components/displayNumber.jsx'
import React, { Component } from 'react'
import store from '../store'

// eslint-disable-next-line import/no-anonymous-default-export
export default class extends Component {
  state = {
    number: store.getState().number
  }
  constructor(props) {
    super(props)
    store.subscribe(function () {
      this.setState({number: store.getState().number}) 
    }.bind(this))
  }
  render() {
    return <DisplayNumber number={this.state.number}></DisplayNumber>    
  }
}