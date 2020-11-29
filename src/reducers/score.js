const scoreReducer = (state = 0, action) => {
    switch (action.type) {
        case 'ADD_TO_SCORE':
            return state + action.payload
        case 'RESET_SCORE':
            return 0
        default:
            return state
    }
}

export default scoreReducer;