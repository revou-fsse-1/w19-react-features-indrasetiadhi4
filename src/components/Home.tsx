import { Link } from "react-router-dom";

export function Home() {
  function handleEdit() {}
  function handleDelete() {}

  return (
    <div>
      <h1>My Categories</h1>

      <table id="table">
        <thead>
          <tr>
            <th>Category</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Dummy Category oaisudasoiudaosiudasudaosidu</td>
            <td>Active</td>
            <td>
              <button type="button" onClick={handleEdit}>
                Edit
              </button>
              <button type="button" onClick={handleDelete}>
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <p>
        <Link to="/login">LogOut</Link>
      </p>
    </div>
  );
}
