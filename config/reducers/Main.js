
var initalState = {
    data : {
        today : [],
        tomorrow : []
    }
};

export function jadwalReducer(state = initalState,action){
    switch (action.type) {
        case 'FETCH':
            console.log('Action fire',action.data)
            return {
                data : action.data
            }
            break;
    
        default:
            return state
            break;
    }
}