const reducer = (state, action) => {

    switch (action.type) {

        case 'data':
            return { ...state, data: action.payload };
        default:
            throw new Error();

    }

}

export default reducer;