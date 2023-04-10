import './App.css';

import React, { Component } from 'react'
import Navbar from './comonents/Navbar';
import News from './comonents/News';
import { Route, Routes } from "react-router-dom"
export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/> 
        {/* <News pageSize={6} country={'in'} category={'sports'}/> */}
        <Routes>
          <Route exact path="/technology" element={<News key ='technology' pageSize={6} country={'in'} category={'technology'}/>} />
          <Route exact path="/business" element={<News key='business' pageSize={6} country={'in'} category={'business'}/>} />
          <Route exact path="/entertainment" element={<News key='entertainment' pageSize={6} country={'in'} category={'entertainment'}/>} />
          <Route exact path="/health" element={<News  key="health" pageSize={6} country={'in'} category={'health'}/>} />
          <Route exact path="/science" element={<News key='science' pageSize={6} country={'in'} category={'science'}/>} />
          <Route exact path="/sports" element={<News key= 'sports' pageSize={6} country={'in'} category={'sports'}/>} />




      </Routes>
      </div>
    )
  }general
}
