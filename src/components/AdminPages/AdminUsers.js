import React from "react";

const AdminUsers = () => {
  return (
    <div className="text-center container">
      <table class="table table-success">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Username</th>
            <th scope="col">Gmail</th>
            <th scope="col">Phone Number</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td className="d-flex flex-wrap">Mark</td>
            <td>Mark@gmail.com</td>
            <td>08127776889</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton@gmail.com</td>
            <td>08120006889</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>Larry@gmail.com</td>
            <td>08128886889</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default AdminUsers;
