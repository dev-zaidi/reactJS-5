import React, { useState } from 'react';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import 'bootstrap/dist/css/bootstrap.min.css';
import images from './assets/user.png';
import styles from './App.module.css';
import LandingPage from './Components/LandingPage/LandingPage';


// Main App Component
const App = () => {
  const [isLogin, setIsLogin] = useState(false); // Toggle between Login and Signup
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track user login status

  const switchToSignUp = () => setIsLogin(false); 
  const switchToLogin = () => setIsLogin(true);

  const handleLogin = () => setIsLoggedIn(true); // Set user as logged in
  const handleLogout = () => setIsLoggedIn(false); // Set user as logged out

  return (
    <div>
    {isLoggedIn ? (
      // Render Landing Page if user is logged in
      <>
      <div className="container-fluid">
      <LandingPage onLogout={handleLogout} />
      </div>
      </>
    ) : (
      <>
        {/* Login/Signup Section */}
        <div className="container mt-5 p-3">
        <div className={styles.container}>
          <div className="row">
          <div className="col-lg-6 col-sm-12 p-4">
          {isLogin ? (
            <Login switchToSignUp={switchToSignUp} onLogin={handleLogin} />
          ) : (
            <Signup switchToLogin={switchToLogin} />
          )}
        </div>
        <div className="col-lg-6 col-sm-12">
          <img src={images} alt="User" className={styles.image} />
        </div>
          </div>
        </div>
        </div>
      </>
    )}
  </div>
  );
  
};


export default App;
