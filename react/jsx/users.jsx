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

  {
    users.map((user) => {
      return (
        <>
          <h2>USER</h2>
          <div>{user.firstName} {user.lastName} ({user.userId})</div>
        </>
      )
    } )
  }
}

export default Users
