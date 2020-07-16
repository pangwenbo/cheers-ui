import cheersTable from './cheersTable'
import cheersSeachBar from './cheersSeachBar'
import cheersForm from './cheersForm'
import cheersFormTitle from './cheersFormTitle'
import cheersCard from './cheersCard'
import cheersPaginations from './cheersPaginations'
import testB from './testB'
export default {
    install(Vue) {
        Vue.use(cheersCard);
        Vue.use(cheersFormTitle);
        Vue.use(cheersForm);
        Vue.use(cheersTable);
        Vue.use(cheersSeachBar);
        Vue.use(cheersPaginations);
        Vue.use(testB)
    },
}