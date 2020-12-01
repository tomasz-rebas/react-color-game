import randomizeColors from '../functions/randomizeColors';
import settings from '../settings.json';

const initialGrid = randomizeColors(
    settings.rows,
    settings.columns,
    settings.colors.length
);

const gridReducer = (state = initialGrid, action) => {
    switch (action.type) {
        case 'OVERWRITE_GRID':
            return action.payload;
        default:
            return state;
    }
}

export default gridReducer;