import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { CategoryData } from "./CategoryData";

export type CategoryType = {
  id: string;
  name: string;
  is_active: boolean;
};

export function TableCategories() {
  //const [count, setCount] = useState(0)
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const token = window.localStorage.getItem("token");

  function handleEdit() {}
  function handleDelete() {}

  async function getCategories() {
    try {
      const { data } = await axios.get(
        "https://mock-api.arikmpt.com/api/category",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setCategories(data.data);
    } catch (error) {
      console.error(error);
    }
  }

  // async function getCategories() {
  //   const response = await fetch("https://pokeapi.co/api/v2/pokemon");
  //   const data = await response.json();
  //   console.log("data", data);

  //   setCategories(data.results);
  // }

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div>
      <h1>List of Categories</h1>

      <Link to="/add" type="button">
        Add new category
      </Link>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Category</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {categories.map((category) => (
            <CategoryData
              key={category.name}
              id={category.id}
              name={category.name}
              isActive={category.is_active}
              setCategories={setCategories}
            />
          ))}
        </tbody>
      </table>

      <p>
        <Link to="/login">LogOut</Link>
      </p>
    </div>
  );
}
