// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'jquery/dist/jquery.min.js'
// import 'bootstrap/dist/js/bootstrap.min.js'
// import Almacen from './components/Almacenes'

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
//       <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js" integrity="sha384-b/U6ypiBEHpOf/4+1nzFpr53nxSS+GLCkfwBdFNTxtclqqenISfwAzpKaMNFNmj4" crossorigin="anonymous"></script>
//     </div>
//   );
// }

// export default App;

import React, { Component } from 'react';
import Route from 'react-router-dom/Route'
import Almacen from './components/Almacenes'
import { BrowserRouter } from 'react-router-dom'
import Nav from "./components/NavBar/Navbar"
class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Nav />
            {/* <Route exact path="/" component={Home} /> */}
            <Route path="/almacenes" component={Almacen} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
