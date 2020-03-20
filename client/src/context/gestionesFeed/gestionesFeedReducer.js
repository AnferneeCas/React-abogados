import {GET_GESTIONES,ADD_GESTIONES}from '../../types/index';
export default(state,action)=>{
    switch(action.type){
        case GET_GESTIONES:
            return{
                ...state
            }

            case ADD_GESTIONES:
                return{
                    ...state,
                    gestiones:[...state.gestiones,action.payload]
                }

                default:
                    return state;
    }
}