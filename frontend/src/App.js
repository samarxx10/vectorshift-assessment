import { useState, useEffect } from 'react';
import { PipelineToolbar } from './toolbar';
import { PipelineUI } from './ui';
import { SubmitButton } from './submit';

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('pipeline-theme') || 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('pipeline-theme', theme);
  }, [theme]);

  return (
    <div className="app">
      <PipelineToolbar theme={theme} onThemeChange={setTheme} />
      <div className="app__canvas">
        <PipelineUI />
      </div>
      <SubmitButton />
    </div>
  );
}

export default App;
