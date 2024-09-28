import mutations from './mutations.js'
import actions from './actions.js';
import getters from './getters.js'

export default {
    namespace: true,
    state(){},
    //mutations: mutations, can also be used as below
    mutations,
    actions,
    getters,

}