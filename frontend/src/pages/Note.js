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
        if (id == 'new') return

        const response = await fetch(`/api/notes/${id}`);
        const note = await response.json();
        setNote(note);
    }

    const createNote = async () => {
        fetch(`/api/notes/new/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(note)
        })
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
        if (id !== 'new' && !note.body) {
            deleteNote();
        } else if (id !== 'new') {
            updateNote();
        } else if (id === 'new') {
            createNote();
        }

        navigate('/');
    }

    return (
        <div className="note">
            <div className="note-header">
                <h3>
                    <ArrowLeft onClick={handleSubmit} />
                </h3>

                {id !== 'new' ? (
                    <button onClick={deleteNote}>Delete</button>
                    ) : <button onClick={handleSubmit}>Done</button>}
            </div>
            <textarea onChange={(e) => setNote({...note, body: e.target.value})} value={note?.body}></textarea>
        </div>
    )
}

export default Note
