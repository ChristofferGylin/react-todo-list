import ListItem from "./ListItem";

const List = (props) => {

    const setData = props.setData;
    const data = props.data;

    return (

        data.map((element, i) => {

            return (
                <ListItem key={element.id} index={i} title={element.title} isDone={element.isDone} id={element.id} data={data} setData={setData} />
            )

        })

    )
}

export default List;