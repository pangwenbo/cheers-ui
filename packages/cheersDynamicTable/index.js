import cheersDynamicTable from './src/index.vue';
cheersDynamicTable.install = function (Vue) {
    Vue.component(cheersDynamicTable.name, cheersDynamicTable);
};
export default cheersDynamicTable;