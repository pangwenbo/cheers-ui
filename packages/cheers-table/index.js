import cheers from './src/index.vue';
cheers.install = function (Vue) {
    Vue.component(cheers.name, cheers);
};
export default cheers;