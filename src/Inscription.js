import React, { useState } from "react";
const LoginForm = () => {
  const [surname, setSurname] = useState("");
  const [firstname, setFirstname] = useState("");
  const [dateofbirth, setDateofbirth] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container">
      <br />
      <h2>Registration</h2>
      <br />
      <div className="mb-3">
        <label htmlFor="surname" className="form-label">
          Surname
        </label>
        <input
          type="surname"
          className="form-control"
          id="surname"
          placeholder="Enter your surname here"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="firstname" className="form-label">
          Firstname
        </label>
        <input
          type="firstname"
          className="form-control"
          id="firstname"
          placeholder="Enter your firstname here"
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="dateofbirth" className="form-label">
          Date of birth
        </label>
        <input
          type="date of birth"
          className="form-control"
          id="dateofbirth"
          placeholder="Enter your date of birth here"
          value={dateofbirth}
          onChange={(e) => setDateofbirth(e.target.value)}
          required
        />
      </div>
      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            E-mail
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="exemple@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Enter your password here"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Sign up
        </button>
        <br />
        <br />
        <br />
        <br />
        <br />
        <h4>Already have an account</h4>
        <button type="submit" className="btn btn-primary">
          Sign in
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
