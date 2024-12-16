import { useState } from "react"

export default function Field({ label, initialValue, editing }) {
  const [value, setValue] = useState(initialValue)
  
  function handleChange(event) {
    setValue(event.target.value);
  }

  return (
    <>
      {editing ? (
        <label>
          {label ? `${label}:` : ''}
          <input
            value={value}
            onChange={handleChange}
          />
        </label>
      ) : (
        <div>{label ? `${label}: ` : ''}{value}</div>
      )}
    </>
  )
}