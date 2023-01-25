import ListItem from "./ListItem";

const List = (props) => {

    return (

        props.data.map((element, i) => {

            return (
                <ListItem key={element.id} index={i} title={element.title} isDone={element.isDone} id={element.id} />
            )

        })

    )
}

export default List;