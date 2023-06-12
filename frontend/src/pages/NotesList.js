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
        <div className="notes-list">
            {notes.map((note, index) => (
                <ListItem note={note} key={note.id} />
            ))}
        </div>
    );
}
 
export default NotesList;