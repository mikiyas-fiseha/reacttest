// src/App.js
import React from 'react';
// import Registration from './components/Registration';
// import Login from './components/Login';
import Home from './components/Home';
// import No404 from './components/No404';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Registration from './components/Registration';
import Login from './components/Login';
import Userlist from './components/Userlist'
// const Home = () => {
//   return <div >
//     This is the Home page
//   </div>;
// };

const No404 = () => {
  return <div>Page Not Found</div>;
};

const App = () => {
  return (
    <Router>
      <div>
      <Home />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route index path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/userlist" element={<Userlist />} />

          <Route path="*" element={<No404 />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
