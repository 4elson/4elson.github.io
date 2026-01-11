import { useState } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Terminal from "./components/Terminal";

function App() {
  const [showTerminal, setShowTerminal] = useState(false);

  const terminalCommands = [
    {
      input: "whoami",
      output: "Elson Johnson - AWS DevSecOps Engineer",
      delay: 50,
    },
    {
      input: "cat about.txt",
      output: <About />,
      delay: 50,
    },
    {
      input: "ls -la skills/",
      output: <Skills />,
      delay: 50,
    },
    {
      input: "cat experience.log",
      output: <Experience />,
      delay: 50,
    },
    {
      input: "cat contact.sh",
      output: <Contact />,
      delay: 50,
    },
  ];

  return (
    <div className="app">
      <Hero />
      
      <div className="terminal-trigger">
        <button
          className="start-button"
          onClick={() => setShowTerminal(true)}
        >
          <span className="prompt-symbol">$</span> Initialize Portfolio
        </button>
      </div>

      {showTerminal && <Terminal commands={terminalCommands} />}
    </div>
  );
}

export default App;
