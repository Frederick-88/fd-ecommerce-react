import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

import { getDataUser } from "../../actionCreators/AdminAction";

const AdminUsers = (props) => {
  useEffect(() => {
    props.getDataUser();
  }, []);

  console.log(props.dataUser);

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
          {props.dataUser.map((item, index) => {
            return (
              <Tr key={index}>
                <Td>{index + 1}</Td>
                <Td>{item.username}</Td>
                <Td>{item.email}</Td>
                <Td>0{item.phoneNumber}</Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    dataUser: state.AdminUserReducer.dataUser,
  };
};

const mapDispatchToProps = {
  getDataUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminUsers);
