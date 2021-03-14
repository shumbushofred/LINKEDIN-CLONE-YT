import React from 'react';

import './App.css';
import Header from './features/Header';
import Siderbar from './Sidebar';
import Feed from "./Feed"
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import Login from './Login';
function App() {
  const user = useSelector(selectUser)
  return (
    <div className="app">
     <Header/>
     {!user ? (
     <Login /> 
     ) : (
      
      <div className="app_body">
            <Siderbar />
            {/* App Body */}
            {/* sidebar */}
            <Feed />
            {/* Feed */}
            {/*widgets */}
      </div>
     )}   
     
     
    </div>
  );
}

export default App;
