import logo from './logo.svg';
import './App.css';

import './note_style.css';

import an_f from './single_f.png';
import a_g from './single_g.png';
import an_a from './single_a.png';

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          To be or not to be, that is the question
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/

/*
change "duple" to "duple_meter" same for "triple" to "triple_meter"
*/

function TestNote() {
    return (
        <section className="duple">
            <div className="note">
                <p className="tonic">I
                <br />
                <img className="pitch f" src={an_f} />
                <br />
                Do</p>
            </div>
        
            <div className="note">
                <p className="dominant">V7
                <br />
                <img className="pitch g" src={a_g} />
                <br />
                Re</p>
            </div>
        
            <div className="note">
                <p className="tonic">I
                <br />
                <img className="pitch a" src={an_a} />
                <br />
                Mi</p>
            </div>
        </section>
    )
}

export default TestNote;
