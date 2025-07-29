import React from 'react';
import Profile from './Profile';
import Projects from './Projects';

function App() {
  return (
    <div
      className="App bg-gradient-to-b from-sakura via-melon to-mint min-h-screen px-4 py-8"
      style={{ fontFamily: '"M PLUS Rounded 1c", sans-serif' }}
    >
      <h1 className="text-4xl font-bold text-center text-purple-800 mb-8 drop-shadow-md">
  📚 My Portfolio
</h1>
      <Profile />
      <Projects />
    </div>
  );
}

export default App;