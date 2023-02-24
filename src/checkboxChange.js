const checkboxChange = (id, data, dispatch) => {

    const newData = [...data];

    for (let i = 0; i < newData.length; i++) {

        if (id === newData[i].id) {

            if (newData[i].isDone) {

                newData[i].isDone = false;

            } else {

                newData[i].isDone = true;

            }

            break;

        }

    }

    dispatch({ type: 'data', payload: newData });

}

export default checkboxChange;