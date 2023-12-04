import React, { useContext, useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import '../css/login.css';
import { VolunteerContext } from '../context/VolunteerContext';
import { UserMasterContext } from '../context/UserMasterContext';
import BasePath from '../apis/BasePath';

const LoginPage = () => {
  const { volunteers, setVolunteers } = useContext(VolunteerContext);
  const { userMasters, setUserMasters } = useContext(UserMasterContext);

  const [um_login_id, setUmLoginId] = useState('');
  const [um_password, setUmPassword] = useState('');

  const { um_seq } = useParams();
  const history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [userResponse, volunteerResponse] = await Promise.all([
          BasePath.get(`/userMasters/${um_seq}`),
          BasePath.get(`/userVolunteers/${um_seq}`),
        ]);

        setUserMasters(userResponse.data.data);
        setVolunteers(volunteerResponse.data.data.userVolunteers);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [um_seq, setUserMasters, setVolunteers]);

  const handleLogin = () => {
    const isUserMasterValid = userMasters.some(
      (user) => user.um_login_id == um_login_id && user.um_password == um_password
    );

    const isVolunteerValid = volunteers.some(
      (volunteer) => volunteer.um_login_id == um_login_id && volunteer.um_password == um_password
    );

    if (isUserMasterValid || isVolunteerValid) {
      history.push('/home');
    } else {
      console.log('Invalid login credentials');
      // Optionally, you can reset the input fields or show an error message to the user
    }
  };

  const handleRegister = () => {
    history.push('/register');
  };

  return (
    <div className="inner-container">
      <h1>Login</h1>
      <hr />

      <div className="row">
        <div className="col-sm">
          <label>Staff ID : </label>
          <input type="text" value={um_login_id} onChange={(e) => setUmLoginId(e.target.value)} />
        </div>
      </div>

      <div className="row">
        <div className="col-sm">
          <label>Password : </label>
          <input
            type="password"
            className="form-control"
            name="password"
            required="required"
            value={um_password}
            onChange={(e) => setUmPassword(e.target.value)}
          />
        </div>
      </div>

      <div>
        <button onClick={handleLogin}>Login</button>
      </div>

      <div className="row">
        <div className="col-lg">
          <span>Don't have an account ?</span>
        </div>
        <div className="col-lg">
          <span
            onClick={handleRegister}
            style={{
              textDecoration: 'underline',
              color: 'red',
            }}
          >
            Create an account
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
