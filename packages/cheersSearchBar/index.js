import cheersSearchBar from './src/index.vue';
cheersSearchBar.install = function (Vue) {
    Vue.component(cheersSearchBar.name, cheersSearchBar);
};
export default cheersSearchBar;