const Button = (props) => {

    const data = props.data;
    const setData = props.setData;
    const callback = props.callback;
    const itemId = props.itemId;
    const id = props.id
    const title = props.title

    return (

        <button id={id} className="w-36 border-2 border-slate-300 bg-slate-600 hover:bg-slate-500 rounded-2xl py-2 px-6 text-slate-100 " onClick={() => { callback(data, setData, itemId) }}>{title}</button>

    )

}

export default Button;