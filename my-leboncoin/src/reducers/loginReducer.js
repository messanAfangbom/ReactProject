const initialState = {connexionState:false}

function login(state=initialState, action)
{
    let nextState;
    switch (action.type) {
        case 'TOOGLE_LOGIN':
            return nextState = {
                ...state,
                connexionState: !state.connexionState
            } || state;
        default:
            return state;
    }
}

export default login;