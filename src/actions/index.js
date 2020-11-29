// score

export const add = (value) => {
    return {
        type: 'ADD',
        payload: value
    }
}

export const reset = () => {
    return {
        type: 'RESET'
    }
}

// grid

export const randomizeAll = () => {
    return {
        type: 'RANDOMIZE_ALL'
    }
}