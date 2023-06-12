import { useEffect, useState } from "react";
import ListItem from "../components/ListItem";

const NotesList = () => {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        getNotes();
    }, []);

    const getNotes = async () => {
        const response =await fetch("/api/notes/");
        const data = await response.json();
        setNotes(data);
    }

    return ( 
        <div className="notes">
            <div className="notes-header">
                <h2 className="notes-title">&#9782; Notes</h2>
                <p className="notes-count">{notes.length}</p>
            </div>
            {notes.map((note, index) => (
                <ListItem note={note} key={note.id} />
            ))}
        </div>
    );
}
 
export default NotesList;