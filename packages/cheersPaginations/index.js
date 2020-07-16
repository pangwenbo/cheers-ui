import cheersPaginations from './src/index.vue';
cheersPaginations.install = function (Vue) {
    Vue.component(cheersPaginations.name, cheersPaginations);
};
export default cheersPaginations;