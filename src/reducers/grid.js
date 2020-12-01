const gridReducer = (state = [], action) => {
    switch (action.type) {
        case 'OVERWRITE_GRID':
            return action.payload;
        default:
            return state;
    }
}

export default gridReducer;