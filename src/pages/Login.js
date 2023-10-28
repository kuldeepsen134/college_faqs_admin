import { useState } from "react";
import useAuth from "../hooks/useAuth";
import { Link, useNavigate, useLocation, Navigate } from "react-router-dom";
import axios from "../api/axios";
import { toast } from "react-toastify";
import StatusToast from "../components/StatusToast";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  //function for calling login api.
  const { auth, setAuth } = useAuth();
  const signIn = async () => {
    if (isSubmit) return;
    setIsSubmit(true);
    if (!email || !password) {
      document.forms[0].classList.add("was-validated");
      setIsSubmit(false);
      return;
    }
    try {
      const request = axios.post("/admin/login", {
        email: email,
        password: password,
      });
      const response = await toast.promise(request, {
        pending: "Logging in",
        error: "Something went Wrong!",
      });
      if (!response.data?.token) {
        toast.error("Invalid Email or Password!");
        setIsSubmit(false);
        return;
      }
      setAuth({ token: response.data.token });
      localStorage.setItem("token", response.data.token);
      navigate(from, { replace: true });
    } catch (err) {
      console.log(err);
    } finally {
      setIsSubmit(false);
    }
  };
  return (
    <>
      {auth?.token ? (
        <Navigate to="/" state={{ from: location }} replace />
      ) : (
        ""
      )}
      <div
        style={{
          alignItems: "center",
          backgroundColor: "#e9ecef",
          display: "flexbox",
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          justifyContent: "center",
        }}
      >
        <div className="login-box">
          <div className="login-logo">
            <b>Admin</b>LTE
          </div>
          <div className="card">
            <div className="card-body login-card-body">
              <p className="login-box-msg">Sign in to start your session</p>

              <form>
                <div className="input-group mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    value={email}
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <div className="invalid-feedback">
                    Email Address is Required!
                  </div>
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-envelope"></span>
                    </div>
                  </div>
                </div>
                <div className="input-group mb-3">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    value={password}
                    autoComplete="true"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                  />{" "}
                  <div className="invalid-feedback">Password is Required!</div>
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-lock"></span>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-8">
                    <div className="icheck-primary">
                      <input type="checkbox" id="remember" />
                      <label htmlFor="remember">Remember Me</label>
                    </div>
                  </div>
                  <div className="col-4">
                    <button
                      type="submit"
                      onClick={(e) => {
                        e.preventDefault();
                        signIn();
                      }}
                      className="btn btn-primary btn-block"
                    >
                      Sign In
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <StatusToast />
    </>
  );
};
export default Login;
