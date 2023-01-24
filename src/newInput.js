const newInput = (data, setData) => {
    const inputField = document.getElementById('inputField');
    const checkbox = document.getElementById('doneCheckbox')

    if (inputField.value.length < 3) {

        document.getElementById('inputButton').innerHTML = 'Title to short';

        setTimeout(() => {
            document.getElementById('inputButton').innerHTML = 'Add to list';
        }, 2000);

        return;

    }

    const newData = [...data]
    const inputTitle = inputField.value;
    const isDone = checkbox.checked;
    let idNumber = 0;

    const checkUniqueId = () => {

        for (let i = 0; i < newData.length; i++) {

            if (idNumber === newData[i].id) {

                idNumber++;
                checkUniqueId();

            }

        }
    }

    checkUniqueId();

    const input = {

        title: inputTitle,
        isDone,
        id: idNumber

    }

    newData.push(input);

    setData(newData);

    console.log(data);

    inputField.value = '';
    checkbox.checked = false;

}

export default newInput;