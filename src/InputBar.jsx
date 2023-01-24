import newInput from "./newInput";

const InputBar = (props) => {

    const data = props.data;
    const setData = props.setData;

    return (
        <div className="flex justify-center items-end space-x-8 bg-slate-700 w-full p-4">
            <div className="flex flex-col justify-between items-center">
                <label htmlFor="inputField">Thing to do:</label>
                <input type="text" id="inputField" className="border-2 border-slate-300 rounded-xl p-2 bg-slate-100 text-slate-800" />
            </div>
            <div className="flex flex-col justify-start items-center">
                <label htmlFor="doneCheckbox">Done:</label>
                <input type="checkbox" id="doneCheckbox" />
            </div>
            <div className="flex flex-col justify-center items-center">
                <button id="inputButton" className="w-36 border-2 border-slate-300 bg-slate-600 hover:bg-slate-500 rounded-2xl py-2 px-6 text-slate-100 "
                    onClick={() => {

                        newInput(data, setData)

                    }}>Add to list</button>
            </div>

        </div>
    )

}

export default InputBar;