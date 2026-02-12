import React from "react";

const UserRow = React.memo(({ index, style, data }) => {
  const user = data[index];

  return (
    <div style={style} className="row">
      <span>{user.name}</span>
      <span>{user.email}</span>
      <span className="role">{user.role}</span>
    </div>
  );
});

export default UserRow;
