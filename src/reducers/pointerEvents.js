const pointerEventsReducer = (state = 'auto', action) => {
    switch (action.type) {
        case 'DISABLE_BUTTONS':
            return 'none';
        case 'ENABLE_BUTTONS':
            return 'auto';
        default:
            return state;
    }
}

export default pointerEventsReducer;