import React, { useState, useEffect } from 'react'
import '~/assets/css/app.scss'


function App() {

  console.log('aa')
  const [funcShow, setFuncShow] = useState(true)
  const [classShow, setClassShow] = useState(true)
  return (
    <div className="container">
      <h1>Hello World</h1>
      <input type="button" value="remove func" onClick={
        function() {
          setFuncShow(false)
        }
      } ></input>
      <input type="button" value="remove comp" onClick={
        function() {
          setClassShow(false)
        }
      } ></input>
      {funcShow ? <FuncComp initNumber={2}></FuncComp> : null}
      {classShow ? <ClassComp initNumber={2}></ClassComp> : null}
    </div>
  );
}

const funcStyle = 'color:blue'
let funcId = 0
function FuncComp(props) {

  const [number, setNumber] = useState(props.initNumber)
  const [date, setDate] = useState(new Date().toString())

  useEffect(function () {
    console.log('%cfunc => useEffect (componentDidMount) ' + (++funcId), funcStyle)
    // document.title = number + ' : ' + date
    document.title = number
    return function () {
      console.log('%cfunc => useEffect return (componentWillUnMount) ' + (++funcId), funcStyle)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(function () {
    console.log('%cfunc => useEffect number (componentDidMount && componentDidUpdate) ' + (++funcId), funcStyle)
    // document.title = number + ' : ' + date
    document.title = number
    return function () {
      console.log('%cfunc => useEffect number return (componentDidMount && componentDidUpdate) ' + (++funcId), funcStyle)
    }
  }, [number])

  useEffect(function () {
    console.log('%cfunc => useEffect date (componentDidMount && componentDidUpdate) ' + (++funcId), funcStyle)
    // document.title = number + ' : ' + date
    document.title = date
    return function () {
      console.log('%cfunc => useEffect date return (componentDidMount && componentDidUpdate) ' + (++funcId), funcStyle)
    }
  }, [date])
  
  console.log('%cfunc => render ' + (++funcId), funcStyle)
  return (
    <div className="container">
      <h2>function style component</h2>
      <p>props Number : {props.initNumber}</p>
      <p>state Number : {number}</p>
      <p>state Date : {date}</p>
      <input type="button" value="random" onClick={
          function () {
            setNumber(Math.random())
          }
        } />
      <input type="button" value="date" onClick={
          function () {
            setDate(new Date().toString())
          }
        } />
    </div>
  )
}

const classStyle = 'color:red'
class ClassComp extends React.Component {
  state = {
    number: this.props.initNumber,
    date: new Date().toString()
  }

  // componentWillMount () {
  //   console.log('%cclass => componentWillMount', classStyle)
  // }

  // componentDidMount () {
  //   console.log('%cclass => componentDidMount', classStyle)
  // }

  shouldComponentUpdate (nextProps, nextState) {
    console.log('%cclass => shouldComponentUpdate', classStyle)
    return true
  }

  // componentWillUpdate (nextProps, nextState) {
  //   console.log('%cclass => componentWillUpdate', classStyle)
  //   return true
  // }

  componentDidUpdate (nextProps, nextState) {
    console.log('%cclass => componentDidUpdate', classStyle)
    return true
  }

  render () {
    console.log('%cclass => render', classStyle)
    return (
      <div className="container">
        <h2>class style component</h2>
        <p>props Number : {this.props.initNumber}</p>
        <p>state Number : {this.state.number}</p>
        <p>state Date : {this.state.date}</p>
        <input type="button" value="random" onClick={
          function () {
            this.setState({number: Math.random()})
          }.bind(this)
        } />
        <input type="button" value="date" onClick={
          function () {
            this.setState({date: new Date().toString()})
          }.bind(this)
        } />
      </div>
    )
  }
}


export default App;
