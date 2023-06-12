import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
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

    const updateNote = async () => {
        fetch(`/api/notes/${id}/update/`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(note)
        })
    }

    const deleteNote = async () => {
        fetch(`/api/notes/${id}/delete/`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        navigate('/');
    }

    const navigate = useNavigate();

    const handleSubmit = () => {
        updateNote();
        navigate('/');
    }

    return (
        <div className="note">
            <div className="note-header">
                <h3>
                    <ArrowLeft onClick={handleSubmit} />
                </h3>
                
                <button onClick={deleteNote}>Delete</button>
            </div>
            <textarea onChange={(e) => setNote({...note, body: e.target.value})} defaultValue={note?.body}></textarea>
        </div>
    )
}

export default Note
