import {BrowserRouter, Route } from 'react-router-dom';
import Main from './Main';
import Sparkles from './Sparkles'

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Sparkles/>
      <Main />
      {/* <div className="menu">
        <NavLink to="/uniswap-guide">
          <button>Uniswap Guide</button>
        </NavLink>
      </div> */}
        <Route exact path="/" component={Main} />
      </div>
    </BrowserRouter>
  );
}

export default App;
