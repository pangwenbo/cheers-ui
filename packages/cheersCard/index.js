import cheersCard from './src/index.vue';
cheersCard.install = function (Vue) {
    Vue.component(cheersCard.name, cheersCard);
};
export default cheersCard;