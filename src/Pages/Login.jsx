import { useState, useEffect } from "react";
import { useAuth } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Cake, Mail, Lock, Eye, EyeOff, LogIn, AlertCircle, Send, CheckCircle } from "lucide-react";
import "../Styles/Login.css";

function Login() {
  const { login, sendOTP, verifyOTP, register } = useAuth();
  const navigate = useNavigate();
  const [step, setStep] = useState('email'); // 'email', 'otp', 'register'
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [otpError, setOtpError] = useState("");
  const [nameError, setNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [resendTimer, setResendTimer] = useState(0);
  useEffect(() => {
    if (email) setEmailError("");
    if (otp) setOtpError("");
    if (name) setNameError("");
    if (password) setPasswordError("");
    if (error) setError("");
  }, [email, otp, name, password, error]);
  useEffect(() => {
    let interval;
    if (resendTimer > 0) {
      interval = setInterval(() => {
        setResendTimer(prev => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [resendTimer]);

  const validateEmail = () => {
    if (!email.trim()) {
      setEmailError("Email is required");
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email");
      return false;
    }
    return true;
  };

  const validateOTP = () => {
    if (!otp.trim()) {
      setOtpError("OTP is required");
      return false;
    }
    if (otp.length !== 6 || !/^\d+$/.test(otp)) {
      setOtpError("OTP must be 6 digits");
      return false;
    }
    return true;
  };

  const validateRegistration = () => {
    let isValid = true;
    
    if (!name.trim()) {
      setNameError("Name is required");
      isValid = false;
    } else if (name.length < 2) {
      setNameError("Name must be at least 2 characters");
      isValid = false;
    }

    if (!password) {
      setPasswordError("Password is required");
      isValid = false;
    } else if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters");
      isValid = false;
    }

    return isValid;
  };

  const handleSendOTP = async (e) => {
    e.preventDefault();
    
    if (!validateEmail()) return;

    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const userExists = await sendOTP(email);
      
      if (userExists) {
        setSuccess("OTP sent to your email. Please check your inbox.");
        setStep('otp');
        setResendTimer(60);
      } else {
        setStep('register');
      }
    } catch (err) {
      setError("Failed to send OTP. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleResendOTP = async () => {
    if (resendTimer > 0) return;
    
    setLoading(true);
    setError("");
    
    try {
      await sendOTP(email);
      setSuccess("New OTP sent to your email");
      setResendTimer(60);
    } catch (err) {
      setError("Failed to resend OTP");
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOTP = async (e) => {
    e.preventDefault();
    
    if (!validateOTP()) return;

    setLoading(true);
    setError("");

    try {
      const user = await verifyOTP(email, otp);
      
      if (user) {
        if (rememberMe) {
          localStorage.setItem("rememberedEmail", email);
        } else {
          localStorage.removeItem("rememberedEmail");
        }
        
        if (user.role === 'admin') {
          navigate("/admin/dashboard");
        } else {
          navigate("/products"); 
        }
      } else {
        setError("Invalid OTP. Please try again.");
      }
    } catch (err) {
      setError("Verification failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    
    if (!validateEmail() || !validateRegistration()) return;

    setLoading(true);
    setError("");

    try {
      await register({ email, name, password, role: 'customer' });
      setSuccess("Account created! OTP sent to your email for verification.");
      setStep('otp');
      setResendTimer(60);
    } catch (err) {
      setError("Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleBackToEmail = () => {
    setStep('email');
    setOtp("");
    setError("");
    setSuccess("");
  };

  useEffect(() => {
    const remembered = localStorage.getItem("rememberedEmail");
    if (remembered) {
      setEmail(remembered);
      setRememberMe(true);
    }
  }, []);

  return (
    <div className="login-container">
      <div className="login-bg">
        <div className="bg-circle circle-1"></div>
        <div className="bg-circle circle-2"></div>
        <div className="bg-circle circle-3"></div>
      </div>

      <div className="login-card-wrapper">
        <div className="login-card">
          <div className="login-header">
            <div className="logo-wrapper">
              <Cake size={32} className="logo-icon" />
            </div>
            
            {step === 'email' && (
              <>
                <h2 className="login-title">Welcome to ICB Delights</h2>
                <p className="login-subtitle">Sign in with your email to order delicious cakes</p>
              </>
            )}
            
            {step === 'otp' && (
              <>
                <h2 className="login-title">Verify OTP</h2>
                <p className="login-subtitle">Enter the 6-digit code sent to {email}</p>
              </>
            )}
            
            {step === 'register' && (
              <>
                <h2 className="login-title">Create Account</h2>
                <p className="login-subtitle">Join us to start ordering custom cakes</p>
              </>
            )}
          </div>

          {error && (
            <div className="error-message">
              <AlertCircle size={18} />
              <span>{error}</span>
            </div>
          )}

          {success && (
            <div className="success-message">
              <CheckCircle size={18} />
              <span>{success}</span>
            </div>
          )}

          {step === 'email' && (
            <form onSubmit={handleSendOTP} className="login-form">
              <div className="input-group">
                <label htmlFor="email" className="input-label">
                  Email Address
                </label>
                <div className={`input-wrapper ${emailError ? 'error' : ''}`}>
                  <Mail size={18} className="input-icon" />
                  <input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={loading}
                    autoComplete="email"
                    className="input-field"
                  />
                </div>
                {emailError && (
                  <span className="field-error">
                    <AlertCircle size={14} />
                    {emailError}
                  </span>
                )}
              </div>

              <div className="form-options">
                <label className="checkbox-container">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    disabled={loading}
                  />
                  <span className="checkbox-text">Remember me</span>
                </label>
              </div>

              <button 
                type="submit" 
                className={`login-button ${loading ? 'loading' : ''}`}
                disabled={loading}
              >
                {loading ? (
                  <>
                    <span className="spinner"></span>
                    Sending OTP...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send OTP
                  </>
                )}
              </button>
            </form>
          )}

          {step === 'otp' && (
            <form onSubmit={handleVerifyOTP} className="login-form">
              <div className="input-group">
                <label htmlFor="otp" className="input-label">
                  Enter OTP
                </label>
                <div className={`input-wrapper ${otpError ? 'error' : ''}`}>
                  <Lock size={18} className="input-icon" />
                  <input
                    id="otp"
                    type="text"
                    placeholder="6-digit code"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
                    disabled={loading}
                    maxLength="6"
                    className="input-field"
                  />
                </div>
                {otpError && (
                  <span className="field-error">
                    <AlertCircle size={14} />
                    {otpError}
                  </span>
                )}
              </div>

              <div className="otp-actions">
                <button 
                  type="button" 
                  className="resend-otp"
                  onClick={handleResendOTP}
                  disabled={resendTimer > 0 || loading}
                >
                  {resendTimer > 0 ? `Resend OTP in ${resendTimer}s` : 'Resend OTP'}
                </button>
                
                <button 
                  type="button" 
                  className="back-button"
                  onClick={handleBackToEmail}
                  disabled={loading}
                >
                  Change Email
                </button>
              </div>

              <button 
                type="submit" 
                className={`login-button ${loading ? 'loading' : ''}`}
                disabled={loading}
              >
                {loading ? (
                  <>
                    <span className="spinner"></span>
                    Verifying...
                  </>
                ) : (
                  <>
                    <CheckCircle size={18} />
                    Verify & Login
                  </>
                )}
              </button>
            </form>
          )}

          {step === 'register' && (
            <form onSubmit={handleRegister} className="login-form">
              <div className="input-group">
                <label htmlFor="reg-email" className="input-label">
                  Email Address
                </label>
                <div className="input-wrapper">
                  <Mail size={18} className="input-icon" />
                  <input
                    id="reg-email"
                    type="email"
                    value={email}
                    disabled
                    className="input-field"
                  />
                </div>
              </div>

              <div className="input-group">
                <label htmlFor="name" className="input-label">
                  Full Name
                </label>
                <div className={`input-wrapper ${nameError ? 'error' : ''}`}>
                  <Mail size={18} className="input-icon" />
                  <input
                    id="name"
                    type="text"
                    placeholder="Enter your full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    disabled={loading}
                    className="input-field"
                  />
                </div>
                {nameError && (
                  <span className="field-error">
                    <AlertCircle size={14} />
                    {nameError}
                  </span>
                )}
              </div>

              <div className="input-group">
                <label htmlFor="reg-password" className="input-label">
                  Password
                </label>
                <div className={`input-wrapper ${passwordError ? 'error' : ''}`}>
                  <Lock size={18} className="input-icon" />
                  <input
                    id="reg-password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    disabled={loading}
                    className="input-field"
                  />
                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
                {passwordError && (
                  <span className="field-error">
                    <AlertCircle size={14} />
                    {passwordError}
                  </span>
                )}
              </div>

              <div className="otp-actions">
                <button 
                  type="button" 
                  className="back-button"
                  onClick={handleBackToEmail}
                  disabled={loading}
                >
                  Back
                </button>
              </div>

              <button 
                type="submit" 
                className={`login-button ${loading ? 'loading' : ''}`}
                disabled={loading}
              >
                {loading ? (
                  <>
                    <span className="spinner"></span>
                    Creating Account...
                  </>
                ) : (
                  <>
                    <CheckCircle size={18} />
                    Create Account
                  </>
                )}
              </button>
            </form>
          )}

          <div className="login-footer">
            <p className="signup-text">
              {step === 'email' ? (
                <>
                  New User ?{' '}
                  <button type="button" className="signup-link" onClick={() => setStep('register')}>
                    Create Account
                  </button>
                </>
              ) : step === 'otp' ? (
                <>
                  Didn't receive code?{' '}
                  <button 
                    type="button" 
                    className="signup-link" 
                    onClick={handleResendOTP}
                    disabled={resendTimer > 0}
                  >
                    Resend OTP
                  </button>
                </>
              ) : null}
            </p>
            
            <div className="demo-credentials">
              <p className="demo-title">Demo Access</p>
              <div className="credential-item">
                <span>Admin:</span>
                <code>admin@cakeshop.com</code>
              </div>
              <div className="credential-item">
                <span>Customer:</span>
                <code>customer@example.com</code>
              </div>
              <p className="demo-note">* OTP will be sent to email for verification</p>
            </div>
          </div>
        </div>

        <div className="login-decoration">
          <p>Fresh cakes daily • OTP verification • Custom orders • Secure checkout</p>
        </div>
      </div>
    </div>
  );
}

export default Login;