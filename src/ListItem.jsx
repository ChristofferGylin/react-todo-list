const ListItem = (props) => {

    const index = props.index;
    const title = props.title;
    const isDone = props.isDone;
    const itemId = props.id;

    return (

        <div className="flex w-full justify-between p-4 border-b-2 border-slate-200 text-slate-200">
            <div className="font-medium">{index + 1}</div>
            <div>{title}</div>
            <div><input type="checkbox" checked={isDone} onChange={() => { checkboxChange(itemId) }} /></div>
            <div><button onClick={() => { deleteItem(itemId) }}>Delete</button></div>
        </div>

    )

}

export default ListItem