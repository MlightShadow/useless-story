import vue from "vue";
import vuex from "vuex";

vue.use(vuex);

const state = {
    count: 0,
};

export default new vuex.Store({
    state,
});
