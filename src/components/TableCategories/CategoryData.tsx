import { Link } from "react-router-dom";
import axios from "axios";
import { CategoryType } from "./TableCategories";

type CategoryDataProps = {
  id: string;
  name: string;
  isActive: boolean;
  setCategories: React.Dispatch<React.SetStateAction<CategoryType[]>>;
};

export function CategoryData(props: CategoryDataProps) {
  //const navigate = useNavigate();

  const token = window.localStorage.getItem("token");

  function handleEdit() {}
  function handleDelete() {
    deleteCategoryById();
  }

  async function deleteCategoryById() {
    axios.delete(`https://mock-api.arikmpt.com/api/category/${props.id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    //navigate("/");
  }

  return (
    <tr>
      <td>{props.id}</td>

      <td>{props.name}</td>

      {props.isActive ? <td>Active</td> : <td>Inactive</td>}

      <td>
        <button type="button" onClick={handleEdit}>
          <Link to={`/edit/${props.id}`}>Edit</Link>
        </button>
        <button type="button" onClick={handleDelete}>
          Delete
        </button>
      </td>
    </tr>
  );
}
