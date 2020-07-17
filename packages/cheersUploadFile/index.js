import cheersUploadFile from "./src/index.vue";
cheersUploadFile.install = function(Vue) {
  Vue.component(cheersUploadFile.name, cheersUploadFile);
};
export default cheersUploadFile;
