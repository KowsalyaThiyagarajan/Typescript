import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NoteState } from "./Reducers/notesReducer";
import NewNote from "./NewNote";
import { addNote } from "./Action/Action";
const Main = () => {
  const notes = useSelector<NoteState, NoteState["notes"]>(
    (state) => state.notes
  );
  const dispatch = useDispatch();

  const onaddNote = (note: string) => {
    dispatch(addNote(note));
  };
  return (
    <>
      <NewNote addNote={onaddNote} />
     
      <ul className="newnotes">
        {notes.map((note) => {
          return <li key={note}>{note}</li>;
        })}
      </ul>
    </>
  );
};
export default Main;
