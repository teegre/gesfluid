import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const Users = () => {

  const url = "http://localhost:8000/api/users";

  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios.get(url).then((response) => {
      setUsers(response.data["hydra:member"]);
    })
  }, [])

  return (
    <ul className="list-group list-group-flush">
    {
      users.map((user) => (
        <li className="list-group-item" key={user.id}>
          {user.userId}: {user.firstName} {user.lastName}
        </li>
      ))
    }
    </ul>
  )
}

export default Users
