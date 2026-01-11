import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TerminalProps {
  commands: Array<{
    input: string;
    output: React.ReactNode;
    delay?: number;
  }>;
}

export default function Terminal({ commands }: TerminalProps) {
  const [currentCommandIndex, setCurrentCommandIndex] = useState(0);
  const [displayedCommands, setDisplayedCommands] = useState<typeof commands>([]);
  const [typingCommand, setTypingCommand] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (currentCommandIndex >= commands.length) {
      setIsTyping(false);
      return;
    }

    const currentCommand = commands[currentCommandIndex];
    const typingDelay = currentCommand.delay || 50;
    let charIndex = 0;

    const typeInterval = setInterval(() => {
      if (charIndex <= currentCommand.input.length) {
        setTypingCommand(currentCommand.input.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          setDisplayedCommands((prev) => [...prev, currentCommand]);
          setTypingCommand('');
          setCurrentCommandIndex((prev) => prev + 1);
        }, 300);
      }
    }, typingDelay);

    return () => clearInterval(typeInterval);
  }, [currentCommandIndex, commands]);

  return (
    <div className="terminal">
      <div className="terminal-header">
        <div className="terminal-buttons">
          <span className="btn-close"></span>
          <span className="btn-minimize"></span>
          <span className="btn-maximize"></span>
        </div>
        <div className="terminal-title">elson@devops-portfolio:~$</div>
      </div>
      <div className="terminal-body">
        {displayedCommands.map((cmd, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="terminal-line"
          >
            <div className="terminal-prompt">
              <span className="prompt-user">elson@devops</span>
              <span className="prompt-separator">:</span>
              <span className="prompt-path">~</span>
              <span className="prompt-symbol">$</span>
              <span className="terminal-command">{cmd.input}</span>
            </div>
            <div className="terminal-output">{cmd.output}</div>
          </motion.div>
        ))}
        {isTyping && typingCommand && (
          <div className="terminal-line">
            <div className="terminal-prompt">
              <span className="prompt-user">elson@devops</span>
              <span className="prompt-separator">:</span>
              <span className="prompt-path">~</span>
              <span className="prompt-symbol">$</span>
              <span className="terminal-command">
                {typingCommand}
                <span className="cursor">_</span>
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
