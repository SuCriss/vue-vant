const actions = {
    actionsAddCount(context,n=1){
        return context.commit('addCount',n)
    },
    actionsDisCount(context,n=1){
        return context.commit('disCount',n)
    },
}
export default actions