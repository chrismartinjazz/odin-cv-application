import { useState } from "react"
import Field from "./Field";

export default function FieldList({ label, initialValues, editing }) {
  const [entries, setEntries] = useState(
    initialValues.map((entry) => {return {id: entry.id}})
  );

  function handleNew() {
    const nextEntries = entries.map(entry => {return {...entry}});
    // Find the highest current id, ensuring it is at least higher than the id's from initialPracticalExperience to avoid that data reappearing.
    const maxId = entries.reduce((maxId, currentValue) => currentValue.id > maxId ? currentValue.id : maxId, initialValues.length - 1);
    nextEntries.push({id: maxId + 1});
    setEntries(nextEntries);
  }
  
  function handleDelete(id) {
    const nextEntries = entries.map(entry => {return {...entry}}).filter(entry => entry.id !== id);
    setEntries(nextEntries);
  }
  
  return (
    <>
      <label>{label}</label>
      {entries.map(entry => {
        const init = initialValues.find(element => element.id === entry.id);
        return (
          <div key={entry.id}>
            <Field
              initialValue={init ? init.value : '' }
              editing={editing}
            />
            <br />
            {editing && <button onClick={() => {handleDelete(entry.id)}}>Delete</button>}
          </div>
        )
      })}
      {editing && <button onClick={handleNew}>New</button>}
    </>
  )
}