import React from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

const AdminUsers = () => {
  return (
    <div className="text-center container">
      <Table className="table table-success">
        <Thead>
          <Tr>
            <Th>#</Th>
            <Th>Name</Th>
            <Th>Email</Th>
            <Th>Phone Number</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>1</Td>
            <Td>Tablescon</Td>
            <Td>9 April 2019</Td>
            <Td>082382269138</Td>
          </Tr>
          <Tr>
            <Td>2</Td>
            <Td>Capstone Data</Td>
            <Td>19 May 2019</Td>
            <Td>085835998805</Td>
          </Tr>
          <Tr>
            <Td>3</Td>
            <Td>Tuscaloosa D3</Td>
            <Td>29 June 2019</Td>
            <Td>082382269138</Td>
          </Tr>
        </Tbody>
      </Table>
    </div>
  );
};
export default AdminUsers;
