import React, { useState, useEffect } from "react";

export default function User(props) {
  const [user, setUser] = useState(null);
  async function fetchUserData(id) {
    const response = await fetch("/" + id);
    setUser(await response.json());
  }
  useEffect(() => {
    fetchUserData(props.id);
  }, [props.id]);
  return user === null ? (
    <div>loading...</div>
  ) : (
    <details>
      <summary aria-label="name">{user.name}</summary>
      <strong aria-label="age">{user.age}</strong> years old
      <br />
      lives in <span aria-label="address">{user.address}</span>
    </details>
  );
}
