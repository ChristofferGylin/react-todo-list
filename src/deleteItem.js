const deleteItem = (id, data, setData) => {

    const newData = [...data];

    for (let i = 0; i < newData.length; i++) {

        if (id === newData[i].id) {

            newData.splice(i, 1);

            break;

        }

    }

    setData(newData);

}

export default deleteItem;