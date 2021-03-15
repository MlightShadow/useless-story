const state = () => ({
    resource: {
        gold: 0,
        seed: {
            seed1: 0,
        },
        product: {
            product1: 0,
        },
    },
    farm: [],
    task: [],
});

const getters = {
    get: state => {
        return state;
    }
};

const actions = {
    save() {
        localStorage.setItem("data", state);
    },
    load(context) {
        let data = localStorage.getItem("data");
        if(data){
           context.commit("load") 
        }
    },
};

const mutations = {
    load(state, data) {
        state = data;
    },
};

export default {
    state,
    getters,
    actions,
    mutations,
};
