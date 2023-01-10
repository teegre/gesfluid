import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const Users = () => {
  console.log('users!');

  const url = "http://localhost:8000/api/users";

  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios.get(url).then((response) => {
      setUsers(response.data["hydra:member"]);
    })
  }, [])

  console.log(users);

  return (
    users.map((user) => {
      return (
        <li className="list-group-item" key={user.id}>
          {user.userId}: {user.firstName} {user.lastName}
        </li>
      )
    })
  )
}

export default Users
