import cheersForm from './src/index.vue';
cheersForm.install = function (Vue) {
    Vue.component(cheersForm.name, cheersForm);
};
export default cheersForm;