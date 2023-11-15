const initialState = {
    loading: false,
    data: null,
    error: null
};

const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'DATA':
            return {
                ...state,
                ...action.payload
            };
        case 'LOADING':
            return {
                ...state,
                ...action.payload
            };
        case 'ERROR':
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    };
};

export default taskReducer;