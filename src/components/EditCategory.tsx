import { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
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

export function EditCategory() {
  const navigate = useNavigate();
  const { id } = useParams();
  //const [token] = useLocalStorage('token');

  const { register, handleSubmit, setValue } = useForm<IFormInput>();

  async function getCategoryById() {
    try {
      const token = window.localStorage.getItem("token");
      const { data } = await axios.get(
        `https://mock-api.arikmpt.com/api/category/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("data", data);

      setValue("name", data.data.name);

      if (data.data.is_active) {
        setValue("status", StatusEnum.active);
      } else {
        setValue("status", StatusEnum.inactive);
      }

      return data;
    } catch (error) {
      console.error(error);
    }
  }

  async function onSubmit(data: IFormInput) {
    console.log(data);
    console.log(data.status === "Active" ? true : false);

    const token = window.localStorage.getItem("token");

    try {
      await axios.put(
        "https://mock-api.arikmpt.com/api/category/update",
        {
          id: id,
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

  useEffect(() => {
    getCategoryById();
  }, []);

  return (
    <div>
      <h1>Edit Category</h1>

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
