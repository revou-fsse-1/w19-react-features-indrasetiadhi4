import { Link } from "react-router-dom";

export function Register() {
  return (
    <div>
      <h1>Register</h1>

      <div>
        <form>
          <input id="signup-name" type="text" placeholder="Name" required />

          <input
            id="signup-email"
            type="email"
            placeholder="Email Address"
            required
          />

          <input
            id="signup-password"
            type="password"
            placeholder="Password"
            required
          />

          <input
            id="signup-confirm-password"
            type="password"
            placeholder="Confirm Password"
            required
          />

          <div>
            <button id="signup-button" type="submit">
              Register
            </button>
            <p>
              Already have an account?
              <b>
                <Link to="/login">Login</Link>
              </b>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
