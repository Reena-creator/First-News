import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
        <Navbar/>
        <Routes>
          <Route path="/"element={<News key="general" pagesize={10} category="general"/>}/>
          <Route path="/business"element={<News key="business" pagesize={10} category="business"/>}/>
          <Route path="/entertainment"element={<News key="entertainment" pagesize={10} category="entertainment"/>}/>
          <Route path="/general"element={<News key="general" pagesize={10} category="general"/>}/>
          <Route path="/health"element={<News key="health" pagesize={10} category="health"/>}/>
          <Route path="/science"element={<News key="science" pagesize={10} category="science"/>}/>
          <Route path="/sports"element={<News key="sports" pagesize={10} category="sports"/>}/>
          <Route path="/technology"element={<News key="technology" pagesize={10} category="technology"/>}/>
        </Routes>
        </Router>
      </div>
    )
  }
}
