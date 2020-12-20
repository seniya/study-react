import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, NavLink, useParams  } from 'react-router-dom'

import './index.css';

function Home () {
  return (
    <div>
      <h2>Home</h2>
      <p>home ...</p>
    </div>
  )
}

const contents = [
  {id:1, title: 'HTML', desc:'HTML is....'},
  {id:2, title: 'JS', desc:'JS is....'},
  {id:3, title: 'REACT', desc:'REACT is....'},
  {id:4, title: 'CSS', desc:'CSS is....'},
]

function Topic () {
  const params = useParams()
  const topic_id = params.topic_id
  let selected_topic = {
    title: 'Sorry',
    desc: 'Not Found'
  }
  for (let i=0; i<contents.length; i++) {
    if (contents[i].id === Number(topic_id)) {
      selected_topic = contents[i]
      break
    }

  }

  return (
    <div>
      <h3>{selected_topic.title}</h3>
      {selected_topic.desc}
    </div>
  )
}

function Topics () {
  const list = [];
  for (let i=0; i<contents.length; i++) {
    list.push(
      <li key={contents[i].id}><NavLink to={`/topics/${contents[i].id}`}>{contents[i].title}</NavLink></li>
    )
  }
  return (
    <div>
      <h2>Topics</h2>
      <p>Topics ...</p>
      <ul>
        {list}
      </ul>
      <Route path="/topics/:topic_id">
        <Topic></Topic>
      </Route>
      {/* <Switch>
        <Route path="/topics/1">
          HTML is ...
        </Route>
        <Route path="/topics/2">
          JS is ...
        </Route>
        <Route path="/topics/3">
          CSS is ...
        </Route>
        <Route path="/topics/4">
          REACT is ...
        </Route>
      </Switch>       */}
    </div>
  )
}

function Contact () {
  return (
    <div>
      <h2>Contact</h2>
      <p>Contact ...</p>
    </div>
  )
}


function App () {
  return (
    <div>
      <h1>Hello React Router DOM example</h1>
      <ul>
        <li>
          <NavLink exact to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/topics">topics</NavLink>
        </li>
        <li>
          <NavLink to="/contact">contact</NavLink>
        </li>
      </ul>
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route path="/topics"><Topics /></Route>
        <Route path="/contact"><Contact /></Route>
        <Route path="/">Not Found</Route>
      </Switch>
    </div>
  )
}


ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);