import { useState } from "react";
import { getFormattedDate } from "./dateHelpers.js";
import Field from "./Field";
import FieldList from "./FieldList.jsx";

export default function PracticalExperience() {
  const initialPracticalExperience = [
    {
      id: 0,
      company: "The Doors",
      title: "Apprentice Doorknocker",
      responsibilities: ["Knocking on doors"],
      from: new Date("August 2012"),
      until: new Date("December 2015"),
    },{
      id: 1,
      company: "The Doors",
      title: "Chief Doorknocker",
      responsibilities: ["Knocking on doors", "Knock knock knocking on wood"],
      from: new Date("Jan 2016"),
      until: new Date("Dec 2025"),
    }
  ];
  
  const [entries, setEntries] = useState(
    initialPracticalExperience.map((entry) => 
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
    // Find the highest current id, ensuring it is at least higher than the id's from initialPracticalExperience to avoid that data reappearing.
    const maxId = entries.reduce((maxId, currentValue) => currentValue.id > maxId ? currentValue.id : maxId, initialPracticalExperience.length - 1);
    nextEntries.push({id: maxId + 1, editing: true});
    setEntries(nextEntries);
  }

  function handleDelete(id) {
    const nextEntries = entries.map(entry => {return {...entry}}).filter(entry => entry.id !== id);
    setEntries(nextEntries);
  }

  return (
    <>
      <h2>Work</h2>
      {entries.map(entry => {
        const init = initialPracticalExperience[entry.id];
        return (
          <div key={entry.id}>
            <Field
              label="Company"
              initialValue={init ? init.company : '' }
              editing={entry.editing}
            />
            <br />
            <Field
              label="Title"
              initialValue={init ? init.title : ''}
              editing={entry.editing}
            />
            <br />
            <FieldList
              label="Main responsibilities"
              initialValues={init ? init.responsibilities : []}
            />
            <br />
            <Field
              label="From"
              initialValue={init ? getFormattedDate(init.from) : ''}
              editing={entry.editing}
            />
            <br />
            <Field
              label="Until"
              initialValue={init ? getFormattedDate(init.until) : ''}
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