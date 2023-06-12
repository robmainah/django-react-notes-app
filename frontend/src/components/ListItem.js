const ListItem = ({note}) => {
    return ( 
        <div className="note-item">
            <h3>{note.body}</h3>
        </div>
    );
}
 
export default ListItem;