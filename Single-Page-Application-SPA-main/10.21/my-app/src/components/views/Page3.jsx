import React from "react";
import { useParams } from "react-router-dom";

export default function Page3(props) {
  const params = useParams();

  console.log(props, params)

  return (
    <p>
      Page3 hiiiiiii the id is: {params.id} and username is {params.username} <br />
      test1 is: {props.test1} <br />
      test2 is: {props.test2}
    </p>
  );
}
