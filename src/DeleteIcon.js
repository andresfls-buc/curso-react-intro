import React from "react";
import { FaUserAltSlash } from "react-icons/fa";

function DeleteIcon({ className, onClick }) {
  return <FaUserAltSlash className={className} onClick={onClick} />;
}

export { DeleteIcon };
