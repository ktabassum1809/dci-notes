import React from "react";
import { useData } from "./useData";

export default function Users() {
  const users = useData("https://fakestoreapi.com/users");

  return (
    <div className="comp-box">
      Users:
      {users?.map((x) => (
        <h5 key={x.id}> {x.username} </h5>
      ))}
    </div>
  );
}
