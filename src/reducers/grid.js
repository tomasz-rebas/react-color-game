import randomizeColors from '../functions/randomizeColors';
import settings from '../settings.json';

const initialGrid = randomizeColors(
    settings.rows,
    settings.columns,
    settings.colors.length
);

const gridReducer = (state = initialGrid, aciton) => {
    switch (aciton.type) {
        case 'RANDOMIZE_ALL':
            return randomizeColors(
                settings.rows,
                settings.columns,
                settings.colors.length
            );
        default:
            return state;
    }
}

export default gridReducer;