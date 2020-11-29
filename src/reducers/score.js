const scoreReducer = (state = 0, action) => {
    switch (action.type) {
        case 'ADD':
            return state + action.payload
        case 'RESET':
            return 0
        default:
            return state
    }
}

export default scoreReducer;