import heroActions from "../actions/heroActions";

const initialState = {
    heroes: [],
    status: "",
    loading: false
}

const heroReducer = (state=initialState, action) => {
    switch(action.type) {
        case heroActions.REQUEST_HEROES:
            if(action.status === heroActions.STATUS_REQUESTING) {
                return Object.assign({}, state, { loading: true });
            } else if(action.status === heroActions.STATUS_SUCCESS) {
                const data = action.response.data;
                const heroes = data;
                return {
                    heroes,
                    loading: false
                }
            } else if(action.status === heroActions.STATUS_FAILURE) {
                return state;
            } else {
                return state;
            }
        case heroActions.ADD_HERO:
            return Object.assign({}, state, { status: action.status });
        default:
            return state;
    }
}

export default heroReducer;