import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Home from './views/home';
import Profile from './views/profile';
import AddPost from './views/addPost';

function App() {
  const [data, setData] = useState('')

  useEffect(async() => {
    const response = await axios.get('http://localhost:5000/api/test')
    console.log(response)
    setData(response.data.data)
  }, [])


  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/profile' component={Profile} />
        <Route path='/addPost' component={AddPost} />
      </Switch>
    </Router>
  );
}

export default App;
