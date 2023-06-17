import { Link } from "react-router-dom";

export function Register() {
  return (
    <div>
      <h1>Please Register To Our Platform</h1>

      <div>
        <form>
          <input id="signup-name" type="text" placeholder="Name" required />

          <input id="signup-email" type="email" placeholder="Email" required />

          <input
            id="signup-password"
            type="password"
            placeholder="Password"
            required
          />

          <div>
            <button id="signup-button" type="submit">
              Register
            </button>
          </div>
        </form>

        <p>Or</p>

        <div>
          <button>
            <Link to="/login" type="button">
              Login
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
