import newInput from "./newInput";
import Button from "./Button";

const InputBar = (props) => {

    const { data, dispatch } = props;

    return (
        <div className="grid grid-cols-[50px_auto_100px_200px] items-center px-12 font-semibold text-lg text-slate-200 bg-slate-700 border-b fixed top-0 border-slate-800 w-full p-4 shadow-lg shadow-gray-900/50">

            <div className="flex flex-col justify-end items-start col-start-2 w-full mr-2">
                <label className="ml-2" htmlFor="inputField">TITLE:</label>
                <input type="text" id="inputField" className="w-full border-2 border-slate-300 rounded-xl py-2 px-4 mr-8 bg-slate-100 text-slate-800" />
            </div>


            <div className="grid grid-rows-2 justify-center items-center h-full">
                <div className="align-self-start"><label htmlFor="doneCheckbox">DONE:</label></div>
                <input className="w-5 h-5 hover:cursor-pointer justify-self-center" type="checkbox" id="doneCheckbox" />
            </div>


            <div className="flex flex-col justify-end items-center h-full">
                <Button title="Add to list" id="inputButton" data={data} dispatch={dispatch} callback={newInput} />
            </div>

        </div>
    )

}

export default InputBar;