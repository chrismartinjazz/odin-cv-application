import { useState } from "react"
import Field from "./Field";

export default function FieldList({ label, initialValues }) {
  // TODO - adjust this so there is just one Edit / Save button - clicking it moves to edit mode for whole list.
  // (each entry still should have its own Delete button).
  const [entries, setEntries] = useState(
    initialValues.map((entry) => {return {id: entry.id, editing: false}})
  );

  function handleEdit(id) {
    const nextEntries = entries.map(entry => {return {...entry}});
    const currentEntry = nextEntries.find(entry => entry.id === id);
    currentEntry.editing = !currentEntry.editing;
    setEntries(nextEntries);
  }
  
  function handleNew() {
    const nextEntries = entries.map(entry => {return {...entry}});
    // Find the highest current id, ensuring it is at least higher than the id's from initialPracticalExperience to avoid that data reappearing.
    const maxId = entries.reduce((maxId, currentValue) => currentValue.id > maxId ? currentValue.id : maxId, initialValues.length - 1);
    nextEntries.push({id: maxId + 1, editing: true});
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
            const init = initialValues[entry.id];
            return (
              <div key={entry.id}>
                <Field
                  initialValue={init ? init : '' }
                  editing={entry.editing}
                />
                <br />
                <button onClick={() => {handleEdit(entry.id)}}>
                  {entry.editing ? "Save" : "Edit"}
                </button>
                {entry.editing ? (
                  <button onClick={() => {handleDelete(entry.id)}}>
                    Delete
                  </button>
                ) : (
                  ''
                )}
              </div>
            )
          })}
          <button onClick={handleNew}>New</button>
        </>
  )
}