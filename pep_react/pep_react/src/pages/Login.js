import { useState } from "react";
import axios from "axios";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { serverEndpoint } from "../config";
import { useDispatch } from "react-redux";
import { SET_USER } from "../redux/user/actions";

function Login() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validate = () => {
    let newErrors = {};
    let isValid = true;

    if (formData.username.trim() === "") {
      newErrors.username = "Username is mandatory";
      isValid = false;
    }

    if (formData.password.trim() === "") {
      newErrors.password = "Password is mandatory";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (validate()) {
      const body = {
        username: formData.username,
        password: formData.password,
      };

      try {
        const response = await axios.post(
          `${serverEndpoint}/auth/login`,
          body,
          { withCredentials: true }
        );

        dispatch({
          type: SET_USER,
          payload: response.data.userDetails,
        });
      } catch (error) {
        if (error?.response?.status === 401) {
          setErrors({ message: "Invalid credentials" });
        } else {
          setErrors({ message: "Something went wrong, please try again" });
        }
      }
    }
  };

  const handleGoogleSignin = async (authResponse) => {
    try {
      const response = await axios.post(
        `${serverEndpoint}/auth/google-auth`,
        { idToken: authResponse.credential },
        { withCredentials: true }
      );

      dispatch({
        type: SET_USER,
        payload: response.data.userDetails,
      });
    } catch (error) {
      console.log(error);
      setErrors({ message: "Something went wrong while Google sign-in" });
    }
  };

  const handleGoogleSigninFailure = (error) => {
    console.log(error);
    setErrors({ message: "Something went wrong while Google sign-in" });
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <h1 className="text-center mb-4">Login Page</h1>

          {errors.message && (
            <div className="alert alert-danger" role="alert">
              {errors.message}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <input
                type="text"
                className={`form-control ${errors.username ? "is-invalid" : ""}`}
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
              />
              {errors.username && (
                <div className="invalid-feedback">{errors.username}</div>
              )}
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className={`form-control ${errors.password ? "is-invalid" : ""}`}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password && (
                <div className="invalid-feedback">{errors.password}</div>
              )}
            </div>

            <div className="d-grid">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
          </form>

          <div className="text-center">
            <div className="my-4 d-flex align-items-center text-muted">
              <hr className="flex-grow-1" />
              <span className="px-2">OR</span>
              <hr className="flex-grow-1" />
            </div>

            <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
              <GoogleLogin
                onSuccess={handleGoogleSignin}
                onError={handleGoogleSigninFailure}
              />
            </GoogleOAuthProvider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;