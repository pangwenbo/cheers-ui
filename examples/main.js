import Vue from 'vue'
import App from './App.vue'
import router from './router'
import cheers from '../packages/index'
Vue.use(cheers)
import 'element-ui/lib/theme-chalk/index.css';
import {
    MessageBox,
    Message,
    Loading,
    Notification,
    Tag,
    Switch,
    ColorPicker,
    Pagination,
    Dialog,
    Autocomplete,
    Dropdown,
    DropdownMenu,
    DropdownItem,
    Menu,
    Submenu,
    MenuItem,
    MenuItemGroup,
    Input,
    InputNumber,
    Radio,
    RadioGroup,
    RadioButton,
    Checkbox,
    CheckboxButton,
    CheckboxGroup,
    Select,
    Option,
    OptionGroup,
    Button,
    ButtonGroup,
    Table,
    TableColumn,
    DatePicker,
    Form,
    FormItem,
    Row,
    Col,
    Upload,
    Cascader,
    Container,
    Header,
    Aside,
    Main,
    Icon,
    Tooltip,
    Breadcrumb,
    BreadcrumbItem,
    Footer,
    Tree,
    Transfer,
    Progress,
    Card,
    Tabs,
    TabPane,
    Drawer,
    Popover
} from 'element-ui'
Vue.use(Tabs).use(Loading.directive).use(Popover).use(TabPane).use(Pagination).use(Drawer)
    .use(Tag).use(Switch).use(ColorPicker).use(Dialog).use(Autocomplete).use(Dropdown)
    .use(DropdownMenu).use(DropdownItem).use(Menu).use(Submenu).use(MenuItem)
    .use(MenuItemGroup).use(Input).use(InputNumber).use(Radio).use(RadioGroup).use(RadioButton)
    .use(Checkbox).use(CheckboxButton).use(CheckboxGroup).use(Select).use(Option).use(OptionGroup)
    .use(Button).use(ButtonGroup).use(Table).use(TableColumn).use(DatePicker).use(Form).use(FormItem)
    .use(Row).use(Col).use(Upload).use(Cascader).use(Container).use(Header).use(Aside).use(Main)
    .use(Tooltip).use(Breadcrumb).use(BreadcrumbItem).use(Icon).use(Footer).use(Tree).use(Transfer)
    .use(Progress).use(Card)
Vue.prototype.$ELEMENT = {
    size: localStorage.getItem("size") || 'mini',
};
Vue.config.productionTip = false
new Vue({
    router,
    render: h => h(App)
}).$mount('#app')