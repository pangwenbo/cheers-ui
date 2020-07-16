import cheersTable from './cheersTable'
import testB from './testB'
export default {
    install(Vue) {
        Vue.use(cheersTable);
        Vue.use(testB)
    },
}