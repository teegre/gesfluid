import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const Users = () => {

  const [users, setUsers] = useState([]);
  useEffect(() => {
    ax.get('/users').then((response) => {
      setUsers(response.data);
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
