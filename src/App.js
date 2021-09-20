// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import UltimateBookQuiz from './pages/ultimatebookquiz';
import About from './pages/about';
import Contact from './pages/contact';
// import SignUp from './pages/signup';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/home' exact component={Home} />
        <Route path='/ultimatebookquiz' component={UltimateBookQuiz} />
        <Route path='/about' component={About} />
        <Route path='/contact-us' component={Contact} />
        {/* <Route path='/sign-up' component={SignUp} /> */}
      </Switch>
    </Router>
  );
}

export default App;