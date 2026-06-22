import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BuilderPage from './pages/BuilderPage';
import ModelsPage from './pages/ModelsPage';
import DeployPage from './pages/DeployPage';
import ExtensionsPage from './pages/ExtensionsPage';
import SettingsPage from './pages/SettingsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/builder" element={<BuilderPage />} />
        <Route path="/models" element={<ModelsPage />} />
        <Route path="/deploy" element={<DeployPage />} />
        <Route path="/extensions" element={<ExtensionsPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
