import { useState } from "react"

export default function Field({ label, initialValue, editing }) {
  const [value, setValue] = useState(initialValue)
  
  function handleChange(event) {
    setValue(event.target.value);
  }

  return (
    <label>
      {label ? `${label}:` : ''}
      {editing ? (
        <input
          value={value}
          onChange={handleChange}
        />
      ) : (
        <p>{value}</p>
      )} 
    </label>
  )
}