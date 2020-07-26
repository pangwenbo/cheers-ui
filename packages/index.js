import cheersTable from "./cheersTable";
import cheersSearchBar from "./cheersSearchBar";
import cheersForm from "./cheersForm";
import cheersFormTitle from "./cheersFormTitle";
import cheersCard from "./cheersCard";
import cheersPaginations from "./cheersPaginations";
import cheersUploadFile from "./cheersUploadFile";
import cheersUploadImage from "./cheersUploadImage";
import cheersDynamicTable from "./cheersDynamicTable";

import testB from "./testB";
import Vue from "vue";

import VueResource from "vue-resource";
// Don't forget to call this
Vue.use(VueResource);
export default {
  install(Vue) {
    Vue.use(cheersCard);
    Vue.use(cheersFormTitle);
    Vue.use(cheersForm);
    Vue.use(cheersTable);
    Vue.use(cheersSearchBar);
    Vue.use(cheersPaginations);
    Vue.use(cheersUploadFile);
    Vue.use(cheersUploadImage);
    Vue.use(cheersDynamicTable);
    Vue.use(testB);
  },
};