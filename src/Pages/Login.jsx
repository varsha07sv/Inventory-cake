import { useState, useEffect } from "react";
import { useAuth } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Cake, Lock, Mail, Eye, EyeOff, LogIn, AlertCircle } from "lucide-react";
import "../Styles/Login.css";

function Login() {
  const { login } = useAuth(); // Using custom hook instead of useContext directly
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  useEffect(() => {
    if (username) setUsernameError("");
    if (password) setPasswordError("");
    if (error) setError("");
  }, [username, password, error]);

  const validateForm = () => {
    let isValid = true;
    
    if (!username.trim()) {
      setUsernameError("Username is required");
      isValid = false;
    } else if (username.length < 3) {
      setUsernameError("Username must be at least 3 characters");
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setLoading(true);
    setError("");

    // Simulate API call
    setTimeout(() => {
      try {
        const success = login(username, password);

        if (success) {
          if (rememberMe) {
            localStorage.setItem("rememberedUser", username);
          } else {
            localStorage.removeItem("rememberedUser");
          }
          
          navigate("/"); // Redirect to home/dashboard
        } else {
          setError("Invalid username or password");
        }
      } catch (err) {
        setError("An error occurred. Please try again.");
      } finally {
        setLoading(false);
      }
    }, 1000);
  };

  useEffect(() => {
    const remembered = localStorage.getItem("rememberedUser");
    if (remembered) {
      setUsername(remembered);
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
            <h2 className="login-title">Welcome Back</h2>
            <p className="login-subtitle">Sign in to manage your cake shop inventory</p>
          </div>

          {error && (
            <div className="error-message">
              <AlertCircle size={18} />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="login-form">
            <div className="input-group">
              <label htmlFor="username" className="input-label">
                Username
              </label>
              <div className={`input-wrapper ${usernameError ? 'error' : ''}`}>
                <Mail size={18} className="input-icon" />
                <input
                  id="username"
                  type="text"
                  placeholder="Enter your username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  disabled={loading}
                  autoComplete="username"
                  className="input-field"
                />
              </div>
              {usernameError && (
                <span className="field-error">
                  <AlertCircle size={14} />
                  {usernameError}
                </span>
              )}
            </div>

            <div className="input-group">
              <div className="password-header">
                <label htmlFor="password" className="input-label">
                  Password
                </label>
                <button type="button" className="forgot-password">
                  Forgot Password
                </button>
              </div>
              <div className={`input-wrapper ${passwordError ? 'error' : ''}`}>
                <Lock size={18} className="input-icon" />
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={loading}
                  autoComplete="current-password"
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
                  Signing in...
                </>
              ) : (
                <>
                  <LogIn size={18} />
                  Sign In
                </>
              )}
            </button>
          </form>

          <div className="login-footer">
            <p className="signup-text">
              Don't have an account?{' '}
              <button type="button" className="signup-link">
                Contact Admin
              </button>
            </p>
            
            <div className="demo-credentials">
              <p className="demo-title">Demo Credentials</p>
              <div className="credential-item">
                <span>Admin:</span>
                <code>admin / admin123</code>
              </div>
              <div className="credential-item">
                <span>Staff:</span>
                <code>staff / staff123</code>
              </div>
            </div>
          </div>
        </div>

        <div className="login-decoration">
          <p>Fresh cakes daily • Inventory management • Easy tracking</p>
        </div>
      </div>
    </div>
  );
}

export default Login;