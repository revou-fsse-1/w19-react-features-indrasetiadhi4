import { Link } from "react-router-dom";

export function Login() {
  return (
    <div>
      <h1>Login</h1>

      <div>
        <form>
          <input id="login-email" type="email" placeholder="Email" required />

          <input
            id="login-password"
            type="password"
            placeholder="Password"
            required
          />

          <div>
            <button id="login-button" type="submit">
              Login
            </button>
            <p>
              You don't have an account?
              <b>
                <Link to="/register">SignUp</Link>
              </b>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
