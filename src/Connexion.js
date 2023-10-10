import React, { useState } from "react";
const ConnectForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [forgotpassword, setforgotPassword] = useState("");
  const handleLogin = (e) => {
    e.preventDefault();
    // il manque la logique de connexion
  };

  return (
    <div className="container">
      <h2>Welcome please login</h2>
      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Login or E-mail
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

          <br />
          <button type="submit" className="btn btn-primary">
            Sign in
          </button>
        </div>
        <br />
        <div className="mb-3">
          <label htmlFor="psetforgotPassword" className="form-label">
            Forgot Password
          </label>
          <input
            type="setforgotassword"
            className="form-control"
            id="setforgotPassword"
            placeholder="Enter your E-mail or Login"
            value={forgotpassword}
            onChange={(e) => setforgotPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Send
        </button>
      </form>
    </div>
  );
};
export default ConnectForm;
