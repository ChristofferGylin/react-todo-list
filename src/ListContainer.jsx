import List from "./List"

const ListContainer = (props) => {

    const data = props.data;
    const setData = props.setData;

    return (

        <div className="flex flex-col w-full mt-28 justify-start items-center border-slate-200">
            <div className="grid grid-cols-[50px_auto_100px_200px] w-full px-4 border-b border-slate-400 font-semibold text-lg text-slate-200">
                <div className="w-full py-2 text-center">#</div>
                <div className="w-full border-l border-slate-400 px-4 py-2">TITLE:</div>
                <div className="w-full border-l border-slate-400 px-4 py-2 text-center">DONE:</div>
                <div className="w-full border-l border-slate-400 px-4 py-2 text-center"></div>
            </div>
            <List data={data} setData={setData} />
        </div>

    )

}

export default ListContainer;