import { useState } from "react";
import { getFormattedDate } from "./dateHelpers.js";
import Field from "./Field";

export default function EducationExperience() {
  const initialEducationExperience = [
    {
      id: 0,
      institution: "School of Hard Knocks",
      qualification: "Doorknocking",
      awarded: new Date("May 2010"),
    },{
      id: 1,
      institution: "School of Hard Knocks",
      qualification: "Master of Doorknocking",
      awarded: new Date("July 2012"),
    }
  ];
  
  const [entries, setEntries] = useState(
    initialEducationExperience.map((entry) => 
    {return {id: entry.id, editing: false}})
    );
  
  function handleEdit(id) {
    const nextEntries = entries.map(entry => {return {...entry}});
    const currentEntry = nextEntries.find(entry => entry.id === id);
    currentEntry.editing = !currentEntry.editing;
    setEntries(nextEntries);
  }
  
  function handleNew() {
    const nextEntries = entries.map(entry => {return {...entry}});
    // Find the highest current id, ensuring it is at least higher than the id's from initialEducationExperience to avoid that data reappearing.
    const maxId = entries.reduce((maxId, currentValue) => currentValue.id > maxId ? currentValue.id : maxId, initialEducationExperience.length - 1);
    nextEntries.push({id: maxId + 1, editing: true});
    setEntries(nextEntries);
  }

  function handleDelete(id) {
    const nextEntries = entries.map(entry => {return {...entry}}).filter(entry => entry.id !== id);
    setEntries(nextEntries);
  }

  return (
    <>
      <h2>Education</h2>
      {entries.map(entry => {
        const init = initialEducationExperience[entry.id];
        return (
          <div key={entry.id}>
            <Field
              label="Institution"
              initialValue={init ? init.institution : '' }
              editing={entry.editing}
            />
            <br />
            <Field
              label="Qualification"
              initialValue={init ? init.qualification : ''}
              editing={entry.editing}
            />
            <br />
            <Field
              label="Awarded"
              initialValue={init ? getFormattedDate(init.awarded) : ''}
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
  );
}