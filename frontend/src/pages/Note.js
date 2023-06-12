import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ReactComponent as ArrowLeft } from "../assets/arrow-left.svg";

const Note = () => {
    const { id } = useParams();

    const [note, setNote] = useState(null);

    useEffect(() => {
        getNote();
    }, []);

    const getNote = async () => {
        const response = await fetch(`/api/notes/${id}`);
        const note = await response.json();
        setNote(note);
    }


    return (
        <div className="note">
            <div className="note-header">
                <h3>
                    <Link to="/"><ArrowLeft /></Link>
                </h3>
            </div>
            <textarea defaultValue={note?.body}></textarea>
        </div>
    )
}

export default Note
