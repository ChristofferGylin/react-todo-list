const Button = (props) => {

    const { data, dispatch, callback, itemId, id, title } = props;


    return (

        <button id={id} className="w-40 border-2 border-slate-300 bg-slate-600 hover:bg-slate-500 rounded-2xl py-2 px-6 text-slate-100 " onClick={() => { callback(data, dispatch, itemId) }}>{title}</button>

    )

}

export default Button;