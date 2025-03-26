import BoxB from "./BoxB";
import { useContext } from "react";
import { MyContext } from "../context/ExampleContext";

export default function BoxA() {
const {count} = useContext(MyContext)

  return (
    <div>
      BoxA the count is: {count}
      <BoxB />
    </div>
  );
}
