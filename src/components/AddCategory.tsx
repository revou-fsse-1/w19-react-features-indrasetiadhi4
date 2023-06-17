import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

enum StatusEnum {
  active = "Active",
  inactive = "Inactive",
}

interface IFormInput {
  name: String;
  status: StatusEnum;
}

export function AddCategory() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<IFormInput>();

  async function onSubmit(data: IFormInput) {
    const token = window.localStorage.getItem("token");

    try {
      await axios.post(
        "https://mock-api.arikmpt.com/api/category/create",
        {
          name: data.name,
          is_active: data.status === "Active" ? true : false,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      navigate("/");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <h1>Add New Category</h1>

      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register("name")} placeholder="Name" required />

          <select {...register("status")}>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>

          <div>
            <button id="submit" type="submit">
              Submit
            </button>
          </div>
        </form>

        <p>
          <Link to="/">Back</Link>
        </p>
      </div>
    </div>
  );
}
