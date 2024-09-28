import { createStore } from 'vuex';
import coachesModule from './modules/coaches/index.js';
//import { requestsModule } from './modules/coaches/index.js'

const store = createStore({
    modules: {
        //coaches will be hence for the namespace for the coachesModule
        coachNamespace: coachesModule
    }
});

export default store;