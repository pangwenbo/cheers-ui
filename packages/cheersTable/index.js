import cheersTable from './src/index.vue';
cheersTable.install = function (Vue) {
    Vue.component(cheersTable.name, cheersTable);
};
export default cheersTable;