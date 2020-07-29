import React from "react";
import { useStateValue } from "./StateProvider";

function CheckOut() {
  const [{ bascket }] = useStateValue();

  return <div className="checkout"></div>;
}

export default CheckOut;
