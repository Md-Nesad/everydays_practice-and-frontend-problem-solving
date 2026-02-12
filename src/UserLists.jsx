import { FixedSizeList as List } from "react-window";
import UserRow from "./UserRow";

function UserLists({ users }) {
  return (
    <List
      height={500}
      itemCount={users.length}
      itemSize={50}
      width="100%"
      itemData={users}
    >
      {UserRow}
    </List>
  );
}

export default UserLists;
