import Button from "./Button";
import checkboxChange from "./checkboxChange";
import deleteItem from "./deleteItem";

const ListItem = (props) => {

    const { index, title, isDone, id, data, dispatch } = props;

    return (

        <div className="grid grid-cols-[50px_auto_100px_200px] w-full px-4 border-b border-slate-400/30 last:border-b-0  text-slate-200 even:bg-slate-600/20">
            <div className="flex items-center justify-center w-full py-2">{index + 1}</div>
            <div className="flex items-center justify-start w-full border-l border-slate-400 px-4 py-2">{title}</div>
            <div className="flex items-center justify-center w-full border-l border-slate-400 px-4 py-2"><input className="w-5 h-5 hover:cursor-pointer" type="checkbox" checked={isDone} onChange={() => { checkboxChange(id, data, dispatch) }} /></div>
            <div className="flex items-center justify-center w-full border-l border-slate-400 px-4 py-2"><Button title="Delete" itemId={id} data={data} dispatch={dispatch} callback={deleteItem} /></div>
        </div>

    )

}

export default ListItem