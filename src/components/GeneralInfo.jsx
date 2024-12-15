import { useState } from "react";
import Field from "./Field";

export default function GeneralInfo() {
  const [editing, setEditing] = useState(true);
  
  const initialGeneralInfo = {
    name: "John Smith",
    email: "johnsmith@gmail.com",
    phone: "0123 456 789"
  };

  function handleClick() {
    setEditing(!editing);
  }
  
  return (
    <>
      <h2>General Information</h2>
      <Field
        label="Name"
        initialValue={initialGeneralInfo.name}
        editing={editing}
      />
      <br />
      <Field
        label="Email"
        initialValue={initialGeneralInfo.email}
        editing={editing}
      />
      <br />
      <Field
        label="Phone"
        initialValue={initialGeneralInfo.phone}
        editing={editing}
      />
      <br />
      <button onClick={handleClick}>
        {editing ? "Save" : "Edit"}
      </button>
    </>
  )
}