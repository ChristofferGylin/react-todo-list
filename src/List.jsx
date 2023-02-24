import ListItem from "./ListItem";

const List = (props) => {

    const { data, dispatch } = props;

    return (

        data.map((element, i) => {

            return (
                <ListItem key={element.id} index={i} title={element.title} isDone={element.isDone} id={element.id} data={data} dispatch={dispatch} />
            )

        })

    )
}

export default List;