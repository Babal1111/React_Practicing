import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import "./styles/login.css";
function Login() { // no need to pass user details now

  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const [errors, setErrors] = useState({});
  // const [message, setMessage] = useState(null); .// now redux

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validate = () => {
    let isValid = true;
    let newErrors = {};

    if (formData.username.length === 0) {
      isValid = false;
      newErrors.username = "Username is mandatory";
    }

    if (formData.password.length === 0) {
      isValid = false;
      newErrors.password = "Password is mandatory";
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async(e) => {
    e.preventDefault();

    if (validate()) {
      if (formData.username === 'admin' && formData.password === 'admin') {
        // setMessage('Valid Credentials');

        const body = {
            username : formData.username,
            password : formData.password
        }

        const configuration = {
            withCredentials: true
        };

        try{       
          
      // const response = await axios.post(`${serrverEndpoint}/auth/login`,body,configuration); // wehave defined severEndpoint in config.js for easy changebility

       const response = await axios.post('http://localhost:5000/auth/login',body,configuration);
        console.log(response);

        // updateUserDetails(response.data.userDetails);
        dispatch({
          type: 'SET_USER',
          payload: response.data.userDetails
        })
        }
        catch(error){
          // on invlaid cred also it was showing: smthig went wrong ,as we were sendind 401 from backend, now we will schech if error is 401 ie setErrors to invalid credentisls
          if(error?.response?.status===401){
            console.log(error);
            setErrors({message:'Invalid credentials'});

          }
          else{
 setErrors({message: 'something went rong try again'})  
          }
           
            // console.log('Error')
        }

      } else {
        // setMessage('Invalid Credentials');
      }
    }
  };
return (
  <div className="login-container">
    <div className="login-box">
      <h1>Login Page</h1>
      {errors.message && <p className="error-message">{errors.message}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          {errors.username && <p className="error-message">{errors.username}</p>}
        </div>

        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <p className="error-message">{errors.password}</p>}
        </div>

        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  </div>
);

}

export default Login;
