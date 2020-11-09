import './App.css';
import Nav from './Component/Nav'
import Header from './Component/Header';
import Projects from './Component/Projects';
import About from './Component/About';
import Contact from './Component/Contact';
import Locationimage from './Component/Locationimage';
import Footer from './Component/Footer';


function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Nav></Nav>
      <Header></Header>
      <Projects></Projects>
      <About></About>
      <Contact></Contact>
      <Locationimage></Locationimage>
      <Footer></Footer>

    </div>
  );
}

export default App;
