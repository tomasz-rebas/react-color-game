export const addToScore = (value) => {
    return {
        type: 'ADD_TO_SCORE',
        payload: value
    }
}

export const resetScore = () => {
    return {
        type: 'RESET_SCORE'
    }
}

export const randomizeAllColors = () => {
    return {
        type: 'RANDOMIZE_ALL_COLORS'
    }
}