import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

interface ILoginInput {
  email: String;
  password: String;
}

export function Login() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<ILoginInput>();

  async function onSubmit(input: ILoginInput) {
    try {
      const { data } = await axios.post(
        "https://mock-api.arikmpt.com/api/user/login",
        {
          email: input.email,
          password: input.password,
        }
      );

      localStorage.setItem("token", data.data.token);

      navigate("/");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <h1>Please Login to Continue</h1>

      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("email")}
            type="email"
            placeholder="Email"
            required
          />

          <input
            {...register("password")}
            type="password"
            placeholder="Password"
            required
          />

          <div>
            <button id="login-button" type="submit">
              Login
            </button>
          </div>
        </form>

        <p>Or</p>

        <div>
          <button>
            <Link to="/register" type="button">
              Register
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
