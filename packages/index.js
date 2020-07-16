import cheersTable from './cheers-table'
import testB from './testB'
export default {
    install(Vue) {
        Vue.use(cheersTable);
        Vue.use(testB)
    },
}