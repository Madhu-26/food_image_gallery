import React from 'react';
import './App.css';
import Gallery from './components/Gallery';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Food Image Gallery</h1>
      </header>
      <main>
        <Gallery />
      </main>
      <footer>
        <p><b>&copy; {new Date().getFullYear()} Food Image Gallery App. &nbsp;&nbsp;&nbsp;@All rights reserved.</b></p>
      </footer>
    </div>
  );
}

export default App;
