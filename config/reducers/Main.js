
var initalState = {
    data : {
        today : [],
        tomorrow : [],
        all : [],
    },
    status : true
};

export function jadwalReducer(state = initalState,action){
    switch (action.type) {
        case 'FETCH':
            console.log('Action fire',action.data)
            return {
                data : action.data,
                status : false,
            }
            break;
        case 'LOADING':
            return {
                ...state,
                status : true,
            }
        default:
            return state
            break;
    }
}