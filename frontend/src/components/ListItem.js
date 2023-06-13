import { Link } from "react-router-dom";

const getTitle = (note) => {
    const title = note.split('\n')[0];
    if (title.length > 45) {
        return title.slice(0, 45)
    }

    return title;
}

const getTime = (date) => {
    return new Date(date).toLocaleDateString();
}

const getContent = (note) => {
    const title = getTitle(note.body);
    let content = note.body.replaceAll('\n', ' ');
    content = content.replaceAll(title, '');

    if (content.length > 45) {
        return content.slice(0, 45) + '...';
    }

    return content;
}

const ListItem = ({note}) => {
    return ( 
        <Link to={`/notes/${note.id}`}>
            <div className="notes-list-item">
                <h3>{getTitle(note.body)}</h3>
                <p><span>{getTime(note.updated)}</span> {getContent(note)}</p>
            </div>
        </Link>
    );
}
 
export default ListItem;