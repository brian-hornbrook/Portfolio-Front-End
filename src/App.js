import React from 'react';
import Title from './components/contact/title';
import Contact from './components/contact/contact';
import Skills from './components/skills';
import About from './components/about';


function App() {
  return (
    <div>
      {/* title */}
      <Title />

      {/* contact */}
      <Contact />

      {/* skills */}
      <Skills />

      {/* about */}
      <About />
    </div>
  );
}

export default App;
