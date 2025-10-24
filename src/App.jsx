import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/index.css'
import Dashboard from './pages/Dashboard'
import SignupForm from './pages/Signup';
import LoginForm from './pages/Login';
import Landing from './pages/Landing';
import AuthScreen from './pages/authScreen';

function App() {
  return (
    <div className=''>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/auth" element={<AuthScreen />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
