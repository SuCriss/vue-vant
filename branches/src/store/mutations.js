import * as types from './mutation-type';
const mutations = {
    [types.MUTATAION_TYPES.ADD_count](state,n=1){
        state.isDisabled=false;
        return (state.count+=n)
    },
    [types.MUTATAION_TYPES.DIS_count](state,n=1){
        return (state.count -=n,state.count==0?state.isDisabled=true:state.isDisabled=false)

    }
}
export default mutations