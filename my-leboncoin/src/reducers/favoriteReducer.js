const initialState = { favoriteAnnonce: [] }

export default function toggleFavorite(state = initialState, action) {
    let nextState;
    switch (action.type) {
        
        case 'TOOGLE_FAVORITE':
            const favoriteAnnonceIndex = state.favoriteAnnonce.findIndex(item => item.id === action.value.id);
            if (favoriteAnnonceIndex !== -1) {
                nextState = {
                    ...state,
                    favoriteAnnonce: state.favoriteAnnonce.filter(item => item.id !== action.value.id)
                }
            } else {
                nextState = {
                    ...state,
                    favoriteAnnonce: [...state.favoriteAnnonce, action.value]
                }
            }
            return nextState || state;

        default:
            return state;
    }
}