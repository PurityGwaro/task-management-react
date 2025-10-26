import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/index.css'
import Dashboard from './pages/Dashboard'
import SignupForm from './pages/Signup';
import LoginForm from './pages/Login';
import Landing from './pages/Landing';
import AuthScreen from './pages/AuthScreen';
import Tickets from './pages/Tickets';
import NewTicket from './pages/NewTicket';
import { AuthContextProvider } from './context/AuthContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <AuthContextProvider>
      <div className='max-w-[1440px] mx-auto font-sans text-gray-800'>
        <Router>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/auth" element={<AuthScreen />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/signup" element={<SignupForm />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/tickets" element={<Tickets />} />
            <Route path="/new-ticket" element={<NewTicket />} />
          </Routes>
        </Router>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
    </AuthContextProvider>
  )
}

export default App
