import { useState } from "react";
import axios from "axios";
function Login({updateUserDetails}) {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState(null);

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
       const response = await axios.post('http://localhost:5000/auth/login',body,configuration);
        console.log(response);

        updateUserDetails(response.data.userDetails);
        }
        catch(error){
            setErrors({message: 'something went rong try again'})
            // console.log('Error')
        }

      } else {
        setMessage('Invalid Credentials');
      }
    }
  };

  return (
    <div className="container text-center">
      {message && <p>{message}</p>}

      {errors.message &&(errors.message)}
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          {errors.username && <p style={{ color: 'red' }}>{errors.username}</p>}
        </div>

        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
        </div>

        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
