import AddNumber from '../components/addNumber.jsx'
import { connect } from 'react-redux'

function mapReduxDispatchToReactProps(dispatch) {
  return {
    onClick: function (size) {
      dispatch({
        type:'INCREMENT',
        size
      })
    }
  } 
}

export default connect(null, mapReduxDispatchToReactProps)(AddNumber)

/*
import React, { Component } from 'react'
import store from '../store'

// eslint-disable-next-line import/no-anonymous-default-export
export default class extends Component {

  render() {
    return <AddNumber onClick={
      function (size) {
        store.dispatch({
          type:'INCREMENT',
          size
        })
      }
    }></AddNumber>    
  }
}
*/