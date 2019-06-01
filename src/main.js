import Vue from 'vue'
import App from './App.vue'
import "ant-design-vue/dist/antd.css";
import { Table,Button,Popconfirm,Drawer,Form,Input,Select,Radio,Pagination } from 'ant-design-vue';

// Vue.component(Button.name, Button);
Vue.config.productionTip = false
Vue.use(Table)
Vue.use(Button)
Vue.use(Popconfirm)
Vue.use(Drawer)
Vue.use(Form)
Vue.use(Input)
Vue.use(Select)
Vue.use(Radio)
Vue.use(Pagination)


new Vue({
  render: h => h(App),
}).$mount('#app')
