import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchUsers } from "../actions";

const UserList = (props) => {
  useEffect(() => {
    props.fetchUsers();
  }, []);
  const renderList = () => {
    return props.users.map((user) => {
      return (
        <div className="item" key={user.id}>
          <div>{user.login}</div>
        </div>
      );
    });
  };
  return (
    <div>
      <h2>Users</h2>
      <div>{renderList()}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    users: Object.values(state.users),
  };
};

export default connect(mapStateToProps, { fetchUsers })(UserList);
