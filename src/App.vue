<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png" />
        <!--资源栏位-->

        <field msg="Welcome to Your Vue.js App" />
        <!-- 选择 -->
        {{ $store.getters.get }}
    </div>
</template>

<script>
import field from "./components/farm.vue";

export default {
    name: "App",
    components: {
        field,
    },
    created() {
        console.log(this.$store.getters.get);
    },
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
